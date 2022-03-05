import React from "react";
import { Link, useParams } from 'react-router-dom'
import FetchUserOne from "./FetchUserOne";


function UserOne() {
    const { id } = useParams()

    return (
        <div>
            <Link to='/'>Home</Link>
            <FetchUserOne userId={id} />
        </div>
    )
}

export default UserOne;


