import React from 'react'
import classses from './Post.module.css'
import {Link} from 'react-router-dom'
const Post = ({id,author,body}) => {
    
  return (
    <li className={classses.post}>
      <Link to={id}>
        <h2 className={classses.author}>{author}</h2>
        <p className={classses.body}>{body}</p>
      </Link>
    </li>
  )
}

export default Post;