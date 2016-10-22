var Movie = require('../models/movie');
var scraper = require('scraperjs');

// exports.movieList = function(){
//   getMovieFromTaobao((movies)=>{
//     movies.forEach((movie) =>{
//       Movie.findOneAndUpdate({
//         name:movie.movie_name
//       },{
//         $set: {
//                 name: movie.movie_name,
//                 image: movie.movie_image,
//                 praise: movie.movie_praise,
//                 // taobaoId:movie.taobaoId
//               }
//       },{
//           new: true,
//           upsert: true
//         }, (err, movie) =>{
//             console.log(movie);
//         })
//     })
//   })
// }

exports.getMovieFromTaobao = function(req, res){
  scraper.StaticScraper.create('http://dianying.taobao.com/showList.htm?spm=a1z21.6646273.header.4.wy32SF&n_s=new')
    .scrape(function($) {
        return $(".tab-movie-list").find('.movie-card-wrap').map(function() {
            // var href = $(this).find('.movie-card-post img').attr('href');
            // var taobaoId = href.substring(href.indexOf('showId=') + 7, href.indexOf('&n_s'));
            return {
                movie_name:$(this).find('.movie-card-name .bt-l').text().trim(),
                movie_image:$(this).find('.movie-card-poster img').attr('src'),
                movie_praise:$(this).find('.movie-card-name .bt-r').text(),
                
            };
        }).get();
    })
    .then( (movies) => {
        var movies = movies.filter((item) =>{
                        return parseFloat(item.movie_praise) >= 7.0;
                    })
        console.log(movies)
        res.render('index', {movies:movies})
    })
};

