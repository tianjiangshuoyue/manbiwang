import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
const Register = resolve => require(['@/components/user/register.vue'], resolve);
const Login = resolve => require(['@/components/user/login.vue'], resolve);
const UserCenter = resolve => require(['@/components/userCenter/userCenter.vue'], resolve);
const UserCenterHome = resolve => require(['@/components/userCenter/userCenterHome.vue'], resolve);
const SecureSetting = resolve => require(['@/components/secureSetting.vue'], resolve);
const Widthdraw = resolve => require(['@/components/withdraw/withdraw.vue'], resolve);
const Recharge = resolve => require(['@/components/recharge/recharge.vue'], resolve);
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
      path: '/userCenter',
      components: UserCenter,
      children: [
        {
          path: '/userCenter/home',
          component: UserCenterHome,
        },
      ]
    },
    {
      path: '/secureSetting',
      name: 'secureSetting',
      component: SecureSetting,
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: Widthdraw,
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: Recharge,
    }
  ],
});
