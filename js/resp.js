burger = document.querySelector('.burger')
navbar = document.querySelector('.h-nav-resp')
navList = document.querySelector('.nav-list ')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class-resp')
    rightNav.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})
