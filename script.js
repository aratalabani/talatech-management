// ===============================
// TALA MANAGEMENT
// MULTI LANGUAGE SYSTEM
// ===============================

const translations = {
    en: {
        home: "Home",
        services: "Services",
        pricing: "Pricing",
        about: "About",
        faq: "FAQ",
        contact: "Contact"
    },

    ku: {
        home: "سەرەکی",
        services: "خزمەتگوزارییەکان",
        pricing: "نرخەکان",
        about: "دەربارە",
        faq: "پرسیارە باوەکان",
        contact: "پەیوەندی"
    },

    ar: {
        home: "الرئيسية",
        services: "الخدمات",
        pricing: "الأسعار",
        about: "حولنا",
        faq: "الأسئلة الشائعة",
        contact: "اتصل بنا"
    }
};

// ===============================
// LANGUAGE SWITCHER
// ===============================

function setLanguage(lang) {

    const elements = document.querySelectorAll(
        "[data-en],[data-ku],[data-ar]"
    );

    elements.forEach(element => {

        if (lang === "en") {
            element.innerHTML = element.dataset.en;
        }

        if (lang === "ku") {
            element.innerHTML = element.dataset.ku;
        }

        if (lang === "ar") {
            element.innerHTML = element.dataset.ar;
        }
    });

    localStorage.setItem("language", lang);

    if (lang === "ar") {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
    } else {
        document.documentElement.dir = "ltr";
    }
}

// ===============================
// LOAD SAVED LANGUAGE
// ===============================

window.addEventListener("load", () => {

    const savedLanguage =
        localStorage.getItem("language") || "en";

    setLanguage(savedLanguage);

});

// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform =
                "translateY(0)";
        }

    });

});

document.querySelectorAll(
    ".service-card, .price-card, .faq-item"
).forEach(card => {

    card.style.opacity = "0";
    card.style.transform =
        "translateY(30px)";
    card.style.transition =
        "all 0.7s ease";

    observer.observe(card);

});

// ===============================
// FLOATING EFFECT
// ===============================

document.addEventListener("mousemove", e => {

    const shapes =
        document.querySelectorAll(".bg-shape");

    shapes.forEach((shape, index) => {

        const speed = (index + 1) * 0.01;

        shape.style.transform =
            `translate(${e.clientX * speed}px, ${e.clientY * speed}px)`;

    });

});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "Tala Management Website Loaded Successfully"
);
