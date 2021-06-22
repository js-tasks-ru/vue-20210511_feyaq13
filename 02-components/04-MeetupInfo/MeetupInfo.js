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
      return new Date(this.date).toLocaleString(navigator.language, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    },
    dateNum() {
      return new Date(this.date).toISOString().split('T')[0];
    },
  },

  template: `
    <ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="dateNum"> {{ dateHuman }}</time>
      </li>
    </ul>`,
};
