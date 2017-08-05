import { isPhone, isPassword } from './regex.js';

export default {
    mobile: {
        //  messages: {
        //       cn:(field, args) => field + '必须是11位手机号码',
        //   },
        //   validate: (value, args) => {
        //      return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
        //   }
        messages: {
            zh_CN: (field, args) => '请输入正确的手机号',
        },
        validate: isPhone
    },
    password: {
        //  messages: {
        //       cn:(field, args) => field + '必须是11位手机号码',
        //   },
        validate: (value, args) => {
             return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
        },
        messages: {
            zh_CN: (field, args) => '请输入正确的密码',
        },
        validate: isPassword
    }
}