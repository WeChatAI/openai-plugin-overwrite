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
    
  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});