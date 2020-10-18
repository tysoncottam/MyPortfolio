const navSlider = () =>
{
    const menu = document.querySelector('.menu');
    const projectsButton = document.querySelector('.projects-button');
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
    
    projectsButton.addEventListener('click', () =>
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
}

navSlider();

window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
  {
    document.getElementById("first-li").style.padding = "15px";
    document.getElementById("second-li").style.padding = "15px";
    document.getElementById("third-li").style.padding = "15px";
    document.getElementById("last-li").style.padding = "15px";
    document.getElementById("first-breaker").style.height = "40px";
    document.getElementById("second-breaker").style.height = "40px";
    document.getElementById("last-breaker").style.height = "40px";
  } else 
  {
    document.getElementById("first-li").style.padding = "30px 35px";
    document.getElementById("second-li").style.padding = "30px 35px";
    document.getElementById("third-li").style.padding = "30px 35px";
    document.getElementById("last-li").style.padding = "30px 35px";
    document.getElementById("first-breaker").style.height = "50px";
    document.getElementById("second-breaker").style.height = "50px";
    document.getElementById("last-breaker").style.height = "50px";
  }
}