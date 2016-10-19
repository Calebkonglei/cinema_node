var scraper = require('scraperjs');
exports.cinemaList=function(res){
  scraper.StaticScraper.create('https://dianying.taobao.com/ajaxCinemaList.htm?page=1&cinemaName=&pageSize=100')
    .scrape(function($) {
        return $("li").map(function() {
            return $(this).find('.middle-hd h4 a').text();
        }).get();
    })
    .then(function(cinemas) {
        console.log('cinemas');
        res.render('cinema',{cinemas:cinemas})
    })
};