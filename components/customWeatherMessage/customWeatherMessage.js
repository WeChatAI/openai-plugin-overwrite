var plugin = requirePlugin("myPlugin"); 
Component({
  properties: {
    msg: Object
  },

  data: {
    queryBMIList: [
      {
        url:
          "https://res.wx.qq.com/mmspraiweb_node/dist/static/pluginimage/iconOne.png",
        description: "北京今天空气质量"
      },
      {
        url:
          "https://res.wx.qq.com/mmspraiweb_node/dist/static/pluginimage/HealthyIcon.png",
        description: "北京今日防晒指数"
      },
      {
        url:
          "https://res.wx.qq.com/mmspraiweb_node/dist/static/pluginimage/iconTwo.png",
        description: "北京明天的天气"
      }
    ]
  },
  lifetimes: {
    ready: function() {
    }
  },
  methods: {
    send: function(e) {
      const chat = plugin.getChatComponent(); // 通过getChatComponent方法获取到插件中的方法
      chat.send(e.currentTarget.dataset.item.description) // 发送query
    }
  }
});
