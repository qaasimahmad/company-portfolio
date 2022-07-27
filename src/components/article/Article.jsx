import React from 'react'
import "./article.css"

const Article = ({blogImage, date, title}) => {
  return (
    <div className='blog-container-article'>
      <div className="blog-container-article-image">
        <img src={blogImage} alt="blogImage" />
      </div>
      <div className="blog-container-article-content">
        <div>
          <p>{ date }</p>
          <h3>{ title }</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article