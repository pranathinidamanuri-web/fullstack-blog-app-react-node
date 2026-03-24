const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const blogs = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Building responsive UI using HTML, CSS, and React.',
  },
  {
    id: 2,
    title: 'Backend Development',
    description: 'Creating APIs using Node.js and Express.',
  },
  {
    id: 3,
    title: 'JavaScript Concepts',
    description: 'Understanding arrays, functions, and async programming.',
  },
]
// GET all blogs
app.get('/blogs', (req, res) => {
  res.json(blogs)
})

// GET single blog
app.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const blog = blogs.find(each => each.id === id)

  if (!blog) {
    return res.status(404).json({message: 'Blog not found'})
  }

  res.json(blog)
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})