import { defineStore } from 'pinia'
import axios from 'axios'

export const useAppStore = defineStore('app', {
  state: () => ({

    shops: [
      {
        city: 'Москва',
        address: 'ул. Тверская, 10',
        hours: 'Ежедневно 10:00-22:00',
        phone: '+7 (495) 123-45-67'
      },
      {
        city: 'Санкт-Петербург',
        address: 'Невский пр., 25',
        hours: 'Ежедневно 10:00-22:00',
        phone: '+7 (812) 765-43-21'
      }
    ],
    

    formData: {
      name: '',
      email: '',
      message: ''
    },
    

    posts: [],
    loading: false,
    error: null,
    currentId: '123' 
  }),
  actions: {

    async submitContactForm() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/posts',
          {
            title: `Сообщение от ${this.formData.name}`,
            body: this.formData.message,
            email: this.formData.email,
            userId: 1
          }
        )
        return response.data
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },
    

    async fetchPosts() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.posts = response.data.slice(0, 5)
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    

    updateId(newId) {
      this.currentId = newId
    }
  }
})