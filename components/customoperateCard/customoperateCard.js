var plugin = requirePlugin("myPlugin");
Component({
  properties: {
    focus: Boolean, // 自动获取焦点
    inputText: String, //  文本内容
    inputing: Boolean, // 切换显示
    height: Number
  },

  data: {
    inputing: false, //值为true时表示正在输入
    inputText: ''
  },
  lifetimes: {
    ready: function() {
      if (this.properties.focus) {
        this.setData({
          focus: this.properties.focus,
          inputing: true
        })
      }
    },
    attached:function () {
    }
  },
  methods: {
    bindInput: function(e) {
      this.setData({
        inputText: e.detail.value
      });
    },
    // 输入选择
    chooseType: function(e) {
      if (e.currentTarget.dataset.type == "voice") {
        this.setData({
          inputing: false
        });
      } else {
        this.setData({
          inputing: true
        });
      }
    },
    bindconfirmInput: function(e) {
      var that = this;
      let text = e.detail.value;
      const chat = plugin.getChatComponent(); // 通过getChatComponent方法获取到插件中的方法
      chat.send(text) // 发送query
      that.setData({
        inputText: ''
      })
    },
    // 返回首页
    showGuideView: function() {
      const chat = plugin.getChatComponent(); // 通过getChatComponent方法获取到插件中的方法
      chat.backHome() // 返回
    },
    // 启动语音
    inputVoiceStart: function() {
      const chat = plugin.getChatComponent(); // 通过getChatComponent方法获取到插件中的方法
      chat.inputVoiceStart() // 语音开始
    },
    // 停止语音
    inputVoiceEnd: function() {
      const chat = plugin.getChatComponent(); // 通过getChatComponent方法获取到插件中的方法
      chat.inputVoiceEnd() // 语音结束
    },
  }
});
