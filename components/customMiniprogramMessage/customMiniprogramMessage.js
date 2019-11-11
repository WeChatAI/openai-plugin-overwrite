Component({
  properties: {
    msg: Object
  },

  data: {},
  lifetimes: {
    ready: function() {}
  },
  methods: {
    reserve:function() {
      // 唤起其他小程序
      wx.navigateToMiniProgram({
        appId: this.properties.msg.data.appid,
        path: this.properties.msg.data.pagepath,
        extraData: {
        },
        envVersion: '',
        success(res) {
          // 打开成功
        }
      })
      // 当前小程序页面跳转
      // wx.navigateTo({
      //   url: this.properties.msg.data.pagepath
      // })
    }
  }
});
