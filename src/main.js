import Vue from 'vue'
import App from './App.vue'
import VueApexCharts from 'vue-apexcharts'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import storageHelper from 'storage-helper'

import Home from './components/Home';
import Profile from './components/Profile';
import Scrims from './components/Scrims';
import ScrimProfile from './components/ScrimProfile';
import PatchInfo from './components/PatchInfo';
import ByPatch from './components/ByPatch';
import ByChamp from './components/ByChamp';
import HeatMaps from './components/HeatMaps';
import ScrimPlayer from './components/ScrimPlayer';
import Protected from './components/Protected';

Vue.use(Vuetify)
Vue.use(VueRouter);
Vue.use(VueApexCharts)
Vue.config.productionTip = false

Vue.component('apexchart', VueApexCharts)

const routes = [
  { path: '/', component: Home, name:"Home", meta: {requiresAuth: true} },
  { path: '/profile/:u', component: Profile, name:"Profile", meta: {requiresAuth: true} },
  { path: '/scrims', component: Scrims, name:"Scrims", meta: {requiresAuth: true} },
  { path: '/scrimProfile/:u', component: ScrimProfile, name:"ScrimProfile", meta: {requiresAuth: true} },
  { path: '/protected', component: Protected, name:"Protected" },
  { path: '/patchInfo', component: PatchInfo, name:"PatchInfo", meta: {requiresAuth: true} },
  { path: '/byPatch/:p', component: ByPatch, name:"ByPatch", meta: {requiresAuth: true} },
  { path: '/byChamp/:c', component: ByChamp, name:"ByChamp", meta: {requiresAuth: true} },
  { path: '/scrimPlayer/:p', component: ScrimPlayer, name:"ScrimPlayer", meta: {requiresAuth: true} },
  { path: '/heatMaps/:m', component: HeatMaps, name:"HeatMaps", meta: {requiresAuth: true} },
]

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!storageHelper.getItem('user-password')) next('/protected')
    else next()
  } else next()
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
