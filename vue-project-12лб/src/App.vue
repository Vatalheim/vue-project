<template>
  <div>
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/about">О нас</router-link> |
      <router-link to="/contact">Контакты</router-link> |
      <router-link to="/posts">API Данные</router-link> |
      <router-link :to="'/user/' + store.currentId">
        Пользователь (ID {{ store.currentId }})
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store'
const store = useAppStore()
</script>

<style scoped>
/* Ваши стили */
</style>