<template>
  <main class="base-layout">
    <TheHeader />
    <slot></slot>
    <TheFooter />
  </main>
</template>

<script>
import TheFooter from './TheFooter';
import TheHeader from './TheHeader';
export default {
  name: 'BaseLayout',
  components: { TheFooter, TheHeader },
};
</script>

<style scoped>
.base-layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

main {
  flex: 1 0 auto;
}
</style>
