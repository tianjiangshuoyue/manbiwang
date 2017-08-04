
<template>
    <div>
        <div class="input_container">
            <input type="password"
                 @input="passwordInput" v-model="password" placeholder="6-20位字母和数字" />
            <span v-bind:class="{ valid_password_length: valid_password_length , show_password_length: isPass}"
                class="password_length">
                {{passwordScore}}
            </span>
        </div>
        <div v-if="isPass" class="lnu_container">
            <p v-bind:class="{ lovercase_valid: passwordScore < 7 }">弱</p>
            <p v-bind:class="{ number_valid: passwordScore > 6 && passwordScore < 10 }">中</p>
            <p v-bind:class="{ uppercase_valid: passwordScore > 10 }">强</p>
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
    data() {
        return {
            password: null, // 用户输入的密码
            password_length: 0,
            passwordScore: 0,
            isPass: false, // 密码是否通过校验
            contains_lovercase: false,
            contains_number: false,
            contains_uppercase: false,
            valid_password_length: false,
            valid_password: false
        }
    },
    methods: {
        passwordInput: function () {
            this.passwordScore = 0;
            console.log('长度', this.password_length);
            // 长度校验
            this.password_length = this.password.trim().length;
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

            debugger;
            // 字符校验
            if (/[a-z]/.test(this.password)) {
                this.passwordScore += 2;
            };
            if (/[A-Z]/.test(this.password)) {
                this.passwordScore += 2;
            }
            if (/[0-9]/.test(this.password)) {
                this.passwordScore += 2;
            }
            
            this.contains_lovercase = /[a-z]/.test(this.password);
            this.contains_number = /\d/.test(this.password);
            this.contains_uppercase = /[A-Z]/.test(this.password);

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
<style>
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
    display: none;
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
    width: 320px;
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.lnu_container p {
    width: 100px;
    height: auto;
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    border-radius: 2px;
    color: rgba(71, 87, 98, 0.8);
    /* background: -webkit-linear-gradient(left, #00AD7C 50%, #eee 50%);
    background: linear-gradient(to right, #00AD7C 50%, #eee 50%); */
    background-size: 201% 100%;
    background-position: right;
    -webkit-transition: background .3s;
    transition: background .3s;
}

.lovercase_valid,
.number_valid,
.uppercase_valid {
    background-position: left !important;
    color: rgba(255, 255, 255, 0.9) !important;
}

.lovercase_valid {
    background-color: rgba(65, 130, 239, 0.4);
}
.number_valid {
    background-color: rgba(65, 130, 239, 0.7);
}
.uppercase_valid {
    background-color: #4182ef;
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
