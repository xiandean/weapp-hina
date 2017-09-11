import moviesData from 'data.js';

const moviesData_pc = [];
const moviesData_h5 = [];
const moviesData_picture = [];
for(var i = 0; i < moviesData.length; i++) {
  var data = moviesData[i];
  if(data.type == 1) {
    moviesData_pc.push(data);
  }else if(data.type == 2) {
    moviesData_h5.push(data);
  }else if(data.type == 3) {
    moviesData_picture.push(data);
  }
}

// Movie
const getMovieListById = (params) => {
  wx.showToast({
    title: '加载中',
    icon: 'loading'
  });
  var id = params.query.id;
  var type = params.query.type;
  if(type == 1) {
    var movies = moviesData_pc;
  }else if(type == 2) {
    var movies = moviesData_h5;
  }else if(type == 3) {
    var movies = moviesData_picture;
  }else {
    var movies = moviesData
  }
  var len = id + 10;
  len = len > movies.length ? movies.length : len;
  var result = [];
  for(var i = id; i < len; i++) {
    result.push(movies[i]);
  }
  wx.hideToast();
  return result;
}
const getMovieDetailById = (params) => {
  wx.showToast({
    title: '加载中',
    icon: 'loading'
  });
  var id = params.query.id;
  for(var i = 0; i < moviesData.length; i++) {
    var movie = moviesData[i];
    if(movie.id == id) {
      wx.hideToast();
      return movie;
    }
  }
  wx.hideToast();
  return null;
}


module.exports = {
  getMovieListById,
  getMovieDetailById
}
