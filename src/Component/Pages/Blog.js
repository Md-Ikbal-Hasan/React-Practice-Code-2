import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useParams, useLocation } from 'react-router-dom';
import { blogsData } from '../../data';

const Blog = () => {

    // const { title } = useParams();

    // const [bodyData, setBodyData] = useState("");
    // useEffect(() => {
    //     const blogData = blogsData.filter(blog => blog.title === title);
    //     setBodyData(blogsData[0].body)

    // }, [])


    const location = useLocation();
    // console.log("Location: ", location);

    const navigate = useNavigate();

    return (
        <div>
            <h1>{location.state.title} Page </h1>
            <p> {location.state.body.slice(0, 500)} </p>
            <p> {location.state.body.slice(501, 5000)} </p>

            <button onClick={() => {
                navigate("/blogs")
            }} >Go to Blogs</button>



        </div>
    )
}

export default Blog