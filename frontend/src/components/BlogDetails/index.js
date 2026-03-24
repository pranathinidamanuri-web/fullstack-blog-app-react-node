import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import './index.css'

const BlogDetails = () => {
  const {id} = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setLoading(true) // 🔥 IMPORTANT

      await new Promise(resolve => setTimeout(resolve, 1000)) // 🔥 delay

      const response = await fetch(`http://localhost:5000/blogs/${id}`)
      const data = await response.json()

      setBlog(data)
      setLoading(false)
    }

    getData()
  }, [id])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (!blog) {
    return <h2>Not Found</h2>
  }

  return (
   <div className="blog-details">
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  )
}

export default BlogDetails