<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'meetups' }">Митапы</router-link> |
      <router-link :to="{ name: 'form' }">Создать митап</router-link> |
      <router-link :to="{ name: 'login' }">Вход</router-link>
    </nav>
    <base-layout>
      <router-view class="container" />
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from './components/BaseLayout';
export default {
  name: 'App',
  components: { BaseLayout },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
#app {
  display: flex;
  flex-direction: column;
}
</style>
