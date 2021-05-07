const navSlide = () => {
    const burger = document.querySelector('.hamburger-nav-box');
    const canvasClick = document.querySelector('.canvas-click');
    const appleClick = document.querySelector('.apple-click');
    const uxuiClick = document.querySelector('.uxui-click');
    const websitesClick = document.querySelector('.websites-click');
    
    const nav = document.querySelector('.nav-content-container');
    const navLinks1 = document.querySelector('.profile-text');
    const navLinks2 = document.querySelector('.menu-section');
    const navLinks3 = document.querySelector('.portfolio-section');

    
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-content-container-active');
        
        if (navLinks1.style.animation && navLinks2.style.animation && navLinks3.style.animation)
            {
                navLinks1.style.animation = '';
                navLinks2.style.animation = '';
                navLinks3.style.animation = '';
            }
        else
            {
                navLinks1.style.animation = `navLinkFade 1s ease forwards 0.2s`;
                navLinks2.style.animation = `navLinkFade 1s ease forwards 0.4s`;
                navLinks3.style.animation = `navLinkFade 1s ease forwards 0.6s`;
            }
        
        burger.classList.toggle('toggle');
    });
    
    canvasClick.addEventListener('click',() => {
        nav.classList.toggle('nav-content-container-active');
        if (navLinks1.style.animation && navLinks2.style.animation && navLinks3.style.animation)
            {
                navLinks1.style.animation = '';
                navLinks2.style.animation = '';
                navLinks3.style.animation = '';
            }
        else
            {
                navLinks1.style.animation = `navLinkFade 1s ease forwards 0.2s`;
                navLinks2.style.animation = `navLinkFade 1s ease forwards 0.4s`;
                navLinks3.style.animation = `navLinkFade 1s ease forwards 0.6s`;
            }
        burger.classList.toggle('toggle');
    });
    
    appleClick.addEventListener('click',() => {
        nav.classList.toggle('nav-content-container-active');
        if (navLinks1.style.animation && navLinks2.style.animation && navLinks3.style.animation)
            {
                navLinks1.style.animation = '';
                navLinks2.style.animation = '';
                navLinks3.style.animation = '';
            }
        else
            {
                navLinks1.style.animation = `navLinkFade 1s ease forwards 0.2s`;
                navLinks2.style.animation = `navLinkFade 1s ease forwards 0.4s`;
                navLinks3.style.animation = `navLinkFade 1s ease forwards 0.6s`;
            }
        burger.classList.toggle('toggle');
    });
    
    uxuiClick.addEventListener('click',() => {
        nav.classList.toggle('nav-content-container-active');
        if (navLinks1.style.animation && navLinks2.style.animation && navLinks3.style.animation)
            {
                navLinks1.style.animation = '';
                navLinks2.style.animation = '';
                navLinks3.style.animation = '';
            }
        else
            {
                navLinks1.style.animation = `navLinkFade 1s ease forwards 0.2s`;
                navLinks2.style.animation = `navLinkFade 1s ease forwards 0.4s`;
                navLinks3.style.animation = `navLinkFade 1s ease forwards 0.6s`;
            }
        burger.classList.toggle('toggle');
    });
    
    websitesClick.addEventListener('click',() => {
        nav.classList.toggle('nav-content-container-active');
        if (navLinks1.style.animation && navLinks2.style.animation && navLinks3.style.animation)
            {
                navLinks1.style.animation = '';
                navLinks2.style.animation = '';
                navLinks3.style.animation = '';
            }
        else
            {
                navLinks1.style.animation = `navLinkFade 1s ease forwards 0.2s`;
                navLinks2.style.animation = `navLinkFade 1s ease forwards 0.4s`;
                navLinks3.style.animation = `navLinkFade 1s ease forwards 0.6s`;
            }
        burger.classList.toggle('toggle');
    });
}

navSlide();

//----------------------


//function navColorUpdate() {
//    var window_top = $(window).scrollTop();
//    var div_top = $('#ux-ui-section').offset().top;
//    if (window_top > div_top) {
//        $('#nav-top').addClass('colorChange');
//    } else {
//        $('#nav-top').removeClass('colorChange');
//    }
//};
//
//$(function () {
//    $(window).scroll(navColorUpdate);
//    navColorUpdate();
//});