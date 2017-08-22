/**
 * 正则(主要用于校验表单)
 */
export default {
  isPassword (str) { // password
    return /^([0-9a-zA-Z]){6,20}$/.test(str);
  },
  isPhone (str) {
    return /^1[3|4|5|7|8][0-9]\d{4,8}$/.test(str);
  }
}
/**
 * 是不是银行卡卡号
 * @return {Boolean} [返回true代表是银行卡号,否则为false]
 */
export function isBankNumber (str) {
  return /\d{16,19}/.test(str);
}


/**
 * 是否是新规范密码
 * @param  {String}  str [description]
 * @return {Boolean}     [description]
 */
export function isNewPassword (str) {
  return /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,20}$/.test(str);
}
export function yearSalary (str) { // 年薪
  return /^[0-9]{4,8}$/.test(str);
}
/**
 * 是否是密码Other
 * @return {Boolean} [description]
 */
export function isPasswordOther (str) {
  return /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,20}$/.test(str);
}
export function isEmail (email) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test($.trim(email));
}
/**
 * 是否是com|cn|net结尾的邮箱
 */
export function isCommonEmail (email) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.com|cn|net$/.test($.trim(email));
}
export function isPostCode (str) { // 是不是邮政编码
  return /[0-9]\d{5}(?!\d)/.test(str)
}
/**
 * 是否是整万数字
 */
export function isTenMillions (str) {
  const value = !(Number(str) % 10000);
  return value;
}
/**
 * 是否是整千数字
 */
export function isThousand (str) {
  const value = !(Number(str) % 1000);
  return value;
}
/**
 * 是否是整百数字
 */
export function isHundredth (str) {
  const value = !(Number(str) % 100);
  return value;
}
/**
 * 字符的长度
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
export function strLen (str) {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 256) {
      len += 2;
    } else {
      len++;
    }
  }
  return len;
}
/**
 * 验证是不是中文字符
 */
export function isChinese (str) {
  return /^[\u4e00-\u9fa5]+$/i.test($.trim(str));
}
/**
 * 验证字符的位数
 * @return {[boolean]} [description]
 */
export function checkLength (str) {
  return /[0-9]|[a-z][A-Z]{6,20}/.test(str);
}
/**
 * 验证QQ
 */
export function checkQQ (str) {
  return /^[1-9][0-9]{3,8}$/.test(str);
}


/**
 * 验证带有区号的固定电话
 * @param  int telareafixed 带有区号的固定电话
 * @return boolean           格式正确返回true,否则返回false
 */
export function checkTelareafixed (telareafixed) {
  return /^(0\d{2,3})-?(\d{7,8})$/.test(telareafixed);
}
/**
 * 验证用户的固定电话的区号
 * @param  int telarea 用户的固定电话的区号
 * @return boolean           格式正确返回true,否则返回false
 */
export function checkTelarea (telarea) {
  return /^0[0-9]{2,3}$/.test(telarea);
}
/**
 * 验证用户的固定电话的号码
 * @param  int telnum 用户的固定电话的号码
 * @return boolean           格式正确返回true,否则返回false
 */
export function checkTelnum (telnum) {
  return /^[2-9][0-9]{6,7}$/.test(telnum);
}
/**
 * 检查身份证是否格式正确
 * @param  string id 身份证号
 * @return boolean    格式正确返回true,否则返回false
 */
export function checkcardId (id) {
  return /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(id);
}

export function isAddrFifty (address) { // 验证是不是地址
  return /^[\-0-9a-zA-Z\u4e00-\u9fa5]{2,50}$/.test(address);
}

export function isAddrStr (address) {
  return /^[0-9a-zA-Z\u4e00-\u9fa5]{2,50}$/.test(address) && strLen(address) <= 50;
  
}
/**
 * 检查用户名是否是真实姓名
 * @param  string userName 用户名
 * @return boolean          格式正确返回true,否则返回false
 */
export function isUserName (userName) {
  return /^[a-zA-Z\u4e00-\u9fa5\·\•]{2,15}$/.test(userName);
}
/**
 * 检查是否为姓名（不包含英文）
 */
export function isUserNameAuth (userName) {
  return /^[\u4e00-\u9fa5\·\•]{2,20}$/.test(userName);
}
export function isAreaNum (areaNum) {
  return /^(0\d{2,3})$/.test(areaNum);
}
/**
 * [isAddress 校验是不是地址]
 * @param  {[type]}  address [地址]
 */
export function isAddress (address) {
  return /^[0-9a-zA-Z\u4e00-\u9fa5-]{2,35}$/.test(address);
}
/**
 * [isCompanyName 是不是一家公司名称]
 * @param  {[string]}  Companyname [要校验的公司名称的字符串]
 * @return {Boolean}             [true则代表传过来的字符串是一家公司名称]
 */
export function isCompanyName (Companyname) {
  const len = Companyname.length
  const name = Companyname.split('');
  for (let i = 0; i < len; i++) {
    if (name[i] === '（' || name[i] === '）' || name[i] === '(' ||
        name[i] === ')' || name[i] === '.' || name[i] === '-' ||
        name[i] === '&' || (name[i] >= 'A' && name[i] <= 'Z') ||
        (name[i] >= 'a' && name[i] <= 'z') || this.isChinese(name[i])) {} else {
      return false;
    }
  }
  return true;
}
export function trimAll (str) {
  return str.replace(/\s+/g, '');
}
/*
 *判断是否是微信浏览器
 */
export function isWechatBrowser () {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true;
  } else {
    return false;
  }
}
/**
 * 判断是否是专业名称/职位
 * @param  {[type]}  specialName [description]
 * @return {Boolean}             [description]
 */
export function isSpecialName (specialName) {
  return /^[a-zA-Z\u4e00-\u9fa5\（\）\(\)\.\-\&]{2,}$/.test(specialName)
}
/**
 * 验证公司注册号
 * @param  {[type]}  registrationNo [description]
 * @return {Boolean}                [description]
 */
export function isRegistrationNo (registrationNo) {
  return /^([0-9a-zA-Z]{15})([0-9a-zA-Z]{3})?$/.test(registrationNo)
}