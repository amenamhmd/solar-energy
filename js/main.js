// تفعيل الروابط حسب السحب
const sections = document.querySelectorAll("section,header");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
  let scrollY = window.pageYOffset;
  let currentSectionId = "";

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 120; 
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
    if (
      index === sections.length - 1 &&
      window.innerHeight + scrollY >= document.body.scrollHeight
    ) {
      currentSectionId = section.getAttribute("id");
    }
  });

  if (scrollY < 100) {
    currentSectionId = sections[0].getAttribute("id");
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSectionId) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

// تغيير لون خلفية النافبار عند السحب
const navbar = document.querySelector(".navbar");
const homeSection = document.querySelector("#home");

function toggleNavbarBackground() {
  const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;

  if (window.scrollY >= homeBottom - 150) {
    navbar.classList.remove("navbar-transparent");
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.add("navbar-transparent");
    navbar.classList.remove("bg-dark");
  }
}

window.addEventListener("scroll", toggleNavbarBackground);
window.addEventListener("load", toggleNavbarBackground);


document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__zoomIn");
        entry.target.addEventListener("animationend", () => {
          entry.target.classList.remove("animate__animated", "animate__zoomIn");
        });
      }
    });
  });

  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__backInDown");
        entry.target.addEventListener("animationend", () => {
          entry.target.classList.remove("animate__animated", "animate__backInDown");
        });
      }
    });
  });

  const elements = document.querySelectorAll(".animate-on-scrolls");
  elements.forEach(el => observer.observe(el));
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    rtl: true,            // تفعيل من اليمين لليسار
    loop: true,           // لف مستمر
    margin: 10,           // مسافة بين العناصر
    nav: false,           // إخفاء الأسهم
    dots: true,           // تفعيل النقط أسفل السلايدر
    autoplay: true,       // تشغيل تلقائي
    autoplayTimeout: 2000, // وقت بين السلايدز
    autoplayHoverPause: true, // وقف عند المرور بالماوس
    responsive:{
      0:{ 
        items: 1,         // شاشة موبايل: عنصر واحد فقط
        margin: 20        // مسافة أكبر للموبايل
      },
      600:{ 
        items: 2          // التابلت: عنصرين
      },
      1000:{ 
        items: 3          // ديسكتوب: 3 عناصر
      }
    }
  });
});


  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true
          });
        }
      });
    });
  
  });

 window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// ✅ لما الصفحة تفتح
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ✅ لما ترجع بالـ Back
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    document.body.classList.add("loaded");
  }
});

// ✅ عند الضغط على أي لينك
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');

    if (
      link.id === "langSwitcher" ||  
      link.classList.contains("lang-switcher") ||
      link.closest(".lang-switcher")
    ) {
      return; // سيبه يشتغل عادي بدون fade
    }

    if (href && !href.startsWith('#') && !href.startsWith('mailto:')) {
      e.preventDefault();
      document.body.classList.remove("loaded"); // Fade out

      setTimeout(() => {
        window.location.href = href; // روح للرابط بعد التأثير
      }, 500);
    }
  });
});
function changeLanguage(lang) {
    if (lang === 'ar') {
        document.documentElement.setAttribute("dir", "rtl");
    } else {
        document.documentElement.setAttribute("dir", "ltr");
    }
}





