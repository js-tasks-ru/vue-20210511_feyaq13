<template>
  <base-button class="button_secondary" v-bind="$props" v-on="$listeners">
    <slot />
  </base-button>
</template>

<script>
import BaseButton from './BaseButton';
export default {
  name: 'SecondaryButton',
  components: { BaseButton },
  inheritAttrs: false,
  props: {
    ...BaseButton.props,
  },
};
</script>

<style scoped>
.button_secondary {
  background-color: var(--white);
  border-color: var(--blue);
  color: var(--blue);
}

.button_secondary:hover {
  border-color: var(--blue-light);
}
</style>
