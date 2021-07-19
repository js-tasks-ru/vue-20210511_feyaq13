import Vue from './vendor/vue.esm.browser.js';

new Vue({
  data() {
    return {
      counter: 0,
      inputValue: '',
    };
  },

  methods: {
    countClicks() {
      this.counter += 1;
    },
  },
}).$mount('#app');
