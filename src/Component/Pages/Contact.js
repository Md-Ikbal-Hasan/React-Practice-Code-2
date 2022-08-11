import React from 'react'
import { useNavigate } from "react-router-dom"
const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Contact page</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo, cum consectetur architecto unde nisi commodi temporibus. Doloremque quo fugit nostrum. Nesciunt dicta ducimus sequi doloribus natus, blanditiis similique ea assumenda aspernatur accusamus laudantium nemo nostrum dolor dolorem officia nulla doloremque ipsum asperiores! Labore consequatur dignissimos accusantium facilis illo esse!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque ipsam ad rerum at, itaque possimus accusamus asperiores suscipit deserunt perspiciatis voluptatibus et officiis, eos nulla placeat! Inventore, veniam exercitationem.</p>
            <button onClick={() => {
                navigate("/")
            }} >Go to Home Page</button>
        </div>
    )
}

export default Contact