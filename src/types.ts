export type Movie = {
  id: number
  title: string
  video: boolean
  overview: string
  poster_path: string
  release_date: string
  vote_average: number
  results: Array<{ name: string; key: string }>
}

export type MenuItem = {
  title: string
  path: string
  icon: string
}
