import api from '../../api/api.js';
Page({
  data: {
    detail: {}
  },
  onLoad: function (options) {
    let id = options.id;
    let detail = api.getMovieDetailById({
      query: {
        id: id
      }
    });
    wx.setNavigationBarTitle({
      title: detail.title
    });
    this.setData({
      detail
    });
  }
})