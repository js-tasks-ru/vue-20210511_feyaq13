import Vue from './vendor/vue.esm.browser.js';

new Vue({
  fetchMeetupHeader(currentInputChecked) {
    return fetch(`https://course-vue.javascript.ru/api/meetups/${currentInputChecked}`).then((response) =>
      response.json(),
    );
  },

  data() {
    return {
      countInputs: 5,
      currentInputChecked: '',
      currentMeetupName: '',
    };
  },

  watch: {
    currentInputChecked(newValue) {
      this.$options.fetchMeetupHeader(newValue).then((data) => (this.currentMeetupName = data.title));
    },
  },
}).$mount('#app');
