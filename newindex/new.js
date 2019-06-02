
// 引入SDK核心类
var QQMapWX = require('../qqmap-wx-jssdk.js');

// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'UG2BZ-NXG6X-D7W42-TL5KT-MIURE-TKFRU' // 必填
})
 


Page({

  /**
   * 页面的初始数据
   */
  data: {
     longitude: 116.4965075,
     latitude: 40.006103,
    nearby_search:'null'
    
  },











     //在Page({})中使用下列代码
     //数据回填方法
     backfill: function (e) {
       var id = e.currentTarget.id;
       for (var i = 0; i < this.data.suggestion.length; i++) {
         if (i == id) {
           this.setData({
             backfill: this.data.suggestion[i].title
           });
         }
       }
     },

     //触发关键词输入提示事件
     getsuggest: function (e) {
       
       var _this = this;
       //调用关键词提示接口
       qqmapsdk.getSuggestion({
         
         //获取输入框值并设置keyword参数
         keyword: e.detail.value, //用户输入的关键词，可设置固定值,如keyword:'KFC'
         //region:'北京', //设置城市名，限制关键词所示的地域范围，非必填参数
         region:'揭阳',
          
         success: function (res) {//搜索成功后的回调
           console.log(res);
           var sug = [];
           for (var i = 0; i < res.data.length; i++) {
             sug.push({ // 获取返回结果，放到sug数组中
               title: res.data[i].title,
               id: res.data[i].id,
               addr: res.data[i].address,
               city: res.data[i].city,
               district: res.data[i].district,
               latitude: res.data[i].location.lat,
               longitude: res.data[i].location.lng
             });
           }
           _this.setData({ //设置suggestion属性，将关键词搜索结果以列表形式展示
             suggestion: sug
           });
         },
         fail: function (error) {
           console.error(error);
         },
         complete: function (res) {
           console.log(res);
         }
       });
     },




















  // 事件触发，调用接口
  nearby_search: function (e) {
    var _this = this;

   var a = this.data.nearby_search = e.detail.value;
    // 调用接口
    qqmapsdk.search({
      
      keyword:'a', //搜索关键词
      location: '23.28786,116.140738',  //设置周边搜索中心点
      success: function (res) { //搜索成功后的回调
        var mks = []
        for (var i = 0; i < res.data.length; i++) {
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: "/images/dingwei.png", //图标路径
            width: 20,
            height: 20
          })
        }
        _this.setData({ //设置markers属性，将搜索结果显示在地图中
          markers: mks
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      
        try {
          wx.clearStorageSync()
        } catch (mks) {
          // Do something when catch error
        }
        
      }
    })

    
  }


})









