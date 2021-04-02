/*====SHOW MENU====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    //Validate that variables exist in the
    if (toggle && nav) {
        //We add the show-menu class to the div tag with the nav__menu class
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')
    
    
/*====REMOVE MENU MOBILE====*/
    //When we click on each nav__link, we remove the show-menu class
/*====SCROLL SECTIONS ACTIVE LINK====*/
/*====CHANGE BACKGROUND HEADER====*/
//When the scroll is greater than 200 viewport height, add the scroll-header class
