// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabTitle:['开放授权','Web 授权','小程序授权'],
    vid: 'eaa34863367c5434c7fc1f295c140e21_e',
    secretkey: 'U8Se01StXk',
    wxAppUrl: 'https://demo.ipolyv.cn/tanglianghong/test/php/wxa.php'
  },
  vidInputChanged(e){
    this.setData({
      'vid': e.detail.value
    })
  },
  secretkeyInputChanged(e){
    this.setData({
      'secretkey': e.detail.value
    })
  },
  wxAppUrlInputChanged(e){
    // console.log(e.detail);
    this.setData({
      'wxAppUrl': e.detail.value
    })
  },
  tapEnterOpen(){
    let { vid } = this.data;
    if(!vid) {
      wx.showToast({
        title: '请填写 vid',
        icon: 'none'
      })
      return;
    };
    wx.navigateTo({
      url: `/pages/open-encrypt/open-encrypt?vid=${vid}`
    })
  },
  tapEnterWeb(){
    let { vid, secretkey } = this.data;
    if(!vid || !secretkey) {
      wx.showToast({
        title: '请填写 vid 和 secretkey',
        icon: 'none'
      })
      return;
    };
    wx.navigateTo({
      url: `/pages/web-encrypt/web-encrypt?vid=${vid}&secretkey=${secretkey}`
    })
  },
  tapEnterWxapp(){
    let { vid, wxAppUrl } = this.data;
    if(!vid || !wxAppUrl) {
      wx.showToast({
        title: '请填写 vid 和 wxAppUrl',
        icon: 'none'
      })
      return;
    };
    wx.navigateTo({
      url: `/pages/wxapp-encrypt/wxapp-encrypt?vid=${vid}&wxAppUrl=${wxAppUrl}`
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