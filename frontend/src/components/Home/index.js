import {useState, useEffect} from 'react'
import BlogList from '../BlogList'
import './index.css'

const Home = () => {
  const [blogsList, setBlogsList] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(null)

useEffect(() => {
  const getData = async () => {
    try {
      const response = await fetch('http://localhost:5000/blogs')

      if (!response.ok) {
        throw new Error('Failed to fetch')
      }

      const data = await response.json()
      setBlogsList(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  getData()
}, [])

 const filteredBlogs = blogsList.filter(each =>
  each.title.toLowerCase().includes(search.toLowerCase()) ||
  each.description.toLowerCase().includes(search.toLowerCase())
)

  if (loading) return <p>Loading...</p>

if (error) return <p>{error}</p>

  return (
   <div className="home-container">
  <input
    className="search-input"
        type="search"
        placeholder="Search blogs"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredBlogs.length === 0 && search !== '' ? (
        <p>No Blogs Found</p>
      ) : (
        <BlogList blogsList={filteredBlogs} />
      )}
    </div>
  )
}

export default Home