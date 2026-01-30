import { createClient } from '@sanity/client'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()
  
  const client = createClient({
    projectId: config.public.SANITY_STUDIO_PROJECT_ID,
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-05-03'
  })
  
  try {
    const data = await client.fetch(body.query, body.params || {})
    return data
  } catch (error) {
    console.error('Sanity fetch error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch from Sanity'
    })
  }
})
