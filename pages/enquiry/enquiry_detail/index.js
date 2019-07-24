// pages/enquiry/enquiry_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowPopup:false,
    enquiry: [
      {
        user: '张三',
        release_time: '2019-05-28 12:03:45',
        page_view: '199',
        from_a: '深圳',
        to_a: '东京',
        demand: '国际物流',
        name: '衣物',
        measure: '10kg',
        type: '服饰',
        volume: '30*40*50',
        shipment_time: '2019-05-28',
        remark: '备注：期望送货上门我是备注，期望送货上门我是备注，期望送货上门我是备注，期望送货上门我是备注，期望送货上门。希望获得诚意报价！',
        time: '2019-05-28 12:03:45',
        acquire: '3'
      }
    ],
    offer_list:[
      {               
        logo_url:'https://szdbi.oss-cn-shenzhen.aliyuncs.com/guojiwuliu/company_logo.png',
        company: '深圳国际物流公司',
        time: '2019-05-28 12:00:08',
        isShow: 'false',
        type: '国际空运',
        price: '￥90-￥120',
        detail: '我是报价详情描述文本我是报价详情描述文本我是报价详情描述文本我是报价详情描述文本'
      },
      {
        logo_url: 'https://szdbi.oss-cn-shenzhen.aliyuncs.com/guojiwuliu/company_logo.png',
        company: '深圳国际物流公司',
        time: '2019-05-28 12:00:08',
        isShow: 'true',
        type: '国际空运',
        price: '￥90-￥120',
        detail: '我是报价详情描述文本我是报价详情描述文本我是报价详情描述文本我是报价详情描述文本'
      },
      {
        logo_url: 'https://szdbi.oss-cn-shenzhen.aliyuncs.com/guojiwuliu/company_logo.png',
        company: '深圳国际物流公司',
        time: '2019-05-28 12:00:08',
        isShow: 'true',
        type: '国际空运',
        price: '￥90-￥120',
        detail: '我是报价详情描述文本我是报价详情描述文本我是报价详情描述文本我是报价详情描述文本'
      },
      {
        logo_url: 'https://szdbi.oss-cn-shenzhen.aliyuncs.com/guojiwuliu/company_logo.png',
        company: '深圳国际物流公司',
        time: '2019-05-28 12:00:08',
        isShow: 'true',
        type: '国际空运',
        price: '￥90-￥120',
        detail: '我是报价详情描述文本我是报价详情描述文本我是报价详情描述文本我是报价详情描述文本'
      }
    ]
  },
  contactMerchant: function(){
    this.setData({
      isShowPopup:true
    })
  },
  quitContact: function(){
    this.setData({
      isShowPopup: false
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