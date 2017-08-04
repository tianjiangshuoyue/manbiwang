<template>
    <button :disabled="disabled" :class="classes" :style="{backgroundColor: bgcolor, color: color}">
        <slot></slot>
    </button>
</template>

<script type="text/babel">
    // import {isColor} from '../../../utils/assist';
    export default {
        name: 'yd-button',
        props: {
            disabled: Boolean,
            type: {
                validator(value) {
                    return ['primary', 'danger', 'warning', 'hollow', 'disabled'].indexOf(value) > -1;
                },
                default: 'primary'
            },
            size: {
                validator(value) {
                    return ['small', 'large'].indexOf(value) > -1;
                }
            },
            bgcolor: {
                validator(value) {
                    if(!value) return true;
                    return isColor(value);
                }
            },
            color: {
                validator(value) {
                    if(!value) return true;
                    return isColor(value);
                }
            }
        },
        computed: {
            classes() {
                let s = this.size == 'large' ? 'btn-block' : 'btn';
                let b = 'btn-' + this.type;
                if (this.disabled) {
                    b = 'btn-disabled';
                }
                if (this.bgcolor) {
                    b = '';
                }
                return s + ' ' + b;
            }
        },
        methods: {
          isColor (value) {
          const colorReg = /^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/;
          const rgbaReg = /^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/;
          const rgbReg = /^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;

          return colorReg.test(value) || rgbaReg.test(value) || rgbReg.test(value);
      }
        }
    }
</script>

<style lang="less">
    // @import '../../../styles/components/button.less';
</style>