import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b0624040 = () => interopDefault(import('..\\pages\\anounces.vue' /* webpackChunkName: "pages/anounces" */))
const _32409fac = () => interopDefault(import('..\\pages\\discounts\\index.vue' /* webpackChunkName: "pages/discounts/index" */))
const _91a44f52 = () => interopDefault(import('..\\pages\\forget.vue' /* webpackChunkName: "pages/forget" */))
const _141e30ef = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _7d5ababa = () => interopDefault(import('..\\pages\\main.vue' /* webpackChunkName: "pages/main" */))
const _58d80fe8 = () => interopDefault(import('..\\pages\\messages\\index.vue' /* webpackChunkName: "pages/messages/index" */))
const _fefaf0a2 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _b068665e = () => interopDefault(import('..\\pages\\quotations.vue' /* webpackChunkName: "pages/quotations" */))
const _389ce4e6 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _3302ded1 = () => interopDefault(import('..\\pages\\registersup.vue' /* webpackChunkName: "pages/registersup" */))
const _0bdd217e = () => interopDefault(import('..\\pages\\requisitions.vue' /* webpackChunkName: "pages/requisitions" */))
const _3f71bc35 = () => interopDefault(import('..\\pages\\suppliers\\index.vue' /* webpackChunkName: "pages/suppliers/index" */))
const _29f22730 = () => interopDefault(import('..\\pages\\discounts\\_id\\index.vue' /* webpackChunkName: "pages/discounts/_id/index" */))
const _910d06e4 = () => interopDefault(import('..\\pages\\messages\\_id\\index.vue' /* webpackChunkName: "pages/messages/_id/index" */))
const _2ce62bf6 = () => interopDefault(import('..\\pages\\suppliers\\_id\\index.vue' /* webpackChunkName: "pages/suppliers/_id/index" */))
const _4a768dd8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/anounces",
    component: _b0624040,
    name: "anounces"
  }, {
    path: "/discounts",
    component: _32409fac,
    name: "discounts"
  }, {
    path: "/forget",
    component: _91a44f52,
    name: "forget"
  }, {
    path: "/login",
    component: _141e30ef,
    name: "login"
  }, {
    path: "/main",
    component: _7d5ababa,
    name: "main"
  }, {
    path: "/messages",
    component: _58d80fe8,
    name: "messages"
  }, {
    path: "/profile",
    component: _fefaf0a2,
    name: "profile"
  }, {
    path: "/quotations",
    component: _b068665e,
    name: "quotations"
  }, {
    path: "/register",
    component: _389ce4e6,
    name: "register"
  }, {
    path: "/registersup",
    component: _3302ded1,
    name: "registersup"
  }, {
    path: "/requisitions",
    component: _0bdd217e,
    name: "requisitions"
  }, {
    path: "/suppliers",
    component: _3f71bc35,
    name: "suppliers"
  }, {
    path: "/discounts/:id",
    component: _29f22730,
    name: "discounts-id"
  }, {
    path: "/messages/:id",
    component: _910d06e4,
    name: "messages-id"
  }, {
    path: "/suppliers/:id",
    component: _2ce62bf6,
    name: "suppliers-id"
  }, {
    path: "/",
    component: _4a768dd8,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
