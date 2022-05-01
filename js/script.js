let mBur = document.querySelector('.header__mburger');
let navmanu = document.querySelector('.blog-header__navmanu');
let body = document.querySelector('body')


mBur.onclick = () => {
    mBur.classList.toggle('activ');
    navmanu.classList.toggle('activ');
    body.classList.toggle('activ');
}