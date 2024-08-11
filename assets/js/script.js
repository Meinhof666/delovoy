// menu__active
const headerMenu = document.querySelector('.menu__content');
const menuBtn = document.getElementById('menu__btn');
const menuBtnClose = document.getElementById('menu__btn__close');

menuBtn.addEventListener('click', () => {
    headerMenu.classList.add('menu__active');
});

menuBtnClose.addEventListener('click', () => {
    headerMenu.classList.remove('menu__active');
});
// menu__active
// like__active
const headerLike = document.querySelector('.like__content');
const likeBtn = document.getElementById('like__btn');
const likeBtnClose = document.getElementById('like__btn__close');

likeBtn.addEventListener('click', () => {
    headerLike.classList.add('like__active');
});

likeBtnClose.addEventListener('click', () => {
    headerLike.classList.remove('like__active');
});
// like__active
// announcement__active
const headerAnnoun = document.querySelector('.announcement__content');
const announBtn = document.getElementById('announcement__btn');
const announBtnClose = document.getElementById('announcement__btn__close');

announBtn.addEventListener('click', () => {
    headerAnnoun.classList.add('announcement__active');
});

announBtnClose.addEventListener('click', () => {
    headerAnnoun.classList.remove('announcement__active');
});
// announcement__active
// login__active
const headerLogin = document.querySelector('.login__content');
const loginBtn = document.getElementById('login__btn');
const loginBtnClose = document.getElementById('login__btn__close');

loginBtn.addEventListener('click', () => {
    headerLogin.classList.add('login__active');
});

loginBtnClose.addEventListener('click', () => {
    headerLogin.classList.remove('login__active');
});
// login__active