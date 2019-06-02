Page({
  data:{

  },
  onLoad:function(){

  },
  login:function(){
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: '',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  youhuiq: function () {
    wx.showToast({
      title: '签到领取优惠券',
      icon:'none',
      duration: 2000
    })
  },
  saoyisao:function(){
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })

    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
      }
    })
  },
  qiandao:function(){
    wx.showToast({
      title: '签到成功 +1',
      icon: 'success',
      duration: 2000
    })
  }
})