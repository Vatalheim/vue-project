<template>
  <div class="page contact">
    <h1 class="text-3xl font-bold mb-6">Контакты</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4 text-blue-600">Наши магазины</h2>
        <div class="space-y-6">
          <div v-for="(shop, index) in store.shops" :key="index" 
               :class="{'border-b pb-4': index < store.shops.length - 1}">
            <h3 class="font-medium text-lg">{{ shop.city }}</h3>
            <p class="text-gray-600 mt-1">{{ shop.address }}</p>
            <p class="text-gray-600">{{ shop.hours }}</p>
            <p class="text-gray-600">{{ shop.phone }}</p>
          </div>
        </div>
      </div>


      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4 text-blue-600">Обратная связь</h2>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-gray-700 mb-1">Ваше имя*</label>
            <input 
              v-model="store.formData.name" 
              type="text" 
              required
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
          </div>
          
          <div>
            <label class="block text-gray-700 mb-1">Email*</label>
            <input 
              v-model="store.formData.email" 
              type="email" 
              required
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
          </div>
          
          <div>
            <label class="block text-gray-700 mb-1">Сообщение*</label>
            <textarea 
              v-model="store.formData.message" 
              required
              class="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            :disabled="store.loading"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-200 disabled:opacity-50"
          >
            {{ store.loading ? 'Отправка...' : 'Отправить сообщение' }}
          </button>
          
          <div v-if="store.error" class="text-red-500">
            Ошибка: {{ store.error }}
          </div>
          
          <div v-if="submitSuccess" class="text-green-500">
            Сообщение успешно отправлено!
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/store'

const store = useAppStore()
const submitSuccess = ref(false)

const handleSubmit = async () => {
  submitSuccess.value = false
  try {
    await store.submitContactForm()
    submitSuccess.value = true
    store.formData = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('Ошибка отправки:', error)
  }
}
</script>

<style scoped>
.contact {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>