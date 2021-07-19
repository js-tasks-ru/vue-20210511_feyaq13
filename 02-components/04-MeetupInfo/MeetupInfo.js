export default {
  name: 'MeetupInfo',

  props: {
    organizer: {
      required: true,
      type: String,
    },
    place: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: Date,
    },
  },

  computed: {
    dateHuman() {
      return this.date.toLocaleString(navigator.language, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    },
    dateNum() {
      return this.date.toISOString().split('T')[0];
    },
  },

  template: `
    <ul class="info-list">
      <li v-if="organizer">
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li v-if="place">
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li v-if="dateHuman || dateNum">
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="dateNum"> {{ dateHuman }}</time>
      </li>
    </ul>`,
};
