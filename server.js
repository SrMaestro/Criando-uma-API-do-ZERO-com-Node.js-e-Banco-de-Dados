import express from 'express'

const app = express()

app.get('/usuarios', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000)