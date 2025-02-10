import { gsap } from 'gsap';

function toggleMenu() {
    const menuItems = document.querySelectorAll('.dot');
    menuItems.forEach(item => {
        item.classList.toggle('disabled');
    });

    const menu = document.querySelector('.menu') as HTMLElement;

    if (menu.style.top === '0px') {
        gsap.to(menu, { top: '-100%', duration: 0.5 });
    } else {
        gsap.to(menu, { top: '0px', duration: 0.5 });
    }
}

export default toggleMenu;