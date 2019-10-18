
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
      let content = JSON.parse(msg.res.answer)
      let answer = content.news.articles[0].title
      this.setData({
        answer: answer
      })
    }
  },
  methods: {
    
  }
});
