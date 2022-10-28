const router = require('express').Router()
const { readFromFile, readAndAppend } = require('../utils/fsUtil')

router.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

router.post('/api/notes', (req, res) => {
  const { title, text } = req.body

  if (req.body) {
    const newNote = { title, text }

    readAndAppend(newNote, './db/db.json')
  }
})

module.exports = router