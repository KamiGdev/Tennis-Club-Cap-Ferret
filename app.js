// Disparition du Preloader sur la page Accueil dès le chargement du site

const loader = document.querySelector('.loader');

window.addEventListener('load', function(){
    loader.className += " hidden";
})




// Animation Scrollspy - Nav-items dans le menu

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-scrollspy'
})





// Animation slide-right section caractéristiques, 3 dual contents - Home Page

let slidingRight = document.querySelector('.sliding-right');

window.addEventListener('scroll', () => {

    let {scrollTop, clientHeight} = document.documentElement;


    // console.log(scrollTop, clientHeight)

    let topElementToTopViewport = slidingRight.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.9){
        slidingRight.classList.add('active')
    }
})





// Animation slide-left du texte Références client - Home Page + Titre événement à venir - Page Evénements

let slidingLeft = document.querySelector('.sliding-left');

window.addEventListener('scroll', () => {

    let {scrollTop, clientHeight} = document.documentElement;


    // console.log(scrollTop, clientHeight)

    let topElementToTopViewport = slidingLeft.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        slidingLeft.classList.add('active')
    }
})





  // Tooltip bouton sur le header - Page Evénements

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })





  


// Cookie consent sur home page

let cookieContainer = document.querySelector(".cookie-container");
let cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);









