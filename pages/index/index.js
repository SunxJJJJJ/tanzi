//index.js
//获取应用实例
const app = getApp()

Page({
  
	data: {
    pageNum: 1,       // 设置加载的第几次，默认是第一次
    isFirstLoad: true,   // 用于判断List数组是不是空数组，默认true，空的数组
    hasMore: false,    // “加载更多”

    myimg: [{
      url: "https://p3-q.mafengwo.net/s11/M00/4A/E0/wKgBEFrQBqeAYyjMAAURcw8MxG470.jpeg"
			},
			{
        url: "https://dimg04.c-ctrip.com/images/700n14000000x2z1lA61B_710_275_738.jpg"
			},
			{
        url: "https://dimg04.c-ctrip.com/images/700u14000000x3vwo65AF_710_275_738.jpg"
			},
			{
        url: "https://n2-q.mafengwo.net/s11/M00/3D/3F/wKgBEFtrlBWAUHczAAR1Jh3BMT410.jpeg"
			},
			{
        url: "https://b2-q.mafengwo.net/s12/M00/B8/7F/wKgED1zuVPmAXsjOAAZ-chJwn4Y703.jpg?imageMogr2%2Finterlace%2F1"
			}
		],
    datalist:[
		 {
        url: "https://dimg03.c-ctrip.com/images/100f0m000000dgc5x6318_C_125_70.jpg ",
				goods_title:"北京5日4晚跟团游(4钻)高品酒店5A级景点全含",
				goods_price:"1392/人",
				goods_num:"1523"
		},
      {
        url:"https://dimg03.c-ctrip.com/images/fd/tg/g2/M08/89/F0/CghzgVWw0DCAcVKyAAqnTq6ulOY191_C_125_70.jpg",
		goods_title:"巴厘岛三天四夜，海上狂欢派对，蜜月首选之地",
		goods_price:"48000/人",
		goods_num:"45"
	  },
	  {
      url:"https://dimg04.c-ctrip.com/images/300o0q000000ga9nzC4A3_C_125_70.jpg",
	  		goods_title:"美国东海岸+华盛顿+纽约+费城+波士顿11日跟团游(3钻)",
	  		goods_price:"15880/人",
	  		goods_num:"156"
	  },
	  {
      url:"https://dimg04.c-ctrip.com/images/300e0x000000l8pcp2416_C_125_70.jpg",
	  		goods_title:"普吉岛6日5晚半自助游(4钻)",
	  		goods_price:"2750/人",
	  		goods_num:"45"
	  },
	  {
      url:"https://dimg03.c-ctrip.com/images/10040m000000dicv13983_C_125_70.jpg",
	  		goods_title:"香港4日自由行·机酒随心选【暑价抢先Go！3万人出游的明智选择】",
	  		goods_price:"48000/人",
	  		goods_num:"750"
	  },
	  {
      url:"https://dimg04.c-ctrip.com/images/300s0a0000004r9ts3A04_C_125_70.jpg",
	  		goods_title:"阿联酋迪拜+阿布扎比+双岛5日4晚跟团游(5钻)",
	  		goods_price:"10866/人",
	  		goods_num:"47"
	  },
	  {
      url:" https://dimg03.c-ctrip.com/images/fd/tg/g4/M0A/7E/B8/CggYHVXNXuaAEjp2AAZ-meA0P9s484_C_125_70.jpg",
	  		goods_title:"俄罗斯莫斯科+圣彼得堡9日跟团游(5钻)",
	  		goods_price:"11999/人",
	  		goods_num:"201"
	  },
	  {
      url:"https://dimg04.c-ctrip.com/images/300q12000000rstgbD002_C_125_70.jpg",
	  		goods_title:"日本大阪+京都+箱根+东京6日5晚跟团游",
	  		goods_price:"5460/人",
	  		goods_num:"895"
	  },
	  {
      url:"https://dimg04.c-ctrip.com/images/300j0q000000g94ft62C9_C_125_70.jpg",
	  		goods_title:"英国伦敦9日跟团游",
	  		goods_price:"12200/人",
	  		goods_num:"369"
	  }
    ]
		
	},


  // 下拉刷新
  onPullDownRefresh: function () {
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: 'https://xxx/?page=0',
      method: "GET",
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        that.setData({
          moment: res.data.data
        });
        console.log(that.data.moment);
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
      },
      fail:function(){
        wx.showLoading({
          title: '网络请求超时',
        })

        setTimeout(function () {
          wx.hideLoading()
        }, 2000)
        
      }
    })
  },

 


  onReachBottom:function() {  //上拉触底函数
    

  wx.showLoading({
    title: '服务器无反应',
  })

setTimeout(function() {
    wx.hideLoading()
  }, 2000)
    
  },








  
})





