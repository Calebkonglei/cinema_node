var scraper = require('scraperjs');
var cinemaList = require('../scraper/cinemaData');
exports.list=function(req, res){
  cinemaList.find().exec((err, cinemas) =>{
    res.render({
      'cinema',{
        cinemaName: cinemaList
      }
    })
  })
} 

