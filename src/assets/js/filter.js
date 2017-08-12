export default{
  install(Vue) {
    Vue.filter('currency', (cash)=> {
      if (typeof cash == 'undefined') return;
      if (cash.toString().indexOf('.') == -1) return cash + '.00';
      if (cash.toString().indexOf('.') == cash.toString().length - 2) return cash + '0';
      return cash;
    });
  }
}
