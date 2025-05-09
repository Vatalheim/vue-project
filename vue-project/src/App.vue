<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentId = ref(route.params.id || '123') // По умолчанию 123

// Следим за изменениями ID в URL
watch(() => route.params.id, (newId) => {
  if (newId) currentId.value = newId
})
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/about">О нас</router-link> |
      <router-link to="/contact">Контакты</router-link> |
      <router-link :to="'/user/' + currentId">Пользователь (ID {{ currentId }})</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template> 

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
