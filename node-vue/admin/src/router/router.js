import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import CategoryEdit from "../views/CategoryEdit"
import CategoryList from "../views/CategoryList"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/categories/create',
        name: 'CategoryCreate',
        component: CategoryEdit
      }, {
        path: '/categories/edit/:id',
        name: 'CategoryEdit',
        component: CategoryEdit,
        props: true     // 两个页面对应一个组件 加上props：true，表示把所有参数都注入到这个页面
      }, {
        path: '/categories/list',
        name: 'CategoryList',
        component: CategoryList
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
