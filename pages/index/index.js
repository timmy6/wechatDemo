//index.js
//获取应用实例
const app = getApp()
const loger = require("../../utils/loger.js")

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name: 'timmy',
    userId: 123,
    show: false,
    array: [{
      message: 'hello'
    }, {
      message: 'wrold'
    }, {
      message: '!'
    }],
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    itemb: {
      index: 1,
      msg: 'this is a templateb',
      time: '2016-09-16'
    },
    newsdata: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  toast: function (e) {
    wx.showToast({
      title: '哈哈哈',
      icon: 'loading',

    })
  },

  onShow: function () {
    loger.printLog("这是打印一个日志")
  },

  tabMessage: function (event) {
    console.log(event)
    console.log("data-" + event.target.dataset.userid)
    console.log(event.target.dataset.userName)
  },
  loadData: function () {
    var that = this;
    wx.request({
      url: 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10', //仅为实例，并非真实的接口地址
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          newsdata: res.data
        })
      }
    })
  }
})