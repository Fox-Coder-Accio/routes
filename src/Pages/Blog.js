import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Blog = ({count,setCount}) => {
    const navigate = useNavigate();

    return(
        <div>
            <h1>Blog</h1>
            <p>This is a Blog Page</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <button onClick={()=>navigate(+1)}> Next </button>
            <button onClick={()=>navigate(-1)}> Previous </button>
        </div>
    )
}

export default Blog;