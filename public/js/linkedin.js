function onLinkedInLoad(url){
 console.log("hello",url)
 //shareContent()
   // IN.User.authorize(shareContent);
      //IN.Event.on(IN,"auth", shareContent);
       //IN.User.authorize(function(){
        shareContent(url);
    // });
  }

//Handle the successful return from the API call
function onSuccess(data) {
console.log(data);
}

//Handle an error response from the API call
function onError(error) {
console.log(error);
}

function shareContent(url){
  
  console.log("hello112",url)
  var payload = { 
    "comment": "Check out developer.linkedin.com! http://linkd.in/1FC2PyG", 
    "visibility": { 
      "code": "anyone"
    } ,
    "content": {
      "title": url.title,
      "description": "Leverage LinkedIn to maximi engament",
      "submitted-url": url.url,  
      "submitted-image-url":url.image
    },
  };
IN.API.Raw("/people/~/shares?format=json")
  .method("POST")
  .body(JSON.stringify(payload))
  .result(onSuccess)
  .error(onError);
}

function abc(){
  console.log("hello_new");
}
function liAuth(url){
  IN.User.authorize(function(){
     //return;
       onLinkedInLoad(url);
      });
    //IN.Event.on(IN, "auth", shareContent);
  
}   
  
