function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

var config = {
  hostUrl: 'https://yncq.szdbi.com',
  apiUrl: '/yncq/',
  // hostUrl: 'http://localhost:9091'
};

function convertUrl(_url) {
  var url = config.hostUrl;
  if (_url.substr(0, 1) != '/') {
    url = url + config.apiUrl;
  }
  return url + _url;
}

var authUi = false;

function my_ajax(params) {
  var _this = this;
  var lastRequest = cache('last-request');
  var currentTime = new Date().getTime();
  if (lastRequest.url == params.url && currentTime - lastRequest.time < 500) {
    console.log('重复请求');
    return false;
  }
  cache('last-request', { url: params.url, time: currentTime });
  var showLoaded = false;
  if (params.url.match(/(save|update|delete)/gi)) {
    showLoaded = true;

  }
  if (showLoaded) {
    wx.showLoading({
      title: '正在处理，请稍后',
    });
  }
  wx.request({
    url: convertUrl(params.url),
    method: params.type || 'post',
    data: params.data || {},
    header: {
      'Content-Type': params.contentType || 'application/x-www-form-urlencoded',
      'x-access-token': cacheToken()
    },
    success: function (response) {
      if (showLoaded) {
        wx.hideLoading();
      }
      var data = response.data;
      if (true === data.success) {
        (params.success || function () { })(data);
      } else if ('no_user' == data.msg ||
        'no_token' == data.msg ||
        'error_token' == data.msg ||
        'authority' == data.msg) {
        (params.failure || function () {
          login();
        })();
      } else if ('no_weixin_authority' == data.msg) {
      } else if (data.msg) {
        (params.failure || function () {
          wx.showToast({
            title: data.msg,
            icon: 'none',
            duration: 2000
          });
        })(data);
      } else {
        console.error(data);
      }
    },
    fail: function (e) {
      wx.showToast({
        title: '网络异常！' + e.errMsg,
        icon: 'none',
        duration: 2000
      });
      return false;
    }
  });
}

function cache() {
  if (arguments.length == 0) {
    wx.clearStorageSync();
  } else if (arguments.length == 1) {
    return wx.getStorageSync(arguments[0]);
  } else if (arguments.length == 2) {
    wx.setStorageSync(arguments[0], arguments[1]);
  }
}

function cacheUser() {
  if (arguments.length == 0) {
    return cache('user');
  } else if (arguments.length == 1) {
    cache('user', arguments[0]);
  }
}

function cacheToken() {
  if (arguments.length == 0) {
    return cache('x-access-token');
  } else if (arguments.length == 1) {
    cache('x-access-token', arguments[0]);
  }
};

function login(_parentCode, _callback) {
  var parentCode = "";
  if (_parentCode) {
    parentCode = _parentCode;
  }
  wx.login({
    success: function (response) {
      var code = response.code;
      my_ajax({
        url: 'weixinUser/miniProgramUserLogin',
        data: {
          code: code,
          parentCode: parentCode
        },
        success: function (response) {
          cacheToken(response.item.token);
          enumConfigInit();
          valueConfigInit();
          findSeller();
          my_ajax({
            url: 'member/findOneMemberByUser',
            success: function (response) {
              cacheMember(response.item);
              if (!response.item.iconPath || !response.item.nickname) {
                wx.navigateTo({
                  url: "/pages/login/index"
                });
              } else if (_callback) {
                _callback();
              }
            }
          });
        }
      });
    }
  });
}
function cacheMember() {
  if (0 == arguments.length) {
    return cache('member');
  } else {
    cache('member', arguments[0]);
  }
}

function findSeller() {
  my_ajax({
    url: 'seller/findSellerByRecommend',
    success: function (response) {
      cacheSeller(response.item);
    }
  });
}
function cacheSeller() {
  if (0 == arguments.length) {
    return cache('seller');
  } else {
    cache('seller', arguments[0]);
  }
}

function getCurentUrl() {
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  return currentPage.route;
}

function enumConfigInit() {
  my_ajax({
    url: '/enumConstant/findEnumConstant',
    success: function (response) {
      cache('enum_config', response.item);
    }
  });
};

function getEnumConfig() {
  var config = cache('enum_config');
  if (0 == arguments.length) {
    return config;
  } else {
    return config[arguments[0]];
  }
};

function valueConfigInit() {
  my_ajax({
    url: 'valueConfig/pageValueConfig',
    contentType: 'application/json',
    success: function (response) {
      var valueConfigMap = {};
      var items = response.items;
      for (var i in items) {
        var item = items[i];
        valueConfigMap[item.id] = item;
      }
      cache('value-config', valueConfigMap);
    }
  });
};

function getValueConfig() {
  var config = cache('value-config');
  return config[arguments[0]];
};
//这里判断用户是否授权
function onReady(_option, _callback) {
  var token = cacheToken();
  if (token) {
    my_ajax({
      url: 'user/validToken',
      data: {
        token: token
      },
      success: function (response) {
        var validResult = response.item;
        if (validResult) {
          _callback();
        } else {
          login(null, _callback);
        }
      }
    });
  } else {
    var parentCode = '';
    var query = _option.query;
    if (query) {
      parentCode = query.scene || query.parentCode;
    }
    if (_option.parentCode) {
      parentCode = _option.parentCode;
    }
    if (_option.scene) {
      parentCode = _option.scene;
    }
    login(parentCode, _callback);
  }
};

function navBack() {
  var pages = getCurrentPages();
  var beforePage = pages[pages.length - 2];
  if (pages.length >= 2) {
    console.log(pages.length);
    wx.navigateBack();
  } else {
    console.log('返回首页');
    wx.switchTab({
      url: "/pages/index/index"
    })
  }
};

module.exports = {
  my_ajax: my_ajax,
  formatTime: formatTime,
  config: config,
  cache: cache,
  cacheUser: cacheUser,
  login: login,
  getCurentUrl: getCurentUrl,
  getEnumConfig: getEnumConfig,
  getValueConfig: getValueConfig,
  cacheMember: cacheMember,
  cacheSeller: cacheSeller,
  navBack: navBack,
  onReady: onReady
}