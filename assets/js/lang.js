let langs = ['en', 'fr'];
let lang = 'en';
setLangStyles(lang);

function setStyles(styles) {
    var elementId = '__lang_styles';
    var element = document.getElementById(elementId);
    if (element) {
        element.remove();
    }

    let style = document.createElement('style');
    style.id = elementId;
    style.type = 'text/css';

    if (style.styleSheet) {
        style.styleSheet.cssText = styles;
    } else {
        style.appendChild(document.createTextNode(styles));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

function switchLang() {
    if (lang == 'en') {
        setLang('fr');
        lang = 'fr';
        document.getElementById("lang-toggle").checked = true;
    }
    else {
        setLang('en');
        lang = 'en';
        document.getElementById("lang-toggle").checked = false;
    }
    document.referrer.hreflang = lang;
}

function setLang(lang) {
    setLangStyles(lang);
}

function setLangStyles(lang) {
    let styles = langs
    .filter(function (l) {
        return l != lang;
    })
    .map(function (l) {
        return ':lang('+ l +') { display: none; }';
    })
    .join(' ');

    setStyles(styles);
    
//     setPageTitleLang(lang)
}
/*
function setPageTitleLang(lang) {
    if (lang=='fr'){
        page.title = page.title_fr;
    }
    else {
        page.title = page.title_en;
    }
}*/
