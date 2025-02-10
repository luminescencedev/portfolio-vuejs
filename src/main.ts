import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
import Contact from './components/Contact.vue'
import Loader from './components/Loader.vue'
import { gsap } from 'gsap'


const routes = [
  { path: '/', component: Home },  
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/project', component: Project },

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


const transition = document.createElement('div');
transition.id = 'transition';
transition.style.height = '100vh';
transition.style.width = '100vw'; 
transition.style.position = 'fixed';
transition.style.top = '0';
transition.style.left = '0';
transition.style.background = '#000';

router.beforeEach((from, to, next) => {
    const app = document.querySelector('#app');
    const isInialized = app?.classList.contains('initialized');

    if (!isInialized) {
        app?.classList.add('initialized');
        const loaderElement = document.createElement('div');
        loaderElement.id = 'loader';
        app?.appendChild(loaderElement);
        createApp(Loader).mount('#loader');
        next();

    } else  {
        app?.appendChild(transition);

        gsap.from('#transition', {
        y: '-100%',
        duration: 0.5,
        ease: 'power2.inOut',
    });

        gsap.to('#transition', {
            duration: 1.5,
            y: 0,
            ease: 'power2.inOut',
            onComplete: () => {
                next();
            }
        });
    }
});

router.afterEach(() => {
    gsap.from('#transition', {
        duration: 0.5,
        y: 0,
        ease: 'power2.inOut',
    });

    gsap.to('#transition', {
        duration: 1.5,
        y: '100%',
        ease: 'power2.inOut',
        onComplete: () => {
            transition?.remove();
        }
    });
});


const app = createApp(App)
app.use(router)
app.mount('#app')
