import React from 'react'
import { Article } from '../../components'
import {blog04, blog05, blog07, blog08, blog10} from "./imports"
import "./blog.css"

const Blog = () => {
  return (
    <div className='blog section-padding' id='blogs'>
      <div className="blog-heading">
        <h1 className='gradient-text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="blog-container">
        <div className="blog-container-groupA">
          <Article blogImage={blog10} date="Jan 20, 2022" title="ZRANK- How important is an external IT Audit?" />
        </div>
        <div className="blog-container-groupB">
          <Article blogImage={blog07} date="March 15, 2022" title="ZRANK is your infrastructure open to hybrid working?" />
          <Article blogImage={blog08} date="April 26, 2022" title="ZRANK Learn about SRE and its role in your business scalability" />
          <Article blogImage={blog04} date="July 18, 2022" title="ZRANK and Open  AI is the future. Let us explore how it is?" />
          <Article blogImage={blog05} date="Dec 02, 2022" title="ZRANK IT trends in 2023 and future technology adoption for your business?" />
        </div>
      </div>
    </div>
  )
}

export default Blog