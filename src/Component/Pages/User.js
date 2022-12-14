import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
const User = () => {
    const { userid } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ name: name })

    }

    return (
        <div>
            <h1>User</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }} />

                <button type='submit'>Find User</button>
            </form>

            {/* <h1> Userid :{searchParams.get("id")}</h1>
            <h1>age: {searchParams.get("age")}</h1> */}

        </div>
    )
}

export default User