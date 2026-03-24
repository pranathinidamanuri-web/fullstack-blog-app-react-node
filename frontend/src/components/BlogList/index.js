import BlogItem from '../BlogItem'

const BlogList = ({blogsList}) => {
  return (
    <ul className="blog-list">
      {blogsList.map(each => (
        <BlogItem key={each.id} blogDetails={each} />
      ))}
    </ul>
  )
}

export default BlogList