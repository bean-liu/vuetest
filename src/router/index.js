import Vue from 'vue'
import VueRouter from 'vue-router'
import BookUpdate from '../views/BookUpdate.vue'
import BookManage from '../views/BookManage'
import AddBook from '../views/AddBook'

import Index from "../views/Index";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "图书管理",
    component: Index,
    redirect: "/bookManage",
    children: [
      {
        show: true,
        path: '/bookManage',
        name: "查询图书",
        component: BookManage
      },
      {
        show: true,
        path: '/addBook',
        name: "添加图书",
        component: AddBook
      },
      {
        path: '/update',
        show: false,
        name: "编辑图书",
        component: BookUpdate
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
