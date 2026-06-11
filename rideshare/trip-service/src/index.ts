import express from 'express'

const app = express()
const PORT = 3002

app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'trip-service',
    timestamp: new Date().toISOString()
  })
})

app.listen(PORT, () => {
  console.log(`Trip service running on port ${PORT}`)
})