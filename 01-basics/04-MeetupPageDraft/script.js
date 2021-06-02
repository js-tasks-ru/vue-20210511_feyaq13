import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов пунктов программы
 */
const agendaItemDefaultTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

function fetchDataMeetup() {
  return fetch(`${API_URL}/meetups/${MEETUP_ID}`).then((response) => response.json());
}

new Vue({

  data() {
    return {
      rawDataMeetup: null,
      agendaItemDefaultTitles,
      agendaItemIcons,
    };
  },

  computed: {
    meetup() {
      return {
        title: this.rawDataMeetup.title,
        desc: this.rawDataMeetup.description,
        image: this.rawDataMeetup.imageId && {
          '--bg-url': `url(${getImageUrlByImageId(this.rawDataMeetup.imageId)})`,
        },

        dateNum: {
          day: new Date(this.rawDataMeetup.date).getDate(),
          month: new Date(this.rawDataMeetup.date).getMonth() + 1,
          year: new Date(this.rawDataMeetup.date).getFullYear(),
        },

        dateHuman: new Date(this.rawDataMeetup.date).toLocaleString(navigator.language, {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),

        organizer: this.rawDataMeetup.organizer,
        agenda: this.rawDataMeetup.agenda,
        place: this.rawDataMeetup.place,
      };
    },
  },

  mounted() {
    fetchDataMeetup().then((meetups) => {
      this.rawDataMeetup = meetups;
    });
  },
}).$mount('#app');
