// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

import VueResource from 'vue-resource'
Vue.use(VueResource);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

Vue.http.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcyYmYwOTkxOTA1MGIyNGQ5ZDliZDUzNzUxZmNhNDQwYWExYWRlMjk2MWFlYzljMGZmMjc0NTA4NmU2YzJjMGJiMTI1YjAzMDQyZDRiZmE1In0.eyJhdWQiOiIxIiwianRpIjoiNzJiZjA5OTE5MDUwYjI0ZDlkOWJkNTM3NTFmY2E0NDBhYTFhZGUyOTYxYWVjOWMwZmYyNzQ1MDg2ZTZjMmMwYmIxMjViMDMwNDJkNGJmYTUiLCJpYXQiOjE0ODM3NzU1NzgsIm5iZiI6MTQ4Mzc3NTU3OCwiZXhwIjoxNzk5MzA4Mzc4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Bs4_f-ib-qB1Qi4ySvK6HSd3TI2d5tnRuXx8rIN1md4BM4Y0Wqti6YgWCyW1G4gOrBP4NQCmEyMv1Ko55gcq_-zv0oGBH7SzMEruuHBc7dYyTATuS1Y4Jbpm7TUsSx3xrEDza56gTKWSRcIVjZcGHT49HEQswj4wjLBb_xd8vrl9Xh9wterI8gplVX68uMDQqYRDgK1S5sFqL80UUcqNQToknydPvVDqAE22kPIICDhWneL9T8-gzmek4hIQZtUkP1TbpFSwp9Bg8sIbBPtyE5lmYA2tXUhsZwh6elSJ67nRLUN0KX7FD9-YdjOgGLRc8tiG3y44DQCoj3HtSNe2aAV8fFtMMbXuCL6ooiqF7I3ItDCMOM1YmwUkD3mEnCYhf_H_tcpZ47BhsFz9BLEzvkE67cNSHre7zSLfYJgX7b9w1RIUMEElY0J0GZ3j-tEMdJBrRM-mXm9xHLWW1ryCMvlILasZpUFJ1P8sdEHQyKauaAnePAnMP6CCYt3_9JokYP7daM1SZIC8dRbe3FR6GOYdv05-IWv6cNOOY7egrSVJTIzGgocItcJIKXJjFmEfOOFCtwXNg8ZCZQe9-1vdRtUAHT5c4Wi0I0-coQAkPY7BiCFcOQDCVyOMYY7dXM8kh1r2MV0LFgVY1NobWA5cc4fFhOkqyvvMST1pL5KwMxM';


import Index from './components/Index'
import Category from './components/Category'
import List from './components/List'
import Show from './components/Show'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import AddressList from './components/AddressList'
import NewAddress from './components/NewAddress'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/list/:categoryId',
    name: 'list',
    component: List
  },
  {
    path: '/show/:productId',
    name: 'show',
    component: Show
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/address_list',
    name: 'address_list',
    component: AddressList
  },
  {
    path: '/new_address',
    name: 'new_address',
    component: NewAddress
  },
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

const app = new Vue({
  router
}).$mount('#app')
