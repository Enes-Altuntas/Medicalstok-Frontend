import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f8c807a = () => interopDefault(import('..\\pages\\anounces.vue' /* webpackChunkName: "pages/anounces" */))
const _510f63fe = () => interopDefault(import('..\\pages\\discounts.vue' /* webpackChunkName: "pages/discounts" */))
const _3b2ed771 = () => interopDefault(import('..\\pages\\forget.vue' /* webpackChunkName: "pages/forget" */))
const _325832d6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _8046bf86 = () => interopDefault(import('..\\pages\\main.vue' /* webpackChunkName: "pages/main" */))
const _7291539c = () => interopDefault(import('..\\pages\\messages\\index.vue' /* webpackChunkName: "pages/messages/index" */))
const _7ca16bd5 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _36a3aeeb = () => interopDefault(import('..\\pages\\quotations.vue' /* webpackChunkName: "pages/quotations" */))
const _6b6f2e27 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _7f273ff7 = () => interopDefault(import('..\\pages\\registersup.vue' /* webpackChunkName: "pages/registersup" */))
const _327932db = () => interopDefault(import('..\\pages\\requisitions.vue' /* webpackChunkName: "pages/requisitions" */))
const _9e8bba62 = () => interopDefault(import('..\\pages\\suppliers\\index.vue' /* webpackChunkName: "pages/suppliers/index" */))
const _2acdf3b0 = () => interopDefault(import('..\\pages\\messages\\_id\\index.vue' /* webpackChunkName: "pages/messages/_id/index" */))
const _1a5e93ab = () => interopDefault(import('..\\pages\\suppliers\\_id\\index.vue' /* webpackChunkName: "pages/suppliers/_id/index" */))
const _1d2c437e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2f8c807a,
    name: "anounces"
  }, {
    path: "/discounts",
    component: _510f63fe,
    name: "discounts"
  }, {
    path: "/forget",
    component: _3b2ed771,
    name: "forget"
  }, {
    path: "/login",
    component: _325832d6,
    name: "login"
  }, {
    path: "/main",
    component: _8046bf86,
    name: "main"
  }, {
    path: "/messages",
    component: _7291539c,
    name: "messages"
  }, {
    path: "/profile",
    component: _7ca16bd5,
    name: "profile"
  }, {
    path: "/quotations",
    component: _36a3aeeb,
    name: "quotations"
  }, {
    path: "/register",
    component: _6b6f2e27,
    name: "register"
  }, {
    path: "/registersup",
    component: _7f273ff7,
    name: "registersup"
  }, {
    path: "/requisitions",
    component: _327932db,
    name: "requisitions"
  }, {
    path: "/suppliers",
    component: _9e8bba62,
    name: "suppliers"
  }, {
    path: "/messages/:id",
    component: _2acdf3b0,
    name: "messages-id"
  }, {
    path: "/suppliers/:id",
    component: _1a5e93ab,
    name: "suppliers-id"
  }, {
    path: "/",
    component: _1d2c437e,
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
