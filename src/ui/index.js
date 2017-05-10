var Vue = require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)

// Vue.component('ui-service-config', require('./services/config.vue'))
// Vue.component('ui-service-nsi-config', require('./services/nsi/config.vue'))

Vue.component('fragment-sidebar', require('./fragments/sidebar.vue'))
Vue.component('fragment-navbar', require('./fragments/navbar.vue'))
Vue.component('fragment-nsi-services', require('./fragments/nsi-services.vue'))
Vue.component('fragment-sidebar-item', require('./fragments/sidebar-item.vue'))

var router = new VueRouter({
  routes: require('./routes')
})

var layout = require('./layout.vue')

layout.router = router

var ui = new Vue(layout)

module.exports = ui
