import MeetupCover from '../03-MeetupCover/MeetupCover.js';
import MeetupDescription from '../02-MeetupDescription/MeetupDescription.js';
import MeetupAgenda from '../05-MeetupAgenda/MeetupAgenda.js';
import MeetupInfo from '../04-MeetupInfo/MeetupInfo.js';
import { getImageUrlByImageId } from './data.js';

const MeetupView = {
  name: 'MeetupView',

  getImageUrlByImageId,

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  computed: {
    date() {
      return new Date(this.meetup.date);
    },
  },

  components: {
    MeetupDescription,
    MeetupAgenda,
    MeetupCover,
    MeetupInfo,
  },

  template: `
    <div>
     <meetup-cover :title="meetup.title" :link="$options.getImageUrlByImageId(meetup.imageId)" />
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description" />

            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda" />
          </div>
          <div class="meetup__aside">
            <meetup-info :date="date" :place="meetup.place" :organizer="meetup.organizer" />
          </div>
        </div>
      </div>
    </div>`,
};

export default MeetupView;
