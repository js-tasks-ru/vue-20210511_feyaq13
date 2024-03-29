<template>
  <component :is="tag" v-bind="$attrs" class="meetups-list__item" v-on="$listeners">
    <div class="meetups-list__col">
      <div class="meetups-list__cover" :style="cover ? `--bg-url: url('${cover}')` : ''">
        <h5>{{ title }}</h5>
      </div>
    </div>
    <div class="meetups-list__col">
      <div class="meetups-list__description">
        <span v-if="badge" class="meetups-list__badge" :class="{ 'meetups-list__badge--success': badgeSuccess }"
          >{{ badge }}
        </span>

        <slot />
      </div>
    </div>
  </component>
</template>

<script>
export default {
  name: 'ListViewCard',
  inheritAttrs: false,

  props: {
    title: String,
    cover: {
      type: String,
    },

    badge: String,
    badgeSuccess: Boolean,
    tag: {
      default: 'div',
    },
  },
};
</script>

<style scoped>
.meetups-list__item {
  text-decoration: none;
  color: inherit;
  position: relative;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  transition: box-shadow ease 0.2s;
}

.meetups-list__item:hover {
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.24);
}

.meetups-list__item > .meetups-list__col {
  flex: 1 0 50%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.meetups-list__cover {
  --bg-url: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url);
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  color: var(--white);
  overflow: hidden;
  position: relative;
  min-height: 218px;
}

.meetups-list__description {
  padding: 50px;
  border-left: 5px solid var(--blue);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.meetups-list__badge {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: var(--blue);
  display: flex;
  flex-direction: row;
  padding: 4px 12px;
  background-color: var(--blue-extra);
}

.meetups-list__badge.meetups-list__badge--success {
  color: var(--green);
  background-color: var(--green-light);
}

@media all and (max-width: 992px) {
  .meetups-list__item {
    flex-direction: column;
  }

  .meetups-list__item > .meetups-list__col {
    flex: 1 0 100%;
  }

  .meetups-list__description {
    padding: 40px 24px 32px;
  }
}
</style>
