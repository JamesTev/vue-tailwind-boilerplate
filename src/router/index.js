import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthPortal from '../views/AuthPortal.vue'

import {TokenService} from '../services/storage.service'

// lazy loading
const Profile = () => import(/* webpackChunkName: "social" */ '@/views/Profile.vue')

const Signup = () => import(/* webpackChunkName: "auth" */ '@/components/auth/Signup.vue')
const Login = () => import(/* webpackChunkName: "auth" */ '@/components/auth/Login.vue')

const Onboarding = () => import('@/views/Onboarding.vue')

import Home from '@/views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: AuthPortal,
    children: [
      {
        name: 'login',
        path: 'login',
        component: Login
      },
      {
        name: 'signup',
        path: 'signup',
        component: Signup
      }
    ]
  },
  {
    path: '/onboarding',
    name: 'onboarding',
    component: Onboarding
  },

  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
  ],
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '*', // make sure this is last - it will match anything not matched above
    name: 'default',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = !!TokenService.getToken()

  if(to.name==='auth' || to.name==='default'){
    if (loggedIn){
      next({name: 'home'})
    }else{
      next({name: 'login'})
    }
  }

  if(to.matched.some(record => record.meta.requiresAuth)){
    if(loggedIn){
      next()
    }else{
      next({
        name: 'login'
      })
    }
  }else{
    next()
  }
})
export default router;
