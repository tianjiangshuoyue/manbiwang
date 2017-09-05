<template>
  <transition name="vodal-fade">
    <div v-show="show" tabindex="-1" :style="style" :class="['vodal', className]" @keyup.esc="show && $emit('hide')">
      <div class="vodal-mask" v-if="mask" @click="$emit('hide')" />
      <transition :name="`vodal-${animation}`">
        <div class="vodal-dialog" v-show="show" :style="dialogStyle">
          <span class="vodal-close" v-if="closeButton" @click="$emit('hide')" />
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'vodal',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    width: {
      type: Number,
      default: 320
    },
    height: {
      type: Number,
      default: 240
    },
    duration: {
      type: Number,
      default: 300
    },
    measure: {
      type: String,
      default: 'px'
    },
    animation: {
      type: String,
      default: 'zoom'
    },
    mask: {
      type: Boolean,
      default: true
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    style() {
      return {
        animationDuration: `${this.duration}ms`
      };
    },
    dialogStyle() {
      return {
        width: this.width + this.measure,
        height: this.height + this.measure,
        animationDuration: `${this.duration}ms`
      }
    }
  },
  watch: {
    show(show) {
      show && this.$nextTick(() => {
        this.$el.focus();
      })
    }
  }
}
</script>
<style>
/* -- common -- */
.vodal,
.vodal-mask {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
}

.vodal {
    position: fixed;
}

.vodal-mask {
    position: absolute;
    background: rgba(0, 0, 0, .3);
}

.vodal-dialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 101;
    padding: 0  0 20px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
}
.vodal-title {
  box-sizing: border-box;
  padding: 20px 20px;
  box-shadow: 0 1px 0 0 #e7ecf0;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: #222222;
}
.vodal-content {
  padding: 20px 20px 0;
}
.vodal-close {
    position: absolute;
    cursor: pointer;
    top: 16px;
    right: 16px;
    width: 16px;
    height: 16px;
    line-height: 2;
}

.vodal-close:before,
.vodal-close:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #999;
    border-radius: 100%;
    -webkit-transition: background .2s;
    transition: background .2s;
}

.vodal-close:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.vodal-close:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.vodal-close:hover:before,
.vodal-close:hover:after {
    background: #333;
}

/* -- fade -- */
@-webkit-keyframes vodal-fade-enter {
    from {
        opacity: 0;
    }
}

@keyframes vodal-fade-enter {
    from {
        opacity: 0;
    }
}

.vodal-fade-enter-active {
    -webkit-animation: vodal-fade-enter both ease-in;
    animation: vodal-fade-enter both ease-in;
}

@-webkit-keyframes vodal-fade-leave {
    to {
        opacity: 0
    }
}

@keyframes vodal-fade-leave {
    to {
        opacity: 0
    }
}

.vodal-fade-leave-active {
    -webkit-animation: vodal-fade-leave both ease-out;
    animation: vodal-fade-leave both ease-out;
}
/* -- zoom -- */
@-webkit-keyframes vodal-zoom-enter {
    from {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

@keyframes vodal-zoom-enter {
    from {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

.vodal-zoom-enter-active {
    -webkit-animation: vodal-zoom-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: vodal-zoom-enter both cubic-bezier(0.4, 0, 0, 1.5);
}

@-webkit-keyframes vodal-zoom-leave {
    to {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

@keyframes vodal-zoom-leave {
    to {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

.vodal-zoom-leave-active {
    -webkit-animation: vodal-zoom-leave both;
    animation: vodal-zoom-leave both;
}
</style>