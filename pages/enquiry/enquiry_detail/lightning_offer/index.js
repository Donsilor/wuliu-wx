// pages/enquiry/enquiry_detail/lightning_offer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['国际空运', '国际快递', '国际海运', '国际小包', '中欧班列'],
    index: -1,
    // 是否对其他人隐藏
    isChoose: false 
  },
  // 选择运输渠道
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  // 选择是否对其他人隐藏
  isShow: function () {
    this.data.isChoose = this.data.isChoose == false ? true : false;
    this.setData({
      isChoose: this.data.isChoose
    })
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