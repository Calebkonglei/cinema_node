var scraper = require('scraperjs');
exports.cinemaList=function(res){
  scraper.StaticScraper.create('https://dianying.taobao.com/ajaxCinemaList.htm?page=1&cinemaName=&pageSize=100')
    .scrape(function($) {
        var cinemaMsg = [];
        return $("li").map(function() {
            return {
                cinema_name:$(this).find('.detail-middle .middle-hd h4 a').text().trim(),
                cinema_address:$(this).find('.middle-p .limit-address').text().trim(),
                cinema_appraise:$(this).find('.right-score strong').text()
            };
        }).get();
    })
    .then( (cinemas) => {
        var cinemas = cinemas.filter((item) =>{
                        return parseFloat(item.cinema_appraise) >= 8.0;
                    })
        console.log(cinemas);
        res.render('cinema',{cinemas:cinemas})
    })
};