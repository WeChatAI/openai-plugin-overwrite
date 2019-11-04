//index.js
//获取应用实例
const app = getApp()
var plugin = requirePlugin("myPlugin"); 
Page({
  data: {
   guideList:[
     '北京天气',
     '图片回复',
     '你在干嘛'
   ]
  },
  onLoad: function () {
    wx.getSystemInfo({
      success: res => {
        let isIOS = res.system.indexOf("iOS") > -1;
        let navHeight = 0;
        if (!isIOS) {
          navHeight = 48;
        } else {
          navHeight = 44;
        }
        this.setData({
          status: res.statusBarHeight,
          navHeight: navHeight,
          statusBarHeight: res.statusBarHeight + navHeight
        });
      }
    });
  },
  goOriginalPlugin:function(e) {
    wx.navigateTo({
      url: '../originalPluginPage/originalPluginPage'
    })
    plugin.setGuideList(this.data.guideList)
  },
  goRewriteComponent:function(e) {
    wx.navigateTo({
      url: '../rewritePluginPage/rewritePluginPage'
    })
    plugin.setGuideList(this.data.guideList)
  }
})
