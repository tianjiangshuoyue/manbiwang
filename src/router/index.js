import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index/index.vue';
// 用户有关
const Register = resolve => require(['@/components/user/register.vue'], resolve);
const registerSuccess = resolve => require(['@/components/user/registerSuccess.vue'], resolve);
const Login = resolve => require(['@/components/user/login.vue'], resolve);
const forgetPassword = resolve => require(['@/components/user/forgetPassword.vue'], resolve);
const authenticate = resolve => require(['@/components/user/authenticate.vue'], resolve);
import UserCenter from '@/components/userCenter/userCenter.vue';
const UserCenterHome = resolve => require(['@/components/userCenter/userCenterHome.vue'], resolve);
const SecureSetting = resolve => require(['@/components/secureSetting.vue'], resolve);
// 提现
const Widthdraw = resolve => require(['@/components/withdraw/withdraw.vue'], resolve);
const notId = resolve => require(['@/components/withdraw/notId.vue'], resolve);
const rechargeWithdrawRecordList = resolve => require(['@/components/userCenter/rechargeWithdrawRecordList.vue'], resolve);

const Recharge = resolve => require(['@/components/recharge/recharge.vue'], resolve);
// 交易行情
const trade = resolve => require(['@/components/trade/trade.vue'], resolve);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index,
    },
    {
      path: '/trade',
      component: trade,
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/registerSuccess',
      component: registerSuccess,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/forgetPassword',
      component: forgetPassword,
    },
    {
      path: '/authenticate',
      component: authenticate,
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
        {
          path: 'withdraw',
          component: Widthdraw,
          children: [
            {
              path: 'notId',
              component: notId
            }

          ]
        },
        {
          path: 'rechargeWithdrawRecordList',
          component: rechargeWithdrawRecordList
        },
        {
          path: '/recharge',
          component: Recharge,
        }
      ]
    },
  ],
});
