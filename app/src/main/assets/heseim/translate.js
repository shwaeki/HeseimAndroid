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

function correctString(old_string){
new_string = ""
for(i=0;i<old_string.length;i++){
    new_string = new_string+correctChar(old_string[i])
}
return new_string;
}
console.log(correctString("احمد"));
console.log(correctString("محمد"));
console.log(correctString("سامي"));
console.log(correctString("هاني"));
console.log(correctString("محمود"));
console.log(correctString("سامر"));
console.log(correctString("هناء"));
console.log(correctString("فداء"));
console.log(correctString("رامة"));
console.log(correctString("طارق"));
console.log(correctString("غادة"));
console.log(correctString("سارة"));
console.log(correctString("موسى"));
console.log(correctString("شامي"));