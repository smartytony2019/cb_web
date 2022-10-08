import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import * as cookies from '@/utils/cookies'
import consts from '@/utils/consts'
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
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/test',
    component: Layout,
    redirect: '/',
    children: [{
      path: '/',
      component: () => import('@/views/record/b'),
      meta: {
        title: '',
        requireAuth: false
      }
    }]
  },

  {
    path: '/login',
    component: Layout,
    redirect: '/',
    children: [{
      path: '/',
      component: () => import('@/views/login'),
      meta: {
        title: '',
        requireAuth: false
      }
    }]
  },

  {
    path: '/help',
    component: Layout,
    redirect: '/',
    children: [{
      path: '/',
      component: () => import('@/views/help'),
      meta: {
        title: '',
        requireAuth: false
      }
    }]
  },

  {
    path: '/setting',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        component: () => import('@/views/setting'),
        meta: {
          title: '',
          requireAuth: true
        }
      },
      {
        path: '/loginPassword',
        component: () => import('@/views/setting/loginPassword'),
        meta: {
          title: '',
          requireAuth: true
        }
      },
      {
        path: '/withdrawPassword',
        component: () => import('@/views/setting/withdrawPassword'),
        meta: {
          title: '',
          requireAuth: true
        }
      }
    ]
  },

  {
    path: '/offline',
    component: Layout,
    redirect: '/',
    children: [{
      path: '/',
      component: () => import('@/views/offline'),
      meta: {
        title: '',
        requireAuth: false
      }
    }]
  },

  {
    path: '/record/flow',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/record/flow',
        component: () => import('@/views/record/flow'),
        meta: {
          title: '',
          requireAuth: true
        }
      },
      {
        path: '/record/bet/index',
        component: () => import('@/views/record/bet/index'),
        meta: {
          title: '',
          requireAuth: true
        }
      },
      {
        path: '/record/bet/list',
        component: () => import('@/views/record/bet/list'),
        meta: {
          title: '',
          requireAuth: true
        }
      },
      {
        path: '/record/bet/detail',
        component: () => import('@/views/record/bet/detail'),
        meta: {
          title: '',
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        component: () => import('@/views/home'),
        meta: {
          title: '',
          requireAuth: false
        }
      },
      {
        path: '/hash',
        name: 'hash',
        component: () => import('@/views/game/hash'),
        meta: {
          title: '',
          requireAuth: false
        }
      },
      {
        path: '/bull',
        name: 'bull',
        component: () => import('@/views/game/bull'),
        meta: {
          title: '',
          requireAuth: false
        }
      },
      {
        path: '/comb',
        name: 'comb',
        component: () => import('@/views/game/comb'),
        meta: {
          title: '',
          requireAuth: false
        }
      },
      {
        path: '/champion',
        name: 'champion',
        component: () => import('@/views/game/champion'),
        meta: {
          title: '',
          requireAuth: false
        }
      },
      {
        path: '/bjl',
        name: 'bjl',
        component: () => import('@/views/game/bjl'),
        meta: {
          title: '',
          requireAuth: false
        }
      }
    ]
  },

  // 活动
  {
    path: '/activity',
    name: 'Activity',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/activity'),
        meta: {
          title: '',
          requireAuth: false
        }
      },
      {
        path: '/activity/detail',
        component: () => import('@/views/activity/detail'),
        meta: {
          title: '',
          requireAuth: false
        }
      }
    ]
  },

  // 推广
  {
    path: '/promote',
    name: 'Promote',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/promote'),
        meta: {
          title: '',
          requireAuth: true
        }
      }
    ]
  },

  // 我的
  {
    path: '/mine',
    name: 'Mine',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/mine'),
        meta: {
          title: '',
          requireAuth: true
        }
      },

      {
        path: '/mine/finance',
        component: () => import('@/views/mine/finance'),
        meta: {
          title: '',
          requireAuth: true
        }
      }
    ]
  },

  // 存款
  {
    path: '/deposit',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/deposit'),
        meta: {
          title: '',
          requireAuth: true
        }
      }
    ]
  },

  // 取款
  {
    path: '/withdraw',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/withdraw'),
        meta: {
          title: '',
          requireAuth: true
        }
      }
    ]
  },

  // 钱包
  {
    path: '/wallet',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/wallet'),
        meta: {
          title: '',
          requireAuth: true
        }
      }
    ]
  },

  // 兑换
  {
    path: '/exchange',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/exchange'),
        meta: {
          title: '',
          requireAuth: true
        }
      }
    ]
  },

  // 资金划转
  {
    path: '/transfer',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/transfer'),
        meta: {
          title: '',
          requireAuth: true
        }
      }
    ]
  },

  // 报表
  {
    path: '/report',
    component: Layout,
    children: [
      {
        path: '/report/financial',
        component: () => import('@/views/report/financial'),
        meta: {
          title: '',
          requireAuth: true
        }
      },
      {
        path: '/report/promotion',
        component: () => import('@/views/report/promotion'),
        meta: {
          title: '',
          requireAuth: true
        }
      },
      {
        path: '/report/bet',
        component: () => import('@/views/report/bet'),
        meta: {
          title: '',
          requireAuth: true
        }
      }
    ]
  },

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

// 这里设置路由拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断是否需要登录验证
    const token = cookies.get(consts.tokenKey) // 这里是登录页面缓存的token
    if (token !== undefined && token !== '') { // 判断token等于时候就跳转路由
      next()// 这个跳转是上面路由跳转
    } else { // token不一样时候就返回登录页面
      next({
        path: '/login' // 返回登录界面
        // query: {redirect: to.fullPath}
      })
    }
  } else {
    // 如果不需要登录权限就直接跳转到该路由
    next()
  }
})

export default router
