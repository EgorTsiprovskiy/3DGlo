const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul > li > a');

    const heandleMenu = () => {
        menu.classList.toggle('active-menu');
    }

    menuBtn.addEventListener('click', heandleMenu);
    closeBtn.addEventListener('click', heandleMenu);

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', heandleMenu);
    }
    menuItems.forEach(menuItem => menuItem.addEventListener('click', heandleMenu));
}

export default menu