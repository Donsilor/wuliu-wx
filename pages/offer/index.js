// pages/offer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: '',
    tab_item: ['国际空运', '国际快递', '国际海运', '中欧班列', '国内专线', '国际小包'],
    // tab_item: [
    //   { type: '国际空运' },
    //   { type: '国际空运' },
    //   { type: '国际空运' },
    //   { type: '国际空运' }
    // ],
    // 排序方式默认样式
    currentData: 0,
    offer:[
      {
        from_a: '深圳',
        to_a: '哈尔滨',
        time: '5-7天',
        priceItem: [
          { measure: '20kg', price: '5' },
          { measure: '20kg', price: '5' },
          { measure: '20kg', price: '5' }
        ],
        name: '深圳国际物流公司',
        scope: '全深圳市及周边全深圳市及周边'
      },
      {
        from_a: '深圳',
        to_a: '哈尔滨',
        time: '5-7天',
        priceItem: [
          { measure: '20kg', price: '5' },
          { measure: '20kg', price: '5' },
          { measure: '20kg', price: '5' }
        ],
        name: '深圳国际物流公司',
        scope: '全深圳市及周边全深圳市及周边'
      },
      {
        from_a: '深圳',
        to_a: '哈尔滨',
        time: '5-7天',
        priceItem: [
          { measure: '20kg', price: '5' },
          { measure: '20kg', price: '5' },
          { measure: '20kg', price: '5' }
        ],
        name: '深圳国际物流公司',
        scope: '全深圳市及周边全深圳市及周边'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 排序样式切换
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  bindChange: function (e) {
    this.setData({
      index: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})