<template>
  <div class="toasts">
    <toast-component v-for="t in toasts" v-show="t.visible" :key="t.index" :params="t" />
  </div>
</template>

<script>
import ToastComponent from './ToastComponent/ToastComponent';
import { ToastSuccess, ToastError } from './ToastComponent/Toast';

const DELAY = 5000;

export default {
  name: 'TheToaster',

  components: { ToastComponent },

  data() {
    return {
      toasts: [],
    };
  },

  methods: {
    startShowToast(toast, message) {
      this.toasts.push({
        message,
        ...toast,
      });
      setTimeout(() => this.toasts.shift(), DELAY);
    },

    error(message) {
      this.startShowToast(new ToastError(), message);
    },

    success(message) {
      this.startShowToast(new ToastSuccess(), message);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
