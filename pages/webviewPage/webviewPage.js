//Page Object
Page({
  data: {
    url: ''
  },
  //options(Object)
  onLoad: function(options){
    console.log(options)
    this.setData({
      url: options.url
    })
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(res){
    let url = this.data.url
    if (res.from === "menu") {
        
    }
    return {
      title: '文档',
      path:
        "/pages/blast-webView/blast-webView?url=" + url,
      imageUrl:
        ""
    };
  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});