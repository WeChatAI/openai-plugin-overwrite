//logs.js
var plugin = requirePlugin("myPlugin");
const backgroundAudioManager = wx.getBackgroundAudioManager()
Page({
  data: {
  },
  onLoad: function (options) {
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
    if (options.Identification === 'originalPlugin') {
      this.setData({
        flag: false
      })
      plugin.init({
        appid: "VEgbxLa9kYqzGOzstdeSF3xDbkS9zK",
        navHeight: this.data.statusBarHeight,
        success: () => {
        },
        fail: error => {}
      });
    } 
    if (options.Identification === 'rewriteComponent') {
      this.setData({
        flag: true
      })
      plugin.init({
        appid: "VEgbxLa9kYqzGOzstdeSF3xDbkS9zK",
        // textToSpeech: true,
        // guideList: [],
        // welcome: '请问需要什么帮助',
        // background: "#eee",
        guideCardHeight: 50,
        operateCardHeight: 120,
        // history: true,
        // historySize: 60,
        navHeight: this.data.statusBarHeight,
        success: () => {
        },
        fail: error => {}
      });
    }
  },
  getQueryCallback: function (e) {
   
  },
  goBackHome: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  back:function() {
    this.goBackHome()
  }
})
