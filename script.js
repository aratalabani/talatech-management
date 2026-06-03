// =========================
// LANGUAGE SYSTEM (EN / KU / AR)
// =========================

const translations = {
en: {
nav_home: "Home",
nav_services: "Services",
nav_pricing: "Pricing",
nav_contact: "Contact",

hero_title: "Grow Your Business Online",
hero_sub: "Websites, branding, social media & digital growth solutions.",
cta1: "View Pricing",
cta2: "Contact Us",

services_title: "Services",
pricing_title: "Pricing",
contact_title: "Contact"
},

ku: {
nav_home: "سەرەتا",
nav_services: "خزمەتگوزاری",
nav_pricing: "نرخەکان",
nav_contact: "پەیوەندی",

hero_title: "بزنسەکەت گەشەپێبدە لە ئینتەرنێت",
hero_sub: "وێبسایت، براندینگ، سۆشیال میدیا و گەشەپێدانی دیجیتاڵ",
cta1: "نرخ ببینە",
cta2: "پەیوەندی بکە",

services_title: "خزمەتگوزاریەکان",
pricing_title: "نرخەکان",
contact_title: "پەیوەندی"
},

ar: {
nav_home: "الرئيسية",
nav_services: "الخدمات",
nav_pricing: "الأسعار",
nav_contact: "اتصال",

hero_title: "نمِّ عملك عبر الإنترنت",
hero_sub: "مواقع، تصميم، سوشيال ميديا وتسويق رقمي",
cta1: "عرض الأسعار",
cta2: "اتصل بنا",

services_title: "الخدمات",
pricing_title: "الأسعار",
contact_title: "اتصل بنا"
}
};

// APPLY LANGUAGE
function setLang(lang){
document.querySelectorAll("[data-i18n]").forEach(el=>{
const key = el.getAttribute("data-i18n");
if(translations[lang][key]){
el.innerText = translations[lang][key];
}
});
}

// =========================
// LEARN MORE TOGGLE
// =========================

function toggle(btn){
const details = btn.nextElementSibling;

if(details.style.display === "block"){
details.style.display = "none";
btn.innerText = "Learn More";
}else{
details.style.display = "block";
btn.innerText = "Hide";
}
}

// =========================
// CALCULATOR
// =========================

const site = document.getElementById("site");
const logo = document.getElementById("logo");
const social = document.getElementById("social");
const total = document.getElementById("total");

function updatePrice(){

let price = Number(site.value);

if(logo.checked) price += 15;
if(social.checked) price += 75;

total.innerText = price;

}

if(site){
site.addEventListener("change", updatePrice);
logo.addEventListener("change", updatePrice);
social.addEventListener("change", updatePrice);
}

// run once
updatePrice();

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll("a[href^='#']").forEach(a=>{
a.addEventListener("click",e=>{
e.preventDefault();
document.querySelector(a.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
});
});
