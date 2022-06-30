// Animation slide-right section caractéristiques, 3 dual contents

const slidingCaracteristiques = document.querySelector('.sliding-right-caracteristiques');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;


    // console.log(scrollTop, clientHeight)

    const topElementToTopViewport = slidingCaracteristiques.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.9){
        slidingCaracteristiques.classList.add('active')
    }
})




// Animation slide-left du texte Références client

const slidingReferences = document.querySelector('.sliding-left-text-references');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;


    // console.log(scrollTop, clientHeight)

    const topElementToTopViewport = slidingReferences.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        slidingReferences.classList.add('active')
    }
})





  // Tooltip bouton sur le header page Evénements

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
