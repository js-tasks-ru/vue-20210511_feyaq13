<template>
  <list-view :items="cats">
    <template #default="{ item: cat }">
      <list-view-card :key="cat.id" tag="article" :cover="cat.cover" :title="cat.title">
        <ul class="info-list">
          <li class="info-list__item">{{ cat.description }}</li>
          <li class="info-list__item">Cute cat</li>
          <li class="info-list__item">Cats are always cute</li>
        </ul>
      </list-view-card>
    </template>
  </list-view>
</template>

<script>
import ListView from './ListView';
import ListViewCard from './ListViewCard';

export default {
  name: 'CatsList',

  components: { ListViewCard, ListView },

  data() {
    return {
      cats: Array.from(Array(7), (_, id) => ({
        id: id,
        title: `Cat ${id}`,
        cover: `https://cataas.com/cat?height=218&id=${id}`,
        description: `Cat Number ${id}`,
      })),
    };
  },
};
</script>

<style scoped>
.info-list {
  margin: 0;
  padding: 0;
}

.info-list__item {
  list-style-type: none;
  position: relative;
  padding-left: 0;
  font-size: 18px;
  line-height: 28px;
  margin: 0 0 8px;
}

.info-list__item:last-child {
  margin: 0;
}
</style>
