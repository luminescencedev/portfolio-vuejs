import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createMemoryHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Project from './components/Project.vue';
import Contact from './components/Contact.vue';
import Loader from './components/Loader.vue';
import { gsap } from 'gsap';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/project', component: Project },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const transition = document.createElement('div');
transition.id = 'transition';
transition.className = 'h-[120vh] w-[100vw] fixed top-0 left-0 bg-[#09090b] z-[1000]';

const pathName = document.createElement('div');
    pathName.id = 'pathName';
    pathName.className = 'font-[Dirtyline] text-9xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white';

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
  } else {
    app?.appendChild(transition);

    if (from.path === '/') {
      pathName.textContent = 'Home';
    } else {
      pathName.textContent = from.path.slice(1).charAt(0).toUpperCase() + from.path.slice(2);
    }
    transition?.appendChild(pathName);

    gsap.from(transition, {
      y: '-100%',
      duration: 0.5,
      ease: 'power2.inOut',
    });

    gsap.to(transition, {
      duration: 1.8,
      y: '-10%',
      ease: 'power2.inOut',
      onComplete: () => {
        next();
        transition?.removeChild(pathName);
      },
    });
  }
});

router.afterEach((from) => {
    
    if (from.path === '/') {
      pathName.textContent = 'Home';
    } else {
      pathName.textContent = from.path.slice(1).charAt(0).toUpperCase() + from.path.slice(2);
    }
    transition?.appendChild(pathName);
    gsap.from(transition, {
        duration: 1,
        y: '-10%',
        ease: 'power2.inOut',
    });

    gsap.to(transition, {
        duration: 2,
        y: '100%',
        ease: 'power2.inOut',
        onComplete: () => {
        transition?.removeChild(pathName);
        transition?.remove();
        },
    });
});

const app = createApp(App);
app.use(router);
app.mount('#app');