// CHANGE NAVBAR STYLE ON SCROLL

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// SHOW FAQ ANSWER
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        //CHANGE ICON TO MINUS
        const icon = faq.querySelector('.faq-icon i')
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus'
        } else {
            icon.className = 'uil uil-plus'
        }
    })
})

// SHOW/HIDE NAV MENU
const menu = document.querySelector('.nav-menu') 
const menuOpen = document.querySelector('#open-menu-btn')
const menuClose = document.querySelector('#close-menu-btn')

menuOpen.addEventListener('click', () => {
    menu.style.display = 'flex';
    menuClose.style.display = 'inline-block';
    menuOpen.style.display = 'none';
    
    
})


// CLOSE NAV MENU
const closeNav = () => {
    menu.style.display = 'none';
    menuClose.style.display = 'none';
    menuOpen.style.display = 'inline-block';
    
}

menuClose.addEventListener('click', closeNav)