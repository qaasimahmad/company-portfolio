import React from 'react'
import { Article } from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from "./imports"
import "./blog.css"

const Blog = () => {
  return (
    <div className='blog section-padding' id='blogs'>
      <div className="blog-heading">
        <h1 className='gradient-text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="blog-container">
        <div className="blog-container-groupA">
          <Article blogImage={blog01} date="Sep 26, 2021" title="YAMIC-S and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className="blog-container-groupB">
          <Article blogImage={blog02} date="Sep 26, 2021" title="YAMIC-S and Open  AI is the future. Let us exlore how it is?" />
          <Article blogImage={blog03} date="Sep 26, 2021" title="YAMIC-S and Open  AI is the future. Let us exlore how it is?" />
          <Article blogImage={blog04} date="Sep 26, 2021" title="YAMIC-S and Open  AI is the future. Let us exlore how it is?" />
          <Article blogImage={blog05} date="Sep 26, 2021" title="YAMIC-S and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog