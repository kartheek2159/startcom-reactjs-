import React, { useState } from 'react'
import { PostsData } from '../../Data/PostsData'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './Postside.css'

const Postside = () => {
  
  return (
    <div className='PostSide'>
       <PostShare />    
       <Posts/>  
    </div>
  )
}

export default Postside