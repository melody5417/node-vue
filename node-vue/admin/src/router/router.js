import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import CategoryEdit from "../views/CategoryEdit"
import CategoryList from "../views/CategoryList"
import ItemEdit from "../views/ItemEdit"
import ItemList from "../views/ItemList"

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
      }, {
        path: '/items/create',
        name: 'ItemCreate',
        component: ItemEdit
      }, {
        path: '/items/edit/:id',
        name: 'ItemEdit',
        component: ItemEdit,
        props: true     // 两个页面对应一个组件 加上props：true，表示把所有参数都注入到这个页面
      }, {
        path: '/items/list',
        name: 'ItemList',
        component: ItemList
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
