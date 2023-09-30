const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const menuActive = document.querySelector('menu')
    
    const toggleMenu = () => {
        menu.classList.toggle('active-menu');
    }

    menuActive.addEventListener('click', (e) => {
        if((e.target.matches('a') || e.target.classList == 'close-btn' ) && e.target.closest('.active-menu')) {
            toggleMenu();
        }
    })

    menuBtn.addEventListener('click', toggleMenu);
}

export default menu