<template>
  <div class="send-code">
    <input placeholder="短信验证" type="text" />
     <C-button :size="size"
               :type="type"
               :disabled="start"
               :class="['btn', start ? 'btn-disabled' : '']"
               :style="{backgroundColor: bgcolor, color: color}"
    >
        {{tmpStr}}
    </C-button>
    </div>
</template>

<script type="text/babel">
    import CButton from './button.vue';
    export default {
        name: 'yd-sendcode',
        extends: CButton,
        data() {
            return {
                tmpStr: '获取短信验证码',
                timer: null,
                start: false,
                isLoading: false,
            }
        },
        props: {
            initStr: String,
            second: {
                default: 60,
                validator(val) {
                    return /^\d*$/.test(val);
                }
            },
            runStr: {
                type: String,
                default: '{%s}秒后重新获取'
            },
            resetStr: {
                type: String,
                default: '重新获取验证码'
            },
            value: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            run() {
              this.isLoading = true;
                let second = this.second;
                this.tmpStr = this.getStr(this.second);
                this.timer = setInterval(() => {
                    second--;
                    this.tmpStr = this.getStr(second);
                    second <= 0 && this.stop();
                }, 1000);
            },
            stop() {
                this.tmpStr = this.resetStr;
                this.$emit('input', false);
                clearInterval(this.timer);
            },
            getStr(second) {
                return this.runStr.replace(/\{([^{]*?)%s(.*?)\}/g, second);
            }
        },
        watch: {
            value(val) {
                this.start = val;
                val && this.run();
            },
            isLoading (val) {
              if (val) {
                // this.tmpStr = '正在加载中'
              }
            }
        },
        mounted() {
            if (this.initStr) this.tmpStr = this.initStr;
        },
        destroyed() {
            this.stop();
        },
        components: {
          CButton
        }
    }
</script>
<style lang="less">
.send-code {

  input,button {
    display: inline-block;
    width: 135px;
  }
  input {
    margin-right: 4px;
  }
  button {
    height: 44px;
  }
}
</style>