var Cinema = require('../models/cinema');
exports.list=function(req, res){
  Cinema.find((err, cinemas) =>{
    // console.log(cinemas)
    res.render('cinema',{cinemas:cinemas})  
  })
} 

