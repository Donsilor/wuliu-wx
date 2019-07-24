// pages/my/my_order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    my_order: [
      {
        date: '2019/4/25',
        time: '16:50:46',
        status: '待审核',
        from_a: '深圳',
        to_a: '东京',
        type: '国际空运',
        provider: '深圳king国际空运物流公司'
      },
      {
        date: '2019/4/25',
        time: '16:50:46',
        status: '已通过',
        from_a: '深圳',
        to_a: '东京',
        type: '国际空运',
        provider: '深圳king国际空运物流公司',
        weight: '5',
        total: '158.00'
      },
      {
        date: '2019/4/25',
        time: '16:50:46',
        status: '未通过',
        from_a: '深圳',
        to_a: '东京',
        type: '国际空运',
        provider: '深圳king国际空运物流公司',
        weight: '5',
        total: '158.00'
      }
    ]
  },
  chooseTab: function (e) {
    this.setData({
      index: e.currentTarget.dataset.index
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