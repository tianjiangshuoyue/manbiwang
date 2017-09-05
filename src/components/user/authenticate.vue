<template>
    <div>
        <vodal  :width="440" :height="357+61" :show="show1" animation="rotate" @hide="show = false">
            <header class="vodal-title">实名认证-L1</header>
            <div class="vodal-content">
                <el-form :rules="rules" ref="authenticateForm" :model="form" label-width="100px">
                    <el-form-item label="姓名：" prop="name">
                        <el-input v-model="form.name" placeholder="您的真实姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号：" prop="idcard">
                        <el-input v-model="form.idcard" placeholder="您的身份证号"></el-input>
                    </el-form-item>
                </el-form>
            </div>
           
            <form class=" form inline">
                <!-- <ul>
                    <li>
                        <label class="label" for="mobile">姓名:</label>
                        <p v-if="step == 1">
                            <input v-validate="'required'" name="username" type="text" v-model="mobile" placeholder="您的真实姓名">
                        </p>
                        <p v-else>{{ mobile }}</p>
                    </li>
                    <li v-if="step == 3">
                        <label class="label" for="mobile">身份证号</label>
                        <p>
                            <input :class="{'input': true, 'is-danger': errors.has('mobile') }" name="mobile" type="text" placeholder="您的身份证号">
                            <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
                        </p>
                    </li>
                </ul> -->
                

            </form>
            <footer>
                <button id="submit-idcard" v-if="step == 1"
                    @click="validateLogin('authenticateForm')"
                    type="button" class="btn large long">确定</button>
                <p class="tip">请务必使用您本人信息。因使用他人信息造成任何损失，满币网概不负责。</p>
            </footer>
        </vodal>
        <vodal v-if="step == 2" :width="440" :height="357+61" :show="show2" animation="rotate" @hide="show = false">
            <header class="vodal-title">实名认证-L1</header>
            <form class="vodal-content form">
                <ul>
                    <li>
                        <label class="label" for="mobile">姓名:</label>
                        <p v-if="step == 1">
                            <input v-validate="'required'" name="username" type="text" v-model="mobile" placeholder="您的真实姓名">
                            <!-- <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span> -->
                        </p>
                        <p v-else>{{ mobile }}</p>
                    </li>
                    <li v-if="step == 3">
                        <label class="label" for="mobile">身份证号</label>
                        <p>
                            <input :class="{'input': true, 'is-danger': errors.has('mobile') }" name="mobile" type="text" placeholder="您的身份证号">
                            <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
                        </p>
                    </li>
                </ul>
                <button v-if="step == 1" @click="validateLogin" type="button" class="btn large long">确定</button>
                <p class="tip">请务必使用您本人信息。因使用他人信息造成任何损失，满币网概不负责。</p>
                <!-- <footer class="item">
                <router-link to="/register" class="left btn text">新用户注册</router-link>
                <router-link to="/" class="right btn text">忘记密码</router-link>
            </footer> -->
            </form>
        </vodal>
        <vodal :width="440" :height="357+61" :show="step == 3" animation="rotate" @hide="showThree = false">
            <header class="vodal-title">实名认证-L2</header>
            <div class="vodal-content">
                <section id="pic-wrap">
                    <div id="pic-front">
                        <h3>身份证照片:</h3>
                        <div class="pic-list">
                            <section></section>
                            <section></section>
                        </div>
                    </div>
                    <div id="pic-hand">
                        <h3>手持身份证<br>
                            照片:</h3>
                        <div class="pic-list">
                            <section></section>
                            <section></section>
                        </div>
                    </div>
                    
                </section>
                <p id="risk-tip">请下载<a>《风险揭示声明》</a>，并打印签字，左手持身份证，右手持“声明”完成拍照（如图所示）。</p>
            </div>
            
            <footer>
                <button  type="button" class="btn large long">确定</button>
            </footer>
        </vodal>
    </div>
</template>
<script>
/**
@file:实名认证弹框
 */
export default {
    data() {
        return {
            form: {
                name: '',
                idcard: ''
            },
            step: 1,
            show1: true,
            show2: false,
            showThree: true,
            mobile: '',
            rules: {
                name: [
                     {required: true, message: '请输入姓名', trigger: 'blur'},
                    {min: 19, max: 19, message: '请输入正确的姓名', trigger: 'blur'}
                    
                ],
                idcard: [
                    {required: true, message: '请输入身份证号', trigger: 'blur'},
                    {min: 19, max: 19, message: '身份证19位', trigger: 'blur'}
                ]
            }
        }
    }, methods: {
        validateLogin (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
        }
    }
}
</script>
<style scoped lang="less">
.tip {
    margin-top: 10px;
    color: #ff4033;
}
#submit-idcard {
    margin-top: 40px;
    font-size: 16px;
}
footer {
    width: 280px;
    margin: 0 auto;
    p {
        text-align: left;
        font-size: 12px;
    }
}
#pic-wrap {
    >div {
        display: flex;
        h3 {
            width: 74px;
            margin-right: 20px;
            text-align: right;
            font-size: 14px;
            font-weight: normal;
        }
    }
}
.pic-list {
    >section {
        display: inline-block;
        width: 128px;
        height: 96px;
        background-color: #f2f2f2;
    }
}
#risk-tip {
    width: 266px;
    margin-left: 94px;
    text-align: left;
    font-size: 12px;
}
</style>
