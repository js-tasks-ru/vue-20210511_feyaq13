import { agendaItemIcons, agendaItemDefaultTitles } from './data.js';

const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    agendaTitle() {
      return this.agendaItem.title || agendaItemDefaultTitles[this.agendaItem.type];
    },

    agendaIcon() {
      const path = '/assets/icons/';
      const iconName = `${agendaItemIcons[this.agendaItem.type]}.svg`;
      return `${path}icon-${iconName}`;
    },
  },

  template: `
    <div class="meetup-agenda__item" v-if="agendaItem">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="agendaIcon" />
      </div>
      <div class="meetup-agenda__item-col"> {{ agendaItem.startsAt }} - {{ agendaItem.endsAt }} </div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title" v-html="agendaTitle"></h5>
        <p v-if="agendaItem.type === 'talk'">
          <span> {{ agendaItem.speaker }} </span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang"> {{ agendaItem.language }} </span>
        </p>
        <p v-if="agendaItem.description"> {{ agendaItem.description }}</p>
      </div>
    </div>`,
};

export default MeetupAgendaItem;
