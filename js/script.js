const searchForm = document.querySelector('.search-form-container'),
    loginForm = document.querySelector('.login-form-container'),
    cart = document.querySelector('.shopping-cart-container'),
    navbar = document.querySelector('.header .navbar'),
    searchBtn = document.querySelector('#search-btn'),
    cartBtn = document.querySelector('#cart-btn'),
    loginBtn = document.querySelector('#login-btn'),
    menuBtn = document.querySelector('#menu-btn');

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

cartBtn.onclick = () => {
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


loginBtn.onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}


menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

document.querySelector('.home').onmousemove = (e) => {
    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageX * 2) / 90;
    document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
}

document.querySelector('.home').onmouseleave = () => {
    document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
}