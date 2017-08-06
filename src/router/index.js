import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
const Register = resolve => require(['@/components/user/register.vue'], resolve);
const Login = resolve => require(['@/components/user/login.vue'], resolve);
const UserCenterHome = resolve => require(['@/components/userCenter/userCenterHome.vue'], resolve);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/register'
    },
    {
      path: '/register',
      name: 'Rigster',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/userCenterHome',
      name: 'userCenterHome',
      component: UserCenterHome,
    }
  ],
});
