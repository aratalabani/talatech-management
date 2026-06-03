// MENU
function toggleMenu(){
document.getElementById("nav").classList.toggle("active");
}

// FULL LANGUAGE SYSTEM (FIXED PROPERLY)
const lang = {
en:{
nav_home:"Home",
nav_services:"Services",
nav_pricing:"Pricing",
nav_contact:"Contact",

hero_title:"Grow Your Business Online",
hero_sub:"Websites, branding, social media & digital marketing.",

cta1:"View Pricing",
cta2:"Contact",

services_title:"Services",
pricing_title:"Pricing",
contact_title:"Contact",

s1_title:"Website Development",
s2_title:"Logo Design",
s3_title:"Photo Editing",
s4_title:"Social Media",

basic:"Basic",
business:"Business",
premium:"Premium"
},

ku:{
nav_home:"سەرەتا",
nav_services:"خزمەتگوزاری",
nav_pricing:"نرخەکان",
nav_contact:"پەیوەندی",

hero_title:"بزنسەکەت گەشەپێبدە",
hero_sub:"وێبسایت، براندینگ، سۆشیال میدیا",

cta1:"نرخەکان",
cta2:"پەیوەندی",

services_title:"خزمەتگوزاری",
pricing_title:"نرخەکان",
contact_title:"پەیوەندی",

s1_title:"دروستکردنی وێبسایت",
s2_title:"دیزاینی لوگۆ",
s3_title:"دەستکاری وێنە",
s4_title:"سۆشیال میدیا",

basic:"بنەڕەتی",
business:"بیزنس",
premium:"پڕەمیۆم"
},

ar:{
nav_home:"الرئيسية",
nav_services:"الخدمات",
nav_pricing:"الأسعار",
nav_contact:"اتصال",

hero_title:"طوّر عملك",
hero_sub:"مواقع، تصميم، سوشيال ميديا",

cta1:"الأسعار",
cta2:"اتصال",

services_title:"الخدمات",
pricing_title:"الأسعار",
contact_title:"اتصال",

s1_title:"تطوير المواقع",
s2_title:"تصميم شعار",
s3_title:"تعديل الصور",
s4_title:"وسائل التواصل",

basic:"أساسي",
business:"أعمال",
premium:"بريميوم"
}
};

function setLang(l){
document.querySelectorAll("[data-i18n]").forEach(el=>{
const key = el.getAttribute("data-i18n");
if(lang[l][key]){
el.innerText = lang[l][key];
}
});
}
