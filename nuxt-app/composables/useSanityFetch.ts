export const useSanityFetch = async <T>(key: string, query: string, params?: Record<string, any>) => {
  return useAsyncData<T>(key, async () => {
    const response = await $fetch<T>('/api/sanity', {
      method: 'POST',
      body: { query, params }
    })
    return response
  })
}
