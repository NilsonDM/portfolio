const toggleMenu = ()=>{
    let menu = document.getElementById('main_menu')
    menu.classList.toggle('hidden')
}

const hiddenElements = document.querySelectorAll(".hidden");
const links = document.querySelectorAll(".link");
const iconShowMenu = document.querySelector(".iconShowMenu");
const navbarMenu = document.querySelector(".navbar__menu");

iconShowMenu.addEventListener("click", () => {
    if (navbarMenu.classList.toggle("navbar__menu--show"))
        return iconShowMenu.classList.add("bx-x");

    iconShowMenu.classList.remove("bx-x");
});

links.forEach((link) => {
    closeMenu(link);
});

function closeMenu(elementHMTL) {
    elementHMTL.addEventListener("click", () => {
        if (navbarMenu.classList.toggle("navbar__menu--show"))
            return iconShowMenu.classList.add("bx-x");

        iconShowMenu.classList.remove("bx-x");
    });
}

//Dark mode

const iconTheme = document.querySelector(".iconTheme");

iconTheme.addEventListener("click", () => {
    if (document.body.classList.toggle("whiteMode"))
        return (iconTheme.textContent = "🌑 ");

    iconTheme.textContent = "☀️";
});


//Animations
window.sr = ScrollReveal()
sr.reveal('.navbar',{
    duration: 1500, 
    origin:'top',
    distance:'300px'
});

sr.reveal('.home__title',{
    duration: 2000, 
    origin:'top',
    distance:'300px'
});
sr.reveal('.img_container',{ delay: 2000 });

sr.reveal('.icons_container',{ 
    duration: 2000,
    origin: 'left',
    distance:'500px'});

sr.reveal('#aboutme',{ 
    delay: 1000,
    origin: 'bottom',
    distance: '100px' 
})

sr.reveal('.portfolio',{
    duration: 3000,
    rotate:{
        x: 0,
        y:180
    }
})