<template>
  <div id="app" class="wrapper bg-grey page">
    <div class="container">
      <pre><code>{{ meetup }}</code></pre>
      <meetup-form
        :meetup="meetup"
        submit-text="Сабмит"
        @add="handleAddItem"
        @submit="handleSubmit"
        @cancel="handleCancel"
      />
    </div>
  </div>
</template>

<script>
import MeetupForm from './components/MeetupForm';

export default {
  name: 'App',

  components: { MeetupForm },

  data() {
    return {
      meetup: {
        id: 0,
        title: '',
        description: '',
        imageId: null,
        date: '2021-02-03',
        place: '',
        agenda: [],
      },
    };
  },

  methods: {
    handleSubmit(meetup) {
      this.meetup = meetup;
    },

    handleAddItem(agendaItem) {
      this.meetup.agenda.push(agendaItem);
    },

    handleCancel() {
      alert('Cancel');
    },
  },
};
</script>

<style></style>
