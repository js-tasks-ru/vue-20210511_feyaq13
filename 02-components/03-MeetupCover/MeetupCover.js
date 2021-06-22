const MeetupCover = {
  name: 'MeetupCover',
  props: {
    link: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  computed: {
    meetupCover() {
      const cover = { '--bg-url': `url(${this.link})` };
      return this.link ? cover : '';
    },
  },

  template: `
    <div class='meetup-cover' :style="meetupCover">
    <h1 class='meetup-cover__title'> {{ title }}</h1>
    </div>`,
};

export default MeetupCover;
