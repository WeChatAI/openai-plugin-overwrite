
Component({
  properties: {
    msg: Object
  },
  data: {
    answer: ''
  },

  lifetimes: {
    ready: function() {
      let msg = this.properties.msg
      this.setData({
        answer: this.properties.msg.answer
      })
    }
  },
  methods: {
    
  }
});
