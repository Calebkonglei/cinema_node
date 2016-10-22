var Movie = require('../models/movie');

exports.movieList = function(req,res){
  Movie.find((err, movies) =>{
    console.log(movies)
    res.render('index',{movies:movies})
  })
}