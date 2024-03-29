import Vue from 'vue';
import Router from 'vue-router';

/* Layout */
import Layout from '@/views/layout/Layout.vue';
import Landing from '@/views/auth/Landing.vue';

/* Router Modules */
import authRouter from './modules/auth';
import errorsRouter from './modules/errors';
import permissionRouter from './modules/permission';
import vuetifyRouter from './modules/vuetify';
import nestedRouter from './modules/nested';
import componentsRouter from './modules/components';

Vue.use(Router);

/** note: sub-menu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 */

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its
 *                                child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
 */

export const constantRoutes = [{
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [{
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
    }]
},
{
    path: '/landing',
    alias: '/land',
    component: Landing,
    hidden: true
},
{
    path: '/dashboard',
    alias: '/dash',
    component: Layout,
    children: [{
        path: '/dashboard',
        component: () => import('@/views/components/Dashboard/index'),
        name: 'Dashboard',
        // eslint-disable-next-line
            meta: {
            title: 'route.dashboard',
            icon: 'dashboard',
            noCache: true,
            affix: true
        }
    }]
},
{
    path: '/dashboard',
    alias: '/dash',
    component: Layout,
    children: [{
        path: '/documentation',
        component: () => import('@/views/components/Documentation'),
        name: 'Documentation',
        // eslint-disable-next-line
            meta: {
            title: 'route.documentation',
            icon: 'subject',
            noCache: true,
            affix: true
        }
    }]
},
{
    path: '/dashboard',
    alias: '/dash',
    component: Layout,
    children: [{
        path: '/guide',
        component: () => import('@/views/components/Guide'),
        name: 'Guide',
        // eslint-disable-next-line
            meta: {
            title: 'route.guide',
            icon: 'near_me',
            noCache: true,
            affix: true
        }
    }]
},
errorsRouter,
...authRouter
];

export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
});

export const asyncRoutes = [
    /** When your routing table is too long, you can split it into small modules */
    permissionRouter,
    vuetifyRouter,
    nestedRouter,
    ...componentsRouter,
    // chartsRouter,
    {
        path: '*',
        redirect: '/error/404',
        hidden: true
    }
];
