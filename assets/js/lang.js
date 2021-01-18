// let langs = ['en', 'fr'];
// let lang = 'en';
// setLangStyles(lang);
// 
// function setStyles(styles) {
//     var elementId = '__lang_styles';
//     var element = document.getElementById(elementId);
//     if (element) {
//         element.remove();
//     }
// 
//     let style = document.createElement('style');
//     style.id = elementId;
//     style.type = 'text/css';
// 
//     if (style.styleSheet) {
//         style.styleSheet.cssText = styles;
//     } else {
//         style.appendChild(document.createTextNode(styles));
//     }
//     document.getElementsByTagName('head')[0].appendChild(style);
// }
// 
// function switchLang() {
//     if (lang == 'en') {
//         setLang('fr');
//         lang = 'fr';
//         document.getElementById("lang-toggle").checked = true;
//     }
//     else {
//         setLang('en');
//         lang = 'en';
//         document.getElementById("lang-toggle").checked = false;
//     }
//     document.referrer.hreflang = lang;
// }
// 
// function setLang(lang) {
//     setLangStyles(lang);
// }
// 
// function setLangStyles(lang) {
//     let styles = langs
//     .filter(function (l) {
//         return l != lang;
//     })
//     .map(function (l) {
//         return ':lang('+ l +') { display: none; }';
//     })
//     .join(' ');
// 
//     setStyles(styles);
//     
// //     setPageTitleLang(lang)
// }
// /*
// function setPageTitleLang(lang) {
//     if (lang=='fr'){
//         page.title = page.title_fr;
//     }
//     else {
//         page.title = page.title_en;
//     }
// }*/

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

$(function () {
  ///// Language Switching (2 languages: English and French). /////

  // Initially disable language switching button.
  $('#switch-lang').css({'pointer-events':'none',
   'cursor':'default'}).attr('disabled','disabled');

  function langButtonListen() {
    $('#switch-lang').click(function (event) {
      event.preventDefault();
      // Switch cookie stored language.
      if (getCookie("lang") === 'en') {
        setCookie('lang', 'fr', 3);
        $("[lang='fr']").display = "block";
        $("[lang='en']").display = "none";
      } else {
        setCookie('lang', 'en', 3);
        $("[lang='en']").display = "block";
        $("[lang='fr']").display = "none";
      }
    });
    // Enable lang switching button.
    $('#switch-lang').css({'pointer-events':'auto',
     'cursor':'pointer'}).removeAttr('disabled');
  }

  // Check if language cookie already exists.
  if (getCookie("lang")) {
    var lang = getCookie('lang');
    if (lang === 'en') {
      $("[lang='fr']").display = "none";
      langButtonListen();
    } else {
      $("[lang='en']").display = "none";
      langButtonListen();
    }
  } else {
    // no cookie set, so detect language based on location.
    if ("geolocation" in navigator) {
      // geolocation is available
      navigator.geolocation.getCurrentPosition(function (position) {
        // accepted geolocation so figure out which country
        var lat = position.coords.latitude,
            lng = position.coords.longitude;
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&sensor=true', null, function (response) {
          var country = response.results[response.results.length-1].formatted_address;
          if (country ===  'France') {
            $("[lang='en']").display = "none";
            setCookie('lang', 'fr', 3);
            langButtonListen();
          } else {
            $("[lang='fr']").display = "none";
            setCookie('lang', 'en', 3);
            langButtonListen();
          }
        }).fail(function (err) {
          console.log('error: '+err);
          $("[lang='fr']").display = "none";
          setCookie('lang', 'en', 3);
          langButtonListen();
        });
      },
      function (error) {
        if (error.code == error.PERMISSION_DENIED) {
          // denied geolocation
          $("[lang='fr']").display = "none";
          setCookie('lang', 'en', 3);
          langButtonListen();
        } else {
          console.log('Unknown error. Defaulting to English!');
          $("[lang='fr']").display = "none";
          setCookie('lang', 'en', 3);
          langButtonListen();
        }
      });
    } else {
      // geolocation IS NOT available
      $("[lang='fr']").display = "none";
      setCookie('lang', 'en', 3);
      langButtonListen());
    }
  }
