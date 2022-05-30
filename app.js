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