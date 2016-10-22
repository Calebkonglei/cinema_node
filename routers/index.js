var cinema = require('../controller/cinema').list;
// var movie = require('../controller/movie').movieList;
var movie = require('../scraper/movieData').getMovieFromTaobao;
module.exports = function (app){
  app.get('/', (req,res)=>{
    movie(req,res);
  });
  app.get('/detail/:id', (req, res) =>{
    res.render('detail', {title:'细节'})
  })
  app.get('/cinema', (req, res) =>{
    cinema(req, res)
  })
}
