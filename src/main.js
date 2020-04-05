import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import AppRouterView from './components/AppRouterView.vue';
import AppRouterLink from './components/AppRouterLink.vue';

import { plugin, definition } from './plugins/index'

import 'uikit/dist/css/uikit.min.css'
import './assets/dashboard.css'

Vue.config.productionTip = false

Vue.use(plugin);
Vue.prototype.$plugin = definition;

var appRouterPlugin = {
  install(vue) {
    let currentRoute = 'main';
    let listeners = [];
    let history = [];

    vue.prototype.$appRouter = new Proxy({
      route(to) {
        currentRoute = to;
        [...listeners].forEach(handler => {
          handler(to);
        })
      },
      onRoute(handler) {
        if (typeof(handler) === 'function') {
          listeners.push(handler);
        }
      }
    }, {
      get: function (target, name) {
        if (name === 'currentRoute') {
          return currentRoute;
        }
        return target[name];
      },
      set: function (target, name, value) {
        history.push(value);
        target[name] = value;
      }
    })
  }
}

Vue.use(appRouterPlugin);

Vue.component('app-router-view', AppRouterView);
Vue.component('app-router-link', AppRouterLink);

UIkit.use(Icons);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
