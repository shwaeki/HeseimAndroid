char_mapping_hebrew = {
 "א":"ا",
 "ב":"ب",
 "ג":"ج",
 "ד":"د",
 "ה":"ه",
 "ו":"و",
 "ז":"ز",
 "ח":"ح",
 "ט":"ط",
 "י":"ي",
 "כ":"خ",
 "ל":"ل",
 "מ":"م",
 "נ":"ن",
 "ס":"س",
 "ע":"ل",
 "פ":"ف",
 "צ":"ص",
 "ק":"ك",
 "ר":"ر",
 "ש":"ش",
 "ת":"ت"
}



char_mapping_arabic = {
 "ا":"א",
 "ب":"ב",
 "ج":"ג",
 "د":"ד",
 "ه":"ה",
 "و":"ו",
 "ز":"ז",
 "ح":"ח",
 "ط":"ט",
 "ي":"י",
 "خ":"כ",
 "ل":"ל",
 "م":"מ",
 "ن":"נ",
 "س":"ס",
 "ل":"ע",
 "ف":"פ",
 "ص":"צ",
 "ك":"ק",
 "ر":"ר",
 "ش":"ש",
 "ت":"ת",
 "ء":"א",
 "ق":"ק",
 "ذ":"ק",
 "ض":"ד",
 "ظ":"ד",
 "غ":"ג",
 "ى":"א",
 "ة":"ה",
}


function correctChar(old_char){
if(char_mapping_arabic[old_char] == undefined)
    {
        return(old_char)
    }
    else
    {
        return(char_mapping_arabic[old_char])
    }
}

function changeArabicToHebrew(text){
    var new_text = ""
    for(i=0;i<text.length;i++){
        new_text = new_text+correctChar(text[i])
    }
    return new_text;
}


/*
********************** Get Arabic Names File **********************
*/
ArabicNames = {};
function readJsonFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


function translateToArabic(txt) {
    //  console.log(ArabicNames);
    txt.split(" ").forEach(function (name) {
        if (name && ArabicNames[name] && ArabicNames[name] !== undefined) {
        //    console.log(name + '  -  ' + ArabicNames[name]);
            txt = txt.replace(name, ArabicNames[name]);
        }
    });
    return txt
}




eventTypeListArabic = {
    "הוספת ילד/ה לנסיעה": "اضافة طالب الى السفرية",
    "הסעה מאחרת": "تأخر في السفرية",
    "התנהגות שלילית של תלמיד/נהג": "سلوك الطالب / السائق السلبي",
    "מסלול ארוך": "المسار يأخذ الكثير من الوقت",
    "רכב לא תקין/לא בטיחותי": "مركبة غير جيدة / غير آمنة",
    "איחור מבוגר אחראי לקבלת התלמיד/מסירת התלמיד": "تأخر اهل الطالب في  استلام / توصيل الطالب",
    "אירוע חריג - אחר": "حدث غير عادي - آخر",
};


notCollectedReasonListArabic = {
    "התלמיד איחר והנהג המשיך בנסיעה": "تأخر الطالب واستمر السائق في القيادة",
    "התלמיד לא מגיע ללימודים": "لا يأتي الطالب إلى المدرسة",
    "התלמיד יגיע עצמאית למוסד": "سيأتي الطالب إلى المؤسسة بشكل مستقل",
    "התלמיד לא נוסע במסלול": "الطالب لا ينتمي الى هذه السفرية",
    "אחר – הקלדת טקסט חופשי": "سبب اخر",
};


console.log("START TRANSLATE FILE");
