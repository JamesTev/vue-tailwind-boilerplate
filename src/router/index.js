import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthPortal from '../views/AuthPortal.vue'
import Dashboard from '../views/Dashboard.vue'

import {TokenService} from '../services/storage.service'

// lazy loading
const Shop = () => import(/* webpackChunkName: "group-commerce" */ '@/views/Shop.vue')
const Partners = () => import(/* webpackChunkName: "group-commerce" */ '@/views/Partners.vue')
const Allotment = () => import(/* webpackChunkName: "group-allotment" */ '@/views/Allotment.vue')
const AllotmentDetail = () => import(/* webpackChunkName: "group-allotment" */ '@/components/allotment/AllotmentDetail.vue')
const PickAndGoQR = () => import(/* webpackChunkName: "group-pickngo" */ '@/views/PickAndGoQR.vue')
const PickAndGo = () => import(/* webpackChunkName: "group-pickngo" */ '@/views/PickAndGo.vue')
const PickAndGoCheckout = () => import('@/components/marketplace/PickAndGoCheckout.vue')
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
    path: '/pickngo/code',
    name: 'pickAndGoQR',
    component: PickAndGoQR,
  },
  {
    path: '/pickngo/:vendorId',
    name: 'pickAndGo',
    component: PickAndGo,
    children: [
      {
        name: 'pickAndGoCheckout',
        path: 'checkout',
        component: PickAndGoCheckout
      }
    ]
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        name: 'home',
        path: 'home',
        component: Home
      },
    {
      name: 'explore',
      path: 'explore',
      component: Shop
    },
    {
      name: 'partners',
      path: 'partners',
      component: Partners
    },
    {
      name: 'allotments',
      path: 'allotments',
      component: Allotment
    },
    {
      name: 'allotmentDetail',
      path: 'allotments/:identifier',
      component: AllotmentDetail
    },
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
    component: Dashboard,
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
