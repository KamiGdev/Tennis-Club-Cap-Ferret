// Animation slide-right section caractéristiques, 3 dual contents - Home Page

const slidingRight = document.querySelector('.sliding-right');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;


    // console.log(scrollTop, clientHeight)

    const topElementToTopViewport = slidingRight.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.9){
        slidingRight.classList.add('active')
    }
})





// Animation slide-left du texte Références client - Home Page + Titre événement à venir - Page Evénements

const slidingLeft = document.querySelector('.sliding-left');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;


    // console.log(scrollTop, clientHeight)

    const topElementToTopViewport = slidingLeft.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        slidingLeft.classList.add('active')
    }
})





  // Tooltip bouton sur le header page Evénements

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })





  


// Cookie consent sur home page


const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);









