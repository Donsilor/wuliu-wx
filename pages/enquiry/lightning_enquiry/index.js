// pages/enquiry/lightning_enquiry/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 运输渠道
    array: [
      {
        channel: '国际空运',
        checked: false,
      },
      {
        channel: '国内专线',
        checked: false,
      },
      {
        channel: '国际快递20kg+',
        checked: false,
      },
      {
        channel: '国际快递20kg-',
        checked: false,
      },
      {
        channel: '整柜海运',
        checked: false,
      },
      {
        channel: '拼柜海运',
        checked: false,
      },
      {
        channel: '包税海运',
        checked: false,
      },
      {
        channel: '中欧班列',
        checked: false,
      },
      {
        channel: '国际小包',
        checked: false,
      }
    ],
    // 产品类型
    type: ['衣物', '电器', '日杂', '食品', '中欧班列'],
    // 发货时间
    data: '',
    // 收件类别
    typeTwo: ['衣物', '电器', '日杂', '食品', '中欧班列'],
    array_i: -1,
    type_i: -1,
    typeTwo_i: -1,
    isChoose_a: false,
    isChoose_b: false,
  },
  // 选择运输渠道
  chooseChannel: function(e){
    var i = e.currentTarget.dataset.index,
      checked = `array[${i}].checked`;
    this.setData({
      [checked]: !this.data.array[i].checked
    })
  },
  // 选择产品类型
  bindPickerType: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      type_i: e.detail.value
    })
  }, 
  // 选择发货时间
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 选择收件类别
  bindPickerTypeTwo: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      typeTwo_i: e.detail.value
    })
  },
  // 运输方式
  isShow: function (e) {
    if(e.currentTarget.dataset.type == 'type_one'){
      this.data.isChoose_a = this.data.isChoose_a == false ? true : false;
      this.setData({
        isChoose_a: this.data.isChoose_a
      })
    }else{
      this.data.isChoose_b = this.data.isChoose_b == false ? true : false;
      this.setData({
        isChoose_b: this.data.isChoose_b
      })
    }
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