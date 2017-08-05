// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VeeValidate, { Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN.js'
import validateConfig from './assets/js/validate.config.js';
console.log('zh', zh_CN);
// Validator.extend('truthy', {
//   getMessage: field => 'The ' + field + ' value is not truthy.',
//   validate: value => !! value
// });
console.log('config', validateConfig);
Validator.extend('mobile', validateConfig.mobile);
Validator.extend('password', validateConfig.password);
Validator.extend('sendCode', validateConfig.sendCode);
console.dir(Validator);
Validator.addLocale(zh_CN);
const config = {
  locale: 'zh_CN', 
};
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VeeValidate, config);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
