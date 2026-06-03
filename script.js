/* =========================
   TOGGLE MOBILE MENU
========================= */
function toggleMenu(){
  const nav = document.getElementById("navLinks");
  if(nav){
    nav.classList.toggle("active");
  }
}

/* =========================
   LANGUAGE SYSTEM
   (EN / KU / AR)
========================= */
const translations = {
  en:{
    home:"Home",
    services:"Services",
    pricing:"Pricing",
    contact:"Contact",

    title:"We Build Websites That Grow Businesses",
    subtitle:"Modern digital solutions for real growth.",

    servicesTitle:"Our Services",
    pricingTitle:"Pricing Plans"
  },

  ku:{
    home:"سەرەتا",
    services:"خزمەتگوزاری",
    pricing:"نرخەکان",
    contact:"پەیوەندی",

    title:"ئێمە وێبسایت دروست دەکەین بۆ گەشەپێدانی بزنس",
    subtitle:"چارەسەری دیجیتاڵی بۆ گەشەی راستەقینە",

    servicesTitle:"خزمەتگوزاریەکان",
    pricingTitle:"نرخەکان"
  },

  ar:{
    home:"الرئيسية",
    services:"الخدمات",
    pricing:"الأسعار",
    contact:"اتصال",

    title:"نقوم ببناء مواقع تنمي الأعمال",
    subtitle:"حلول رقمية للنمو الحقيقي",

    servicesTitle:"الخدمات",
    pricingTitle:"الأسعار"
  }
};

/* CHANGE LANGUAGE */
function setLang(lang){
  const dataElements = document.querySelectorAll("[data-key]");

  dataElements.forEach(el=>{
    const key = el.getAttribute("data-key");
    if(translations[lang] && translations[lang][key]){
      el.innerText = translations[lang][key];
    }
  });
}

/* =========================
   CALCULATOR
========================= */
function calculate(){
  const service = document.getElementById("service");
  const qty = document.getElementById("qty");
  const result = document.getElementById("result");

  if(!service || !qty || !result) return;

  let price = Number(service.value);
  let amount = Number(qty.value);

  if(!amount || amount < 1){
    amount = 1;
  }

  let total = price * amount;

  result.innerText = "Total: $" + total;
}

/* =========================
   SEE MORE / DETAILS
========================= */
function toggleDetails(card){
  if(!card) return;

  const details = card.querySelector(".details");
  if(!details) return;

  if(details.style.display === "block"){
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
}

/* =========================
   AUTO CLOSE MENU (OPTIONAL UX)
========================= */
document.addEventListener("click", function(e){
  const nav = document.getElementById("navLinks");
  const menu = document.querySelector(".hamburger");

  if(nav && menu){
    if(!nav.contains(e.target) && !menu.contains(e.target)){
      nav.classList.remove("active");
    }
  }
});
