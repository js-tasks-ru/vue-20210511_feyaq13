<template>
  <div
    :class="{
      'input-group_icon': Boolean($slots['left-icon']) || Boolean($slots['right-icon']),
      'input-group_icon-left': Boolean($slots['left-icon']),
      'input-group_icon-right': Boolean($slots['right-icon']),
    }"
    class="input-group"
  >
    <slot name="left-icon" />
    <component
      v-bind="$attrs"
      :is="inputType"
      ref="input"
      :value.prop="value"
      class="form-control"
      :class="{ 'form-control_rounded': rounded, 'form-control_sm': small }"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      v-on="listeners"
    />
    <slot name="right-icon" />
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input',
  },

  props: {
    value: String,
    rounded: Boolean,
    small: Boolean,
    multiline: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    listeners() {
      const listeners = { ...this.$listeners };
      delete listeners.input;
      return listeners;
    },

    inputType() {
      return this.multiline ? 'textarea' : 'input';
    },
  },
};
</script>

<style scoped>
.form-control {
  padding: 12px 16px;
  height: 52px;
  border-radius: 8px;
  border: 2px solid var(--blue-light);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: var(--body-color);
  transition: 0.2s all;
  background-color: var(--white);
  outline: none;
  box-shadow: none;
}

.form-control::placeholder {
  font-weight: 400;
  color: var(--blue-2);
}

.form-control:focus {
  border-color: var(--blue);
}

textarea.form-control {
  width: 100%;
  min-height: 211px;
}

.form-control.form-control_rounded {
  border-radius: 26px;
}

.form-control.form-control_sm.form-control_rounded {
  border-radius: 22px;
}

.form-control.form-control_sm {
  padding: 8px 16px;
  height: 44px;
  border-radius: 4px;
}

.input-group {
  position: relative;
}

.input-group .form-control {
  width: 100%;
}

.input-group.input-group_icon .form-control {
  padding-left: 50px;
}

.input-group.input-group_icon .icon {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.input-group.input-group_icon.input-group_icon-left .icon:first-child {
  left: 16px;
}

.input-group.input-group_icon.input-group_icon-right .icon:last-child {
  right: 16px;
}
</style>
