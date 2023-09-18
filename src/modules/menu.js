const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    // const closeBtn = menu.querySelector('.close-btn');
    // const menuItems = menu.querySelectorAll('ul > li > a');

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
    // // //closeBtn.addEventListener('click', heandleMenu);

    // for (let i = 0; i < menuItems.length; i++) {
    //     menuItems[i].addEventListener('click', heandleMenu);
    // }
    // menuItems.forEach(menuItem => menuItem.addEventListener('click', heandleMenu));
}

export default menu