import { gsap } from 'gsap';

function toggleMenu(isRouteChanging: boolean) {

  const menuItems = document.querySelectorAll('.dot');
  menuItems.forEach(item => {
    item.classList.toggle('disabled');
  });

  const menu = document.querySelector('.menu') as HTMLElement;

  const timeoutDuration = isRouteChanging ? 1500 : 1000;


  if (menu.style.top === '0px') {
    setTimeout(() => {
      gsap.to(menu, {
        top: '-100%',
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          document.dispatchEvent(new CustomEvent('menuClosed'));
          
        }
      });
    }, timeoutDuration);
  } else {
    document.dispatchEvent(new CustomEvent('menuOpened'));
    gsap.to(menu, {
      top: '0px',
      duration: 1,
      ease: 'power2.inOut',
    });
  }
}

export default toggleMenu;