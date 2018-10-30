var express = require('express');
var router    = express.Router();
var upload    = require('./upload');
var mongoose  = require('mongoose');
var Photo     = mongoose.model('Photos');
 const shareFacebook = require('share-facebook')
// if (typeof(window) !== 'undefined') {
//   // code here
//  const { fbShare } = require('simple-social-share');
// }
// const fbAppId = '443153576210730'
/* GET home page. */
var url1="";

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

router.get('/socialshare/:id',function(req,res)
{
 // Let's check user-agents to see if this is a social bot. If so, let's serve a different layout to populate the og data so it looks pretty when sharing.
     console.log("ssassa",req);
      Photo.findOne({_id: req.params.id }, function(err, results) {
          if(err) {

               return err;
          } else if (results !== null) {
            
              console.log("hello",results)
              var newData = {};
                
                  newData.title1=results.caption,
                  
                  newData.image='https://socialshare-js23.herokuapp.com/' + results.path
                   newData.url= 'https://socialshare-js23.herokuapp.com'
                    res.render('index.pug', newData);
                }})})
               
module.exports = router;





//  const itemData = {
//    title: 'Item title',
//    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab nemo temporibus ex rerum at consequatur, eligendi, rem non quia odio! Quibusdam enim vero qui consequatur dicta doloremque aliquam. Quas.',
//    image: 'https://thumb1.shutterstock.com/display_pic_with_logo/154447/235089946/stock-photo-cute-little-red-kitten-sleeps-on-fur-white-blanket-235089946.jpg'
//  };
//  ; // facebook developer ID, better to implement with .env if possible.
 
