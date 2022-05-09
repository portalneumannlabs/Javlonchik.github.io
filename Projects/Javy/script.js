window.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.nav');
    const navBar = document.querySelector('.navigation');
    const navigationItems = document.querySelectorAll('.nav li a');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
          navBar.classList.add('fixed-top');
        } 
    });
    
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        navigation.classList.toggle('active');
    })

    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navigation.classList.remove('active');
        })
    })
    // ====================
    const scrollBtn = document.querySelector('.scrollToTop-btn');

    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 500);
    })
    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})