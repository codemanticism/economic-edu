const names = {"aa": "Afaraf", "ab": "Аҧсуа", "ae": "avesta", "af": "Afrikaans", "ak": "Akan", "am": "አማርኛ", "an": "Aragonés", "ar": "العربية", "as": "অসমীয়া", "av": "авар мацӀ, магӀарул мацӀ", "ay": "aymar aru", "az": "azərbaycan dili", "ba": "башҡорт теле", "be": "Беларуская", "bg": "български език", "bh": "भोजपुरी", "bi": "Bislama", "bm": "bamanankan", "bn": "বাংলা", "bo": "བོད་ཡིག", "br": "brezhoneg", "bs": "bosanski jezik", "ca": "Català", "ce": "нохчийн мотт", "ch": "Chamoru", "co": "corsu, lingua corsa", "cr": "ᓀᐦᐃᔭᐍᐏᐣ", "cs": "česky, čeština", "cu": "ѩзыкъ словѣньскъ", "cv": "чӑваш чӗлхи", "cy": "Cymraeg", "da": "dansk", "de": "Deutsch", "dv": "ދިވެހި", "dz": "རྫོང་ཁ", "ee": "Eʋegbe", "el": "Ελληνικά", "en": "English", "eo": "Esperanto", "es": "español, castellano", "et": "eesti, eesti keel", "eu": "euskara, euskera", "fa": "فارسی", "ff": "Fulfulde, Pulaar, Pular", "fi": "suomi, suomen kieli", "fj": "vosa Vakaviti", "fo": "føroyskt", "fr": "français, langue française", "fy": "Frysk", "ga": "Gaeilge", "gd": "Gàidhlig", "gl": "Galego", "gn": "Avañe\'ẽ", "gu": "ગુજરાતી", "gv": "Gaelg, Gailck", "ha": "Hausa, هَوُسَ", "he": "עברית", "hi": "हिन्दी, हिंदी", "ho": "Hiri Motu", "hr": "hrvatski", "ht": "Kreyòl ayisyen", "hu": "Magyar", "hy": "Հայերեն", "hz": "Otjiherero", "ia": "Interlingua", "id": "Bahasa Indonesia", "ie": "Interlingue", "ig": "Igbo", "ii": "ꆇꉙ", "ik": "Iñupiaq, Iñupiatun", "io": "Ido", "is": "Íslenska", "it": "Italiano", "iu": "ᐃᓄᒃᑎᑐᑦ", "ja": "日本語 (にほんご／にっぽんご)", "jv": "basa Jawa", "ka": "ქართული", "kg": "KiKongo", "ki": "Gĩkũyũ", "kj": "Kuanyama", "kk": "Қазақ тілі", "kl": "kalaallisut, kalaallit oqaasii", "km": "ភាសាខ្មែរ", "kn": "ಕನ್ನಡ", "ko": "한국어 (韓國語), 조선말 (朝鮮語)", "kr": "Kanuri", "ks": "कश्मीरी, كشميري‎", "ku": "Kurdî, كوردی‎", "kv": "коми кыв", "kw": "Kernewek", "ky": "кыргыз тили", "la": "latine, lingua latina", "lb": "Lëtzebuergesch", "lg": "Luganda", "li": "Limburgs", "ln": "Lingála", "lo": "ພາສາລາວ", "lt": "lietuvių kalba", "lu": "", "lv": "latviešu valoda", "mg": "Malagasy fiteny", "mh": "Kajin M̧ajeļ", "mi": "te reo Māori", "mk": "македонски јазик", "ml": "മലയാളം", "mn": "Монгол", "mr": "मराठी", "ms": "bahasa Melayu, بهاس ملايو‎", "mt": "Malti", "my": "ဗမာစာ", "na": "Ekakairũ Naoero", "nb": "Norsk bokmål", "nd": "isiNdebele", "ne": "नेपाली", "ng": "Owambo", "nl": "Nederlands, Vlaams", "nn": "Norsk nynorsk", "no": "Norsk", "nr": "isiNdebele", "nv": "Diné bizaad, Dinékʼehǰí", "ny": "chiCheŵa, chinyanja", "oc": "Occitan", "oj": "ᐊᓂᔑᓈᐯᒧᐎᓐ", "om": "Afaan Oromoo", "or": "ଓଡ଼ିଆ", "os": "Ирон æвзаг", "pa": "ਪੰਜਾਬੀ, پنجابی‎", "pi": "पाऴि", "pl": "polski", "ps": "پښتو", "pt": "Português", "qu": "Runa Simi, Kichwa", "rm": "rumantsch grischun", "rn": "kiRundi", "ro": "română", "ru": "Русский язык", "rw": "Ikinyarwanda", "sa": "संस्कृतम्", "sc": "sardu", "sd": "सिन्धी, سنڌي، سندھی‎", "se": "Davvisámegiella", "sg": "yângâ tî sängö", "si": "සිංහල", "sk": "slovenčina", "sl": "slovenščina", "sm": "gagana fa\'a Samoa", "sn": "chiShona", "so": "Soomaaliga, af Soomaali", "sq": "Shqip", "sr": "српски језик", "ss": "SiSwati", "st": "Sesotho", "su": "Basa Sunda", "sv": "svenska", "sw": "Kiswahili", "ta": "தமிழ்", "te": "తెలుగు", "tg": "тоҷикӣ, toğikī, تاجیکی‎", "th": "ไทย", "ti": "ትግርኛ", "tk": "Türkmen, Түркмен", "tl": "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔", "tn": "Setswana", "to": "faka Tonga", "tr": "Türkçe", "ts": "Xitsonga", "tt": "татарча, tatarça, تاتارچا‎", "tw": "Twi", "ty": "Reo Mā`ohi", "ug": "Uyƣurqə, ئۇيغۇرچە‎", "uk": "Українська", "ur": "اردو", "uz": "O\'zbek, Ўзбек, أۇزبېك‎", "ve": "Tshivenḓa", "vi": "Tiếng Việt", "vo": "Volapük", "wa": "Walon", "wo": "Wollof", "xh": "isiXhosa", "yi": "ייִדיש", "yo": "Yorùbá", "za": "Saɯ cueŋƅ, Saw cuengh", "zh": "中文 (Zhōngwén), 汉语, 漢語", "zu": "isiZulu"}
let code_of_language_selected = "";
function substitute(element){
  if(element.tagName == "INPUT"){
    try{
      const text = element.placeholder;
      eval("const variable = {" + text + "}")
      element.placeholder = variable[code_of_language_selected]
    }catch{
      console.log("*", element);
    }
  }else if(element.innerText != ""){
    try{
      const text = element.innerText;
      eval("const variable = {" + text + "}")
      element.innerText = variable[code_of_language_selected]
    }catch{
      console.log("*", element);
    }
  }
}
function review(element){
  substitute(element)
  for(let i = 0; i < element.children.length; i++){
    review(element.children[i])
  }
}
function clicked_on(btn){
  code_of_language_selected = btn.id
  document.getElementById("interface").hidden = false
  review(document.getElementById("interface"))
}
function initialize(languages){
  document.getElementById("interface").hidden = true
  const div = document.createElement("div")
  for(let i = 0; i < languages.length; i++){
    const button = document.createElement("img")
    button.innerHTML = "<h3> " + names[languages[i]] + "</h3> <img src='https://www.unknown.nu/flags/images/" + languages[i] + "-100'> "  
    button.id = languages[i]
    button.onclick = function(){ clicked_on(this) }
    div.append(button)
  }
  document.body.append(div)
}
