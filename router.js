var cinemaList = require('./scraper/cinemaData').cinemaList;

module.exports = function (app){
  app.get('/', (req, res, next) =>{
   cinemaList(res)
  });
}
