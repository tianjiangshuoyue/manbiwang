// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VeeValidate, { Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN.js'
import validateConfig from './assets/js/validate.config.js';
import Filter from './assets/js/filter.js';
import VueClipboard from 'vue-clipboard2';
console.log('zh', zh_CN);
// Validator.extend('truthy', {
//   getMessage: field => 'The ' + field + ' value is not truthy.',
//   validate: value => !! value
// });
console.log('config', validateConfig);
Validator.extend('mobile', validateConfig.mobile);
Validator.extend('password', validateConfig.password);
Validator.extend('sendCode', validateConfig.sendCode);
console.log(23);
console.dir(Validator);
Validator.addLocale(zh_CN);
const config = {
  locale: 'zh_CN',
};
const dictionary = {
  zh_CN: {
    attributes: {
      mobile: '手机号',
      sendCode: '短信验证',
      password: '密码'
    }
  },};
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VeeValidate, config);
Validator.updateDictionary(dictionary);
Vue.use(Filter);
Vue.use(VueClipboard);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
