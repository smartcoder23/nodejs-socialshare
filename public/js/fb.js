window.fbAsyncInit = function() {
	FB.init({
	  appId            : '443153576210730',
	  autoLogAppEvents : true,
	  xfbml            : true,
	  version          : 'v2.10'
	});
	FB.AppEvents.logPageView();
  };
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2&appId=443153576210730&autoLogAppEvents=1';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
// console.log(this.url);
// shareOverrideOGMeta(this.url,this.title1,this.title1,this.image)
// function shareOverrideOGMeta(overrideLink, overrideTitle, overrideDescription, overrideImage)
// {
// 	FB.ui({
// 		method: 'share_open_graph',
// 		action_type: 'og.likes',
// 		action_properties: JSON.stringify({
// 			object: {
// 				'og:url': overrideLink,
// 				'og:title': overrideTitle,
// 				'og:description': overrideDescription,
// 				'og:image': overrideImage
// 			}
// 		})
// 	},
// 	function (response) {
// 	// Action after response
// 	});
// }