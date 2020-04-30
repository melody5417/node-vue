import Vue from 'vue'
import VueRouter from 'vue-router'
import AdEdit from '../views/AdEdit'
import AdList from '../views/AdList'
import AdminUserEdit from '../views/AdminUserEdit'
import AdminUserList from '../views/AdminUserList'
import ArticleEdit from '../views/ArticleEdit'
import ArticleList from '../views/ArticleList'
import CategoryEdit from '../views/CategoryEdit'
import CategoryList from '../views/CategoryList'
import HeroEdit from '../views/HeroEdit'
import HeroList from '../views/HeroList'
import ItemEdit from '../views/ItemEdit'
import ItemList from '../views/ItemList'
import Login from '../views/Login'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { isPublic: true } // 路由元信息
  },
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
        props: true // 两个页面对应一个组件 加上props：true，表示把所有参数都注入到这个页面
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
        props: true // 两个页面对应一个组件 加上props：true，表示把所有参数都注入到这个页面
      }, {
        path: '/items/list',
        name: 'ItemList',
        component: ItemList
      }, {
        path: '/heros/create',
        component: HeroEdit
      }, {
        path: '/heros/edit/:id',
        component: HeroEdit,
        props: true // 两个页面对应一个组件 加上props：true，表示把所有参数都注入到这个页面
      }, {
        path: '/heros/list',
        component: HeroList
      }, {
        path: '/articles/create',
        component: ArticleEdit
      }, {
        path: '/articles/edit/:id',
        component: ArticleEdit,
        props: true
      }, {
        path: '/articles/list',
        component: ArticleList
      }, {
        path: '/ads/create',
        component: AdEdit
      }, {
        path: '/ads/edit/:id',
        component: AdEdit,
        props: true
      }, {
        path: '/ads/list',
        component: AdList
      }, {
        path: '/admin_users/create',
        component: AdminUserEdit
      }, {
        path: '/admin_users/edit/:id',
        component: AdminUserEdit,
        props: true
      }, {
        path: '/admin_users/list',
        component: AdminUserList
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

// 服务端只能对接口限制
// 客户端对路由进行限制 导航守卫
// 注册一个全局前置守卫
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }

  next()
})

export default router
