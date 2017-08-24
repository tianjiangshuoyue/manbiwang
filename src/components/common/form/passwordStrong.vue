
<template>
    <div>
        <p class="control input_container password-wrap" >
            <input v-if="passwordType == 'password'"
                name="password"
                type="password"
                :class="{'input': true, 'is-danger': errors.has('password') }"
                v-validate="'required|password'" 
                @input="passwordInput" 
                v-model="passwordValue"
                maxlength="20"
                placeholder="6-20位字母和数字" />
            <input v-if="passwordType == 'input'"
                type="input"
                @input="passwordInput" 
                :class="{'input': true, 'is-danger': errors.has('password') }"
                v-validate="'required|password'" 
                v-model="passwordValue"
                name="password"
                autocomplete="off"
                maxlength="20"
                placeholder="6-20位数字、字符">
            
            <i :class="['iconfont', passwordType == 'password' ? 'icon-see-close' : 'icon-see-show']"
                @click="changePassword">
            </i>
        </p>
        <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
        <div v-if="isPass" :class="['lnu_container', 'passwordStrongType', passwordStrongType]">
            <p class="low">弱</p>
            <p class="normal">中</p>
            <p class="strong">强</p>
        </div>
        <!-- <div class="valid_password_container" v-bind:class="{show_valid_password_container : valid_password }">
            <svg width="100%" height="100%" viewBox="0 0 140 100">
                <path class="tick" v-bind:class="{checked: valid_password }" d="M10,50 l25,40 l95,-70" />
            </svg>
        </div> -->
    </div>
</template>
<script>
/**
    @file 密码强度
    密码分数：1-5位，报错“密码至少6位字母、数字或符号”

6-10位 +1
11-16位 +3
16-20位 +5

包含 abcdefghijklmnopqrstuvwxyz 中任意1个 +2
包含 ABCDEFGHIJKLMNOPQRSTUVWZXY 中任意1个 +2
包含 `~!@#$%^&*()-_=+[{]}\|;:'",<.>/? 中任意1个 +2
包含 1234567890 中任意1个 +2

小于7分，弱
[7,10]，中
大于10分，强
 */
export default {
    props: ['password'],
    data() {
        return {
            passwordValue: this.password,
            passwordType: 'password',
            passwordStrongType: '',
            password_length: 0,
            passwordScore: 0,
            isPass: false, // 密码是否通过校验
            contains_lovercase: false,
            contains_number: false,
            contains_uppercase: false,
            lovercase_valid: '',
            valid_password_length: false,
            valid_password: false
        }
    },
    computed: {
        
    },
    watch: {
        passwordScore (score) {
            if (score == 5 || score == 6) {
                this.passwordStrongType = "low-wrap";
                
            } else  if (score > 6 && score < 11) {
                this.passwrodStrongType = "normal-wrap";
            } else if (score > 10 && score < 14) {
                this.passwordStrongType = 'strong-wrap';
            };
            this.isPass = (score > 4 && score < 14) ? true : false;
            
        }
    },
    methods: {
        changePassword() {
            this.passwordType = this.passwordType == 'password' ? 'input' : 'password';
        },
        passwordInput: function () {
            this.$emit('update:password', this.passwordValue);
            this.$emit('changePwd', this.passwordValue);
            this.passwordScore = 0;
            console.log('长度', this.password_length);
            // 长度校验π
            this.password_length = this.passwordValue.trim().length;
            // 密码长度6-20位

            this.valid_password_length = true;
            if (this.password_length > 5 && this.password_length < 11) {
                this.passwordScore = 1;
            } else if (this.password_length > 10 && this.password_length < 17) {
                this.passwordScore = 3;
            } else if (this.password_length > 15 && this.password_length < 21) {
                this.passwordScore = 5;
            } else {
                this.isPass = false;
                this.valid_password_length = false;
            }

            
            // 字符校验
            if (/[a-z]/.test(this.passwordValue)) {
                this.passwordScore += 2;
            };
            if (/[A-Z]/.test(this.passwordValue)) {
                this.passwordScore += 2;
            }
            if (/[0-9]/.test(this.passwordValue)) {
                this.passwordScore += 2;
            }

            // Check if the password is valid
            // if (this.contains_lovercase == true && this.contains_number == true) {
            //     this.valid_password = false;
            //     if (
            //         this.contains_uppercase == true &&
            //         this.valid_password_length == true
            //     )
            //         this.valid_password = true;
            // } else {
            //     this.valid_password = false;
            // }
        }
    }
}
</script>
<style lang="less" scoped>
.password_length {
    padding: 2px 10px;
    position: absolute;
    top: 50%;
    right: 10px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background: #FBD490;
    color: rgba(71, 87, 98, 0.8);
    border-radius: 4px;
    font-size: 13px;
    -webkit-transition: all .1s;
    transition: all .1s;
}

.valid_password_length {
    background: #00AD7C;
    color: rgba(255, 255, 255, 0.9);
}

.show_password_length {
    display: block;
}

.lnu_container {
    display: block;
    margin: 10px auto;
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.lnu_container p {
    width: 90px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    border-radius: 2px;
    background-color: #d9d9d9;
    
}

.passwordStrongType{
    // background-position: left !important;
    // color: rgba(255, 255, 255, 0.9) !important;
    color: #fff;
    
}
.low-wrap {
    .low {
        background-color: rgba(65, 130, 239, 0.4);
    }
}
.normal-wrap {
    .normal {
        background-color: rgba(65, 130, 239, 0.7);
    }
}
.strong-wrap {
    .strong {
        background-color: #4182ef;
    }
}
.valid_password_container {
    display: block;
    margin: 10px auto;
    border-radius: 4px;
    position: relative;
    background: #00AD7C;
    width: 20px;
    height: 20px;
    visibility: hidden;
    opacity: 0;
}

.show_valid_password_container {
    visibility: visible;
    opacity: 1;
}

.tick {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: white;
    stroke-width: 25;
    stroke-linecap: round;
    stroke-dasharray: 180;
    stroke-dashoffset: 180;
}

.checked {
    -webkit-animation: draw 0.5s ease forwards;
    animation: draw 0.5s ease forwards;
}

@-webkit-keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}

@keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}
</style>
