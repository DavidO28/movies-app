import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useFetch } from '@/composables/useFetch'

export const useSearchStore = defineStore('search', () => {
  const searchQuery = ref('')
  const { setUrl } = useFetch('')

  const performSearch = async () => {
    const query = searchQuery.value?.trim() || ''

    if (query) {
      setUrl(
        `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&query=${query}`,
      )
    }
  }

  watch(searchQuery, (newQuery) => {
    const query = newQuery?.trim() || ''
    if (query) {
      setUrl(
        `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&query=${query}`,
      )
    }
  })

  return { searchQuery, performSearch }
})
