// JS scroll animatsiya (responsive parallax)
window.addEventListener("scroll", function() {
  let scrollTop = window.scrollY;

  // faqat katta ekranlarda ishlasin (masalan, 1024px dan katta)
  if (window.innerWidth > 1024) {
    // page1 fonini sekin harakatlantirish
    document.querySelector(".page1").style.backgroundPositionY = -(scrollTop * 0.2) + "px";

    // page3 fonini boshqacha tezlikda
    document.querySelector(".page3").style.backgroundPositionY = -(scrollTop * 0.1) + "px";

    // footer fonini sekinroq
    // document.querySelector("footer").style.backgroundPositionY = -(scrollTop * 0.05) + "px";
  } else {
    // kichik ekranlarda (telefon/planshet) fonni default qilib qo‘yish
    document.querySelector(".page1").style.backgroundPositionY = "center";
    document.querySelector(".page3").style.backgroundPositionY = "center";
    // document.querySelector("footer").style.backgroundPositionY = "center";
  }
});
