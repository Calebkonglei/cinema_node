// var cinema = require('./controller/cinema');
var cinemaList = require('./scraper/cinemaData');
// var scraper = require('scraperjs');
module.exports = function (app){
  app.get('/', (req, res, next) =>{
   cinemaList(req, res)
  });
}

// function getCinema(){
//    scraper.StaticScraper.create('https://dianying.taobao.com/ajaxCinemaList.htm?page=1&cinemaName=&pageSize=100')
//     .scrape(function($) {
//         return $("li").map(function() {
//             return $(this).find('.middle-hd h4 a').text();
//         }).get();
//     })
//     .then(function(cinemas) {
//         console.log('cinemas');
//         // res.send(cinemas)
//         return cinemas;
//     })
// }