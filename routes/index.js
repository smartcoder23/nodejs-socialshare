var express = require('express');
var router    = express.Router();
var upload    = require('./upload');
var mongoose  = require('mongoose');
var Photo     = mongoose.model('Photos');

/* GET home page. */
router.get('/', function(req, res, next) {

  Photo.find({}, ['path','caption'], {sort:{ _id: -1} }, function(err, photos) {
    res.render('index', { title: 'NodeJS file upload tutorial', msg:req.query.msg, photolist : photos });
    
  });

});

/** Upload file to path and add record to database */

router.post('/upload', function(req, res) {

  upload(req, res,(error) => {
      if(error){
         res.redirect('/?msg=3');
      }else{
        if(req.file == undefined){
          
          res.redirect('/?msg=2');

        }else{
             
            /**
             * Create new record in mongoDB
             */
            var fullPath = "files/"+req.file.filename;

            var document = {
              path:     fullPath, 
              caption:   req.body.caption
            };
  
          var photo = new Photo(document); 
          photo.save(function(error,result){
            if(error){ 
              throw error;
            } 
            if(result!=null){
              console.log("+++++++++++++++++",result)
              var id={}
              id=result._id;
              console.log("id agaye",id)
            res.render('index.pug',{id:id});
         }});
      }
    }
  });    
});

router.post('/socialshare/:id',function(req,res)
{
 // Let's check user-agents to see if this is a social bot. If so, let's serve a different layout to populate the og data so it looks pretty when sharing.
     console.log("ssassa",req);
      Photo.findOne({_id: req.params.id }, function(err, results) {
          if(err) {

               return err;
          } else if (results !== null) {
            
              console.log("hello",results)
              var newData = {};
                
                  newData.socialTitle=results.caption,
                  
                  newData.socialImage='/files/1540558018432-photo.png'
                  newData.socialUrl= 'https://socialshare-js23.herokuapp.com' + socialImage
                }})})
module.exports = router;
