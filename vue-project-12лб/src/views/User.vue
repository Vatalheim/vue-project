<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const userId = ref(route.params.id);

watch(() => route.params.id, (newId) => {
  userId.value = newId;
});


import { onBeforeRouteUpdate } from 'vue-router';
onBeforeRouteUpdate((to) => {
  userId.value = to.params.id;
});
</script>

<template>
  <h1>ID пользователя: {{ route.params.id }}</h1>
</template>