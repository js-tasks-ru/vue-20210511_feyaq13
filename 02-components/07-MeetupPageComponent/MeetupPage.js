import MeetupView from '../06-MeetupView/MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

const MeetupPage = {
  name: 'MeetupPage',

  fetchMeetup,

  data() {
    return {
      meetup: null,
    };
  },

  async created() {
    this.meetup = await fetchMeetup(MEETUP_ID);
  },

  components: {
    MeetupView,
  },

  template: `
    <div>
      <meetup-view v-if="meetup" :meetup="meetup" />
    </div>
  `,
};

export default MeetupPage;
