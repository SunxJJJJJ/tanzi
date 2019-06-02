
// tabBar  指底部的 导航配置属性     color  未选择时 底部导航文字的颜色    selectedColor  选择时 底部导航文字的颜色
// borderStyle  底部导航边框的样色（注意 这里如果没有写入样式 会导致 导航框上边框会出现默认的浅灰色线条）    list   导航配置数组
// selectedIconPath 选中时 图标路径  iconPath 未选择时 图标路径    pagePath 页面访问地址     text  导航图标下方文字
// 每个页面的json文件都不能去掉navigationBarTitleText这个属性。否则会报错


//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
      }
    })

    

  },
  globalData: {
    userInfo: null
  }
})

