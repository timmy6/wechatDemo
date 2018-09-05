//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    logs: []
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow: function() {
    console.log("onShow" + app.globalData.userInfo)
  },

  onReady: function() {
    console.log("onReady")
  },

  onHide: function() {
    console.log("onHide")
  },

  onUnload: function() {
    console.log("onUnload")
  },

  onPullDownRefresh: function() {
    console.log("onPullDownRefresh")
  },

  onReachBottom: function() {
    console.log("onReachBottom")
  },

  onShareAppMessage: function() {
    console.log("onShareAppMessage")
  },

  onPageScroll: function() {
    console.log("onPageScroll")
  },

  onTabItemTap: function(item) {
    console.log("index:" + item.index)
  }
})