import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useFetch } from '@/composables/useFetch'

export const useSearchStore = defineStore('search', () => {
  const searchQuery = ref('')
  const { setUrl } = useFetch('')

  const performSearch = async () => {
    if (searchQuery.value.trim()) {
      setUrl(
        `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&query=${searchQuery.value}`,
      )
    }
  }

  watch(searchQuery, (newQuery) => {
    if (newQuery.trim()) {
      setUrl(`https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&query=${newQuery}`)
    }
  })

  return { searchQuery, performSearch }
})
