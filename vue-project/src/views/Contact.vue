<template>
  <div class="page contact">
    <h1 class="text-3xl font-bold mb-6">Контакты</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4 text-blue-600">Наши магазины</h2>
        <div class="space-y-6">
          <div class="border-b pb-4">
            <h3 class="font-medium text-lg">Москва</h3>
            <p class="text-gray-600 mt-1"> ул. Тверская, 10</p>
            <p class="text-gray-600"> Ежедневно 10:00-22:00</p>
            <p class="text-gray-600"> +7 (495) 123-45-67</p>
          </div>
          <div>
            <h3 class="font-medium text-lg">Санкт-Петербург</h3>
            <p class="text-gray-600 mt-1"> Невский пр., 25</p>
            <p class="text-gray-600"> Ежедневно 10:00-22:00</p>
            <p class="text-gray-600"> +7 (812) 765-43-21</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4 text-blue-600">Обратная связь</h2>
        <form class="space-y-4">
          <div>
            <label class="block text-gray-700 mb-1">Ваше имя</label>
            <input type="text" 
                   class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          </div>
          <div>
            <label class="block text-gray-700 mb-1">Email</label>
            <input type="email" 
                   class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          </div>
          <div>
            <label class="block text-gray-700 mb-1">Сообщение</label>
            <textarea class="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <button type="submit" 
                  class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-200">
            Отправить сообщение
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>