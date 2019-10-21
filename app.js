//app.js
var plugin = requirePlugin("myPlugin");
App({
  onLaunch: function() {
    // let height = 0
    // wx.getSystemInfo({
    //   success: res => {
    //     let isIOS = res.system.indexOf("iOS") > -1;
    //     let navHeight = 0;
    //     if (!isIOS) {
    //       navHeight = 48;
    //     } else {
    //       navHeight = 44;
    //     }
    //     height = navHeight + res.statusBarHeight
    //   }
    // });
    // plugin.init({
    //   appid: "VEgbxLa9kYqzGOzstdeSF3xDbkS9zK",
    //   // textToSpeech: true,
    //   // guideList: [],
    //   // welcome: '请问需要什么帮助',
    //   // background: "#eee",
    //   guideCardHeight: 50,
    //   operateCardHeight: 120,
    //   // history: true,
    //   // historySize: 60,
    //   navHeight: height,
    //   success: () => {
    //   },
    //   fail: error => {}
    // });
  },
  onShow: function() {},
  onHide: function() {}
});
