import React from 'react';
import './blog.css';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports';

const imageArray = [
  blog02,
  blog03,
  blog04,
  blog05
]

const Blog = () => {
  return (
    <div className = 'gpt3__blog section__padding' id='blog'>
      <div className = 'gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening. We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date='march 21, 2005' title='A victory as Vipaswi Thapa is born into the world!!!'/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          {imageArray.map(img => (<Article imgUrl={img} date='march 21, 2005' title='A victory as Vipaswi Thapa is born into the world!!!'/>))}
        </div>
      </div>
    </div>
  )
};


export default Blog