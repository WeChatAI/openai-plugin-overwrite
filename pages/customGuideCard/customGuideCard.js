var plugin = requirePlugin("myPlugin"); 
Component({
  properties: {
    controlSwiper: Boolean,
    guideList: Array,
    height: Number
  },
  data: {
    guideIndex: -1
  },

  attached: function () {
  },
  lifetimes: {
    ready: function () {
    }
  },
  methods: {
    //选择guideList事件
    chooseGuide: function (e) {
      const chat = plugin.getChatComponent(); // 通过getChatComponent方法获取到插件中的方法
      if (this.properties.controlSwiper) {
        this.setData(
          {
            guideIndex: e.currentTarget.dataset.id
          },
          () => {
            var that = this;
            that.setData({
              guideIndex: -1
            });
          }
        );
        chat.send(e.currentTarget.dataset.content) // 发送query
      }
    }
  }
});
