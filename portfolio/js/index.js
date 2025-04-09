function openMenu() {
    document.querySelector('.menu').style.left = 0;
}

function closeMenu() {
    document.querySelector('.menu').style.left = '100%';
}

document.querySelector('.navigation__burger').addEventListener('click', () => {
    openMenu();
})

document.querySelector('.menu__close').addEventListener('click', () => {
    closeMenu();
})


var activeLink = document.querySelector('.activeLink');
var activeSlide = document.querySelector('.home');
console.log(activeSlide)

var menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        //update menu link
        activeLink.classList.remove('activeLink');
        activeLink = link;
        link.classList.add('activeLink');

        //update slide
        activeSlide.classList.add('hiddenSlide');
        newSlide = document.querySelector('.' + link.textContent.toLowerCase().trim());
        newSlide.classList.remove('hiddenSlide');
        activeSlide = newSlide;

        closeMenu();
    })
});