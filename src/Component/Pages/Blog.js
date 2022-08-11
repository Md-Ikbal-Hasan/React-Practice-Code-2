import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { blogsData } from '../../data';
const Blog = () => {
    const { title } = useParams();
    const [bodyData, setBodyData] = useState("");
    useEffect(() => {
        const blogData = blogsData.filter(blog => blog.title === title);
        setBodyData(blogsData[0].body)


    }, [])

    const navigate = useNavigate();

    return (
        <div>
            <h1>{title} Page </h1>
            <p> {bodyData.slice(0, 500)} </p>
            <p> {bodyData.slice(501, 5000)} </p>

            <button onClick={() => {
                navigate("/blogs")
            }} >Go to Blogs</button>



        </div>
    )
}

export default Blog