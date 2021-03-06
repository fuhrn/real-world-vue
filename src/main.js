import Vue from "vue";
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'nprogress/nprogress.css';
import Vuelidate from "vuelidate/src";
import DateFilter from "./filters/date";

Vue.filter('date', DateFilter)

const requireComponent = require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
      camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.use(Vuelidate)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
