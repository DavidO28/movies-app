import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import type { Movie } from '@/types'

export function useFetch(url: string | Ref<string>) {
  const listData = ref<Movie[]>([])
  const item = ref<Movie | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const reactiveUrl = ref(url)

  const getData = async () => {
    loading.value = true
    try {
      const response = await fetch(reactiveUrl.value, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjdkMjVhMjc0MDA1OWY0MGFlMmZlMzE0NzI2ODMyMyIsIm5iZiI6MTczNTg5NzcyMy43NDgsInN1YiI6IjY3NzdiMjdiODE2YjI4MTBkMTY2ODgzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FLRkmRV9YMlOp7FLzoMVgG_ebEqKNbLHXocNhXNjJFw',
          Accept: 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      listData.value = data.results
      item.value = data 
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'An unknown error occurred'
    } finally {
      loading.value = false
    }
  }

  watch(reactiveUrl, getData, { immediate: true })
  return {
    listData,
    item,
    loading,
    error,
    setUrl: (newUrl: string) => (reactiveUrl.value = newUrl),
  }
}
