import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
const Register = resolve => require(['@/components/user/register.vue'], resolve);
const Login = resolve => require(['@/components/user/login.vue'], resolve);
import UserCenter from '@/components/userCenter/userCenter.vue';
const UserCenterHome = resolve => require(['@/components/userCenter/userCenterHome.vue'], resolve);
const SecureSetting = resolve => require(['@/components/secureSetting.vue'], resolve);
const Widthdraw = resolve => require(['@/components/withdraw/withdraw.vue'], resolve);
const Recharge = resolve => require(['@/components/recharge/recharge.vue'], resolve);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/user'
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/userCenter/',
      component: UserCenter,
      children: [
        {
          path: 'home',
          component: UserCenterHome,
        },
        {
          path: 'secureSetting',
          component: SecureSetting,
        },
      ]
    },
    
    {
      path: '/withdraw',
      component: Widthdraw,
    },
    {
      path: '/recharge',
      component: Recharge,
    }
  ],
});
