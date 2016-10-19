var scraper = require('scraperjs');
var Cinema = require('../models/cinema');

exports.cinemaList = function() {
    getCinema((cinemas) =>{
        cinemas.forEach((cinema) =>{
            Cinema.findOneAndUpdate({
                name:cinema.cinema_name
            }, {
                $set: {
                    name: cinema.cinema_name,
                    address: cinema.cinema_address,
                    appraise: cinema.cinema_appraise
                }
            }, {
                new: true,
                upsert: true
            }, (err, cinema) =>{
                console.log(cinema);
            })
        })
    })
}

function getCinema(cb){
  scraper.StaticScraper.create('https://dianying.taobao.com/ajaxCinemaList.htm?page=1&cinemaName=&pageSize=100')
    .scrape(function($) {
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
        cb(cinemas);
    })
};