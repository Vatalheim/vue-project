<template>
  <div class="page posts">
    <h1 class="text-3xl font-bold mb-6">Данные с API</h1>
    
    <button 
      @click="store.fetchPosts"
      :disabled="store.loading"
      class="bg-blue-600 text-white px-4 py-2 rounded mb-4"
    >
      {{ store.loading ? 'Загрузка...' : 'Загрузить посты' }}
    </button>
    
    <div v-if="store.error" class="text-red-500 mb-4">
      Ошибка: {{ store.error }}
    </div>
    
    <div v-for="post in store.posts" :key="post.id" class="post bg-white p-4 rounded shadow mb-4">
      <h3 class="font-bold text-lg">{{ post.title }}</h3>
      <p class="text-gray-600">{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store'
const store = useAppStore()
</script>

<style scoped>
.posts {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>