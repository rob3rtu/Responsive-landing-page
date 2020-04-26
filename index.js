const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav_links');
const close = document.querySelector('.close');

const slideNav = () => {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-clear');
        close.classList.toggle('close-active');
    })

    close.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-clear');
        close.classList.toggle('close-active');
    })
}

slideNav();