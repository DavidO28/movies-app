import { ref, onMounted } from 'vue'
import type { Movie } from '@/types'

export function useFetch(url: string) {
  const listData = ref<Movie[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const getData = async () => {
    loading.value = true
    try {
      const response = await fetch(url, {
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
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'An unknown error occurred'
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    getData()
  })

  return { listData, loading, error }
}
