<template>
  <div class="page page_meetup-forms container">
    <h1>{{ title }}</h1>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormLayout',
  props: {
    title: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.page.page_meetup-forms {
  padding: 70px 0;
}

@media all and (max-width: 992px) {
  .page.page_meetup-forms {
    padding: 48px 0;
  }
}
</style>
