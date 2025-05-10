<template>
  <div class="page home">
    <div class="max-w-2xl mx-auto text-center py-12">
      <h1 class="text-3xl font-bold mb-6">Добро пожаловать в наш магазин</h1>
      
      <div class="bg-gray-100 p-8 rounded-lg shadow-inner">
        <div class="text-2xl text-gray-500 mb-4">
          <i class="fas fa-box-open"></i>
        </div>
        <h2 class="text-xl font-semibold mb-2">Товаров нет в наличии</h2>
        <p class="text-gray-600 mb-4">В данный момент все товары распроданы</p>
        
        <div class="border-t pt-4">
          <p class="text-sm text-gray-500">
            Ожидаем новое поступление в ближайшее время
          </p>
        </div>
      </div>
      
      <router-link 
        to="/contact" 
        class="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Связаться с нами
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 60vh;
  display: flex;
  align-items: center;
}
</style>