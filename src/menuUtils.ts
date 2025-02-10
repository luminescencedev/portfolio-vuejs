import { gsap } from 'gsap';

function toggleMenu() {
    const menuItems = document.querySelectorAll('.dot');
    menuItems.forEach(item => {
        item.classList.toggle('disabled');
    });

    const menu = document.querySelector('.menu') as HTMLElement;
    const texts = document.querySelectorAll('.text-animate');

    if (menu.style.top === '0px') {
        texts.forEach(text => {
            gsap.to(text, {
                opacity: 0,
                duration: 1,
                ease: 'power1.inOut',
                onComplete: () => {
                    gsap.to(menu, {
                        top: '-100%',
                        duration: 0.5,
                        onComplete: () => {
                            document.dispatchEvent(new CustomEvent('menuClosed'));
                        }
                    });
                }
            });
        });
    } else {
        document.dispatchEvent(new CustomEvent('menuOpened'));
        gsap.to(menu, {
            top: '0px',
            duration: 0.5,
            onComplete: () => {
                texts.forEach(text => {
                    gsap.to(text, {
                        opacity: 1,
                        duration: 1,
                        ease: 'power1.inOut',
                    });
                });
            }
        });
    };


}

export default toggleMenu;