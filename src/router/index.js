import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/test',
    component: () => import('@/views/home/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/home/index'),
        meta: { title: 'dashboard.menu', icon: 'dashboard' }
      },
      {
        path: '/hash',
        name: 'hash',
        component: () => import('@/views/home/hash'),
        meta: { title: 'dashboard.menu', icon: 'dashboard' }
      },
      {
        path: '/bull',
        name: 'bull',
        component: () => import('@/views/home/bull'),
        meta: { title: 'dashboard.menu', icon: 'dashboard' }
      },
      {
        path: '/comb',
        name: 'comb',
        component: () => import('@/views/home/comb'),
        meta: { title: 'dashboard.menu', icon: 'dashboard' }
      },
      {
        path: '/champion',
        name: 'champion',
        component: () => import('@/views/home/champion'),
        meta: { title: 'dashboard.menu', icon: 'dashboard' }
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/home/mine'),
        meta: { title: 'dashboard.menu', icon: 'dashboard' }
      }
    ]
  },

  // 注单管理
  // {
  //   path: '/bet',
  //   component: Layout,
  //   redirect: '/bet/bet',
  //   name: 'bet',
  //   meta: { title: 'bet.menu', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'bet',
  //       name: 'Bet',
  //       component: () => import('@/views/bet/lottery'),
  //       meta: { title: 'bet.lottery.menu', icon: 'table' }
  //     },
  //     {
  //       path: 'draw',
  //       name: 'Draw',
  //       component: () => import('@/views/bet/draw'),
  //       meta: { title: 'bet.draw.menu', icon: 'tree' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
