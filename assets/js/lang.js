$(function () {
  ///// Language Switching (2 languages: English and French). /////

  // Initially disable language switching button.
  $('#switch-lang').css({'pointer-events':'none',
   'cursor':'default'}).attr('disabled','disabled');

  function langButtonListen() {
    $('#switch-lang').click(function (event) {
//       event.preventDefault();
      $("[lang='fr']").toggle();
      $("[lang='en']").toggle();
      // Switch cookie stored language.
      if (Cookies.get("lang") === 'en') {
        Cookies.set('lang', 'fr', { expires: 7 , path: '/', secure: true});
      } else {
        Cookies.set('lang', 'en', { expires: 7 , path: '/', secure: true});
      }
    });
    // Enable lang switching button.
    $('#switch-lang').css({'pointer-events':'auto',
     'cursor':'pointer'}).removeAttr('disabled');
  }

  // Check if language cookie already exists.
  if (Cookies.get("lang")) {
    var lang = Cookies.get('lang');
    if (lang === 'en') {
      $("[lang='fr']").hide();
      langButtonListen();
    } else {
      $("[lang='en']").hide();
      langButtonListen();
    }
  } else {
    // no cookie set, so detect language based on location.
//     if ("geolocation" in navigator && false) {
//       // geolocation is available
//       navigator.geolocation.getCurrentPosition(function (position) {
//         // accepted geolocation so figure out which country
//         var lat = position.coords.latitude,
//             lng = position.coords.longitude;
//         $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&sensor=true', null, function (response) {
//           var country = response.results[response.results.length-1].formatted_address;
//           if (country ===  'France') {
//             $("[lang='en']").hide();
//             Cookies.set('lang', 'fr', { expires: 7 , path: '/', secure: true});
//             langButtonListen();
//           } else {
//             $("[lang='fr']").hide();
//             Cookies.set('lang', 'en', { expires: 7 , path: '/', secure: true});
//             langButtonListen();
//           }
//         }).fail(function (err) {
//           console.log('error: '+err);
//           $("[lang='fr']").hide();
//           Cookies.set('lang', 'en', { expires: 7 , path: '/', secure: true});
//           langButtonListen();
//         });
//       },
//       function (error) {
//         if (error.code == error.PERMISSION_DENIED) {
//           // denied geolocation
//           $("[lang='fr']").hide();
//           Cookies.set('lang', 'en', { expires: 7 , path: '/', secure: true});
//           langButtonListen();
//         } else {
//           console.log('Unknown error. Defaulting to English!');
//           $("[lang='fr']").hide();
//           Cookies.set('lang', 'en', { expires: 7 , path: '/', secure: true});
//           langButtonListen();
//         }
//       });
//     } else {
      // geolocation IS NOT available
      $("[lang='fr']").hide();
      Cookies.set('lang', 'en', { expires: 7 , path: '/', secure: true});
      langButtonListen();
//     }
  }
}
);
