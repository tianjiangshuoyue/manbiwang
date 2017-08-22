import validate from './regex.js';

export default {
    mobile: {
        //  messages: {
        //       cn:(field, args) => field + '必须是11位手机号码',
        //   },
        //   validate: (value, args) => {
        //      return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
        //   }
        messages: {
            zh_CN: (field, args) => '请输入正确手机号',
        },
        validate: validate.isPhone
    },
    password: {
        //  messages: {
        //       cn:(field, args) => field + '必须是11位手机号码',
        //   },
        validate: (value, args) => {
             return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
        },
        messages: {
            zh_CN: (field, args) => '密码错误',
        },
        validate: validate.isPassword
    },
    sendCode: {
        //  messages: {
        //       cn:(field, args) => field + '必须是11位手机号码',
        //   },
        validate: (value, args) => {
            return /\d{6}/.test(value);
        },
        messages: {
            zh_CN: (field, args) => '请输入正确的验证码',
        },
    }
}