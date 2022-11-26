<template>
  <form class="form meetup-form" @submit.prevent="emitSubmit">
    <div class="meetup-form__content">
      <fieldset class="form-section">
        <FormGroup label="Название">
          <AppInput v-model="localMeetup.title"></AppInput>
        </FormGroup>
        <FormGroup label="Дата">
          <DateInput v-model="localMeetup.date" />
        </FormGroup>
        <FormGroup label="Место">
          <AppInput v-model="localMeetup.place"></AppInput>
        </FormGroup>
        <FormGroup label="Описание">
          <AppInput v-model="localMeetup.description" multiline rows="3"></AppInput>
        </FormGroup>
        <FormGroup label="Изображение">
          <image-uploader v-model="localMeetup.imageId" />
        </FormGroup>
      </fieldset>
      <h3 class="form__section-title">Программа</h3>
      <MeetupAgendaItemForm
        v-for="agenda in localMeetup.agenda"
        :key="agenda.id"
        class="mb-3"
        :agenda-item="agenda"
        @update:agendaItem="updateAgendaItem(agenda.id, $event)"
        @remove="removeAgendaItem(agenda.id)"
      />

      <div class="form-section_append">
        <button type="button" data-test="addAgendaItem" @click="addMeetup">+ Добавить этап программы</button>
      </div>
    </div>

    <div class="meetup-form__aside">
      <div class="meetup-form__aside_stick">
        <!-- data-test атрибуты используются для поиска нужного элемента в тестах, не удаляйте их -->
        <button class="button button_secondary button_block" type="reset" data-test="cancel" @click="emitCancel">
          Отмена
        </button>
        <button class="button button_primary button_block" type="submit" data-test="submit">
          {{ submitText }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import FormGroup from './FormGroup';
import AppInput from './AppInput';
import DateInput from './DateInput';
import MeetupAgendaItemForm from './MeetupAgendaItemForm.vue';
import ImageUploader from './ImageUploader';
import cloneDeep from 'lodash/cloneDeep';

let lastId = -1;
function createAgendaItem() {
  return {
    id: lastId--,
    startsAt: '00:00',
    endsAt: '00:00',
    type: 'other',
    title: null,
    description: null,
    speaker: null,
    language: null,
  };
}

export default {
  name: 'MeetupForm',

  components: {
    AppInput,
    FormGroup,
    DateInput,
    ImageUploader,
    MeetupAgendaItemForm,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },

    submitText: {
      type: String,
      default: 'Submit',
    },
  },

  data() {
    return {
      localMeetup: cloneDeep(this.meetup),
    };
  },

  methods: {
    addMeetup() {
      const agenda = createAgendaItem();
      const lastAgenda = this.localMeetup.agenda[this.localMeetup.agenda.length - 1];
      if (lastAgenda) {
        agenda.startsAt = lastAgenda.endsAt;
      }
      this.localMeetup.agenda.push(agenda);
      this.emitAddAgendaItem();
    },

    updateAgendaItem(id, agenda) {
      const idx = this.localMeetup.agenda.findIndex((agenda) => agenda.id === id);
      this.localMeetup.agenda.splice(idx, 1, { ...agenda });
    },

    removeAgendaItem(id) {
      const idx = this.localMeetup.agenda.findIndex((agenda) => agenda.id === id);
      this.localMeetup.agenda.splice(idx, 1);
    },

    emitAddAgendaItem() {
      this.$emit('add', cloneDeep(this.localMeetup));
    },

    emitSubmit() {
      this.$emit('submit', cloneDeep(this.localMeetup));
    },

    emitCancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style scoped>
.meetup-form__aside {
  margin: 48px 0;
}

.meetup-form__aside_stick > .button {
  margin: 0 0 12px 0;
}

@media all and (min-width: 992px) {
  .meetup-form {
    display: flex;
    flex-direction: row;
  }

  .meetup-form__content {
    flex: 1 0 calc(100% - 320px);
  }

  .meetup-form__aside {
    flex: 1 0 320px;
    max-width: 320px;
    width: 100%;
    padding-left: 137px;
    margin: 0;
  }

  .meetup-form__aside_stick {
    position: sticky;
    top: 32px;
  }
}
</style>
