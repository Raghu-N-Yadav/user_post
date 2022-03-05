import React from "react";
import { Link, useParams } from "react-router-dom"

export default function Errors() {
    const { name } = useParams()
    console.log(name)
    return (
        <div>
            <div>Error 404</div>
            <Link to="/">Go Back Home {name}</Link>
        </div>
    )
}