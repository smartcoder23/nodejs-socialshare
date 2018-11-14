// IN.Event.on(IN, "liauth", shareContent);
// function onLinkedInLoad(){
//   console.log("hello")
//   // shareContent()
//      IN.Event.on(IN,"AQWPcp4HREdNtgG89lEJSo9i_Y0N2KK9p_HHClnziHD7STNRTCTtxwBg1zzz1jlKhrWP4hwPekV-NtwDiK76CPFA7En_fjcKHfpAm3qm59YXGRhD3bBIFiPyOAFbDfsDslcCi9eNQbTmX86698GpO_VyFBWhjYNp0zyqEd4m01TrXjRrijXbNrSx7eaZup0CCOze4Gr268LXG3sBmA3Hc6OLHrbqRZpS3-5YY58-6bMZq-LNCJKse_EmBPbuIRbWPMBCor9DorRviOF2jqugU139vijsapqS7aidHU7ukrwCX5jf1ke6BNYquBnn2FX5iout-Q7pC_5OqekyDR9g7xWZ5Sk2CA", shareContent);
    
//  }

// Handle the successful return from the API call
function onSuccess(data) {
console.log(data);
}

// Handle an error response from the API call
function onError(error) {
console.log(error);
}

// Use the API call wrapper to share content on LinkedIn
function shareContent() {
    
// Build the JSON payload containing the content to be shared
var payload = { 
  "comment": "Check out developer.linkedin.com! http://linkd.in/1FC2PyG", 
  "visibility": { 
    "code": "anyone"
  } 
};


IN.API.Raw("/people/~/shares?format=json")
  .method("POST")
  .body(JSON.stringify(payload))
  .result(onSuccess)
  .error(onError);
}

function liAuth(){
  console.log("dfdss");
  IN.UI.Authorize().params({"scope":["r_basicprofile", "r_emailaddress","w_share"]}).place();
  IN.Event.on(IN, 'auth', shareContent);
//   IN.User.authorize(function(){
// onLinkedInLoad();
//   });
  }
