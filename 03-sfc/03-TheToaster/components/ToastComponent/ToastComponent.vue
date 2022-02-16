<template>
  <transition name="slide-fade">
    <div class="toast" :class="`toast_${params.type}`">
      <app-icon v-if="params.type === 'success'" class="toast__icon" icon="check-circle" />
      <app-icon v-if="params.type === 'error'" class="toast__icon" icon="alert-circle" />
      <span>{{ params.message }}</span>
    </div>
  </transition>
</template>

<script>
import AppIcon from '../AppIcon';

export default {
  name: 'ToastComponent',

  components: { AppIcon },

  props: {
    params: {
      type: Object,
      required: true,
      validator: (value) => ['success', 'error'].includes(value.type),
    },
  },
};
</script>

<style>
@import './slide-fade.css';

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast_success {
  color: var(--green);
}

.toast_error {
  color: var(--red);
}
</style>
