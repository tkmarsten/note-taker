const router = require('express').Router()
const { readFromFile, readAndAppend, writeToFile } = require('../utils/fsUtil')
var uniqid = require('uniqid')

router.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

router.post('/api/notes', (req, res) => {
  const { title, text } = req.body

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uniqid()
    }

    readAndAppend(newNote, './db/db.json')
  }
})

// router.delete('/api/notes/:id', (req, res) => {
//   let filtered = readFromFile('./db/db.json')
//     .then((data) => res.json(JSON.parse(data.filter(note => note.id !== req.params.id))))

//   writeToFile('./db/db.json', filtered)
// })

module.exports = router