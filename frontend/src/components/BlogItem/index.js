import {Link} from 'react-router-dom'

const BlogItem = ({blogDetails}) => {
  const {id, title, description} = blogDetails

  return (
   <li className="blog-item">
  <Link to={`/blogs/${id}`}>
    <h2 className="blog-title">{title}</h2>
  </Link>
  <p className="blog-description">{description}</p>
</li>
  )
}

export default BlogItem