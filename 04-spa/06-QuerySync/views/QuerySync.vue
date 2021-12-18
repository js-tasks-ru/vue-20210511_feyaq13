<template>
  <meetups-view
    v-bind="query"
    @update:view="updateProp('view', $event)"
    @update:date="updateProp('date', $event)"
    @update:participation="updateProp('participation', $event)"
    @update:search="updateProp('search', $event)"
  />
</template>

<script>
import MeetupsView from '../components/MeetupsView';
import VueRouter from 'vue-router';
const { isNavigationFailure, NavigationFailureType } = VueRouter;
import { defaults } from '../constants';

export default {
  name: 'QuerySync',
  components: { MeetupsView },

  props: Object.keys(defaults),

  computed: {
    query() {
      return { ...this.$route.query };
    },
  },

  methods: {
    updateProp(prop, value) {
      const query = { ...this.query, [prop]: value };
      this.changeQuery(query);
    },

    changeQuery(query) {
      const routerParams = {
        path: this.$route.path,
        query: this.updateDefaults(query),
      };
      this.$router.push(routerParams).catch((err) => {
        if (!isNavigationFailure(err, NavigationFailureType.duplicated)) {
          throw err;
        }
      });
    },

    updateDefaults(query) {
      const updatedQuery = { ...query };

      Object.entries(updatedQuery).forEach(([key, value]) => {
        if (value === defaults[key]) {
          delete updatedQuery[key];
        }
      });
      return { ...updatedQuery };
    },
  },
};
</script>
