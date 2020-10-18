const navSlider = () =>
{
    const menu = document.querySelector('.menu');
    const angelButton = document.querySelector('.angel-button');
    const sutherlandButton = document.querySelector('.sutherland-button');
    const yosemiteButton = document.querySelector('.yosemite-button');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    menu.addEventListener('click', () =>
    {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => 
        {            
            if(link.style.animation)
                {
                    link.style.animation = '';
                }
            else
                {
                    link.style.animation = `navLinkFade 0.2s ease forwards ${index / 7 + .5}s`;
                }        
        });
        menu.classList.toggle('toggle');
    });
    
    angelButton.addEventListener('click', () =>
    {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => 
        {            
            if(link.style.animation)
                {
                    link.style.animation = '';
                }
            else
                {
                    link.style.animation = `navLinkFade 0.2s ease forwards ${index / 7 + .5}s`;
                }        
        });
        menu.classList.toggle('toggle');
        window.scrollTo(0, 200);
    });
    
    sutherlandButton.addEventListener('click', () =>
    {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => 
        {            
            if(link.style.animation)
                {
                    link.style.animation = '';
                }
            else
                {
                    link.style.animation = `navLinkFade 0.2s ease forwards ${index / 7 + .5}s`;
                }        
        });
        menu.classList.toggle('toggle');
        window.scrollTo(0, 1250);
    });
    
    yosemiteButton.addEventListener('click', () =>
    {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => 
        {            
            if(link.style.animation)
                {
                    link.style.animation = '';
                }
            else
                {
                    link.style.animation = `navLinkFade 0.2s ease forwards ${index / 7 + .5}s`;
                }        
        });
        menu.classList.toggle('toggle');
        window.scrollTo(0, 2250);
    });
}

navSlider();