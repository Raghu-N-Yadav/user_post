import React from "react";
import { Link, useParams } from 'react-router-dom'
import FetchPostOne from "./FetchPostOne";
// import { Link } from "react-router-dom";
import FetchUserOne from "./FetchUserOne";





function PostOne() {
    const { id } = useParams()
    return (
        <div>
            <Link to='/'>Home</Link>
            <FetchUserOne userId={id} />
            <FetchPostOne postId={id} mult={0} />
        </div>
    )
}
export default PostOne;


