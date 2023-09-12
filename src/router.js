import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import NotFound from './views/not-found'
import Services from './views/services'
import Contact from './views/contact'
import DownloadCode from './views/download-code'
import LandingPage from './views/landing-page'
import About from './views/about'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
    },
    {
      name: 'Services',
      path: '/services',
      component: Services,
    },
    {
      name: 'Contact',
      path: '/contact',
      component: Contact,
    },
    {
      name: 'Download-Code',
      path: '/download-code',
      component: DownloadCode,
    },
    {
      name: 'Landing-Page',
      path: '/',
      component: LandingPage,
    },
    {
      name: 'About',
      path: '/about',
      component: About,
    },
  ],
})
