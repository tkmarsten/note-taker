const express = require('express')
const path = require('path')
const PORT = 3000

const app = express()

app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes/notes'))

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);