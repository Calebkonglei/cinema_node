var cinema = require('../controller/cinema').list;
module.exports = function (app){
  app.get('/', (req, res, next) =>{
    res.render('index',{
      data:['首页','影院分布']
    })
  });
  app.get('/cinema', (req, res) =>{
    cinema(req, res)
  })
}
