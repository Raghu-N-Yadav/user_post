import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import Posts from "./Posts";


function Morepost() {

    const location = useLocation()
    const { val, username, name } = location.state
    // console.log(username, name)

    return (
        <>
            <Link to='/'>Home</Link>
            <div className="user">
                <div className="author">
                    <img src="https://img.icons8.com/bubbles/50/000000/user.png" />
                    <div>
                        <div>@{username} </div>
                        <div>{name} </div>
                    </div>
                </div>
                {/* Post - 2 */}
                <div className="indiPost">
                    <Posts postId={2 + 10 * val} mult={1 + 1 * val} />
                </div>
                {/* Post - 3 */}
                <div className="indiPost">
                    <Posts postId={3 + 10 * val} mult={2 + 2 * val} />
                </div>
                {/* Post - 4 */}

                <div className="indiPost">
                    <Posts postId={4 + 10 * val} mult={3 + 3 * val} />
                </div>
                {/* Post - 5 */}
                <div className="indiPost">

                    <Posts postId={5 + 10 * val} mult={4 + 4 * val} />
                </div>
                {/* Post - 6 */}
                <div className="indiPost">

                    <Posts postId={6 + 10 * val} mult={5 + 5 * val} />
                </div>

                {/* Post - 7 */}
                <div className="indiPost">

                    <Posts postId={7 + 10 * val} mult={6 + 6 * val} />
                </div>

                {/* Post - 8 */}
                <div className="indiPost">

                    <Posts postId={8 + 10 * val} mult={7 + 7 * val} />
                </div>

                {/* Post - 9 */}
                <div className="indiPost">

                    <Posts postId={9 + 10 * val} mult={8 + 8 * val} />
                </div>

                {/* Post - 10 */}
                <div className="indiPost">

                    <Posts postId={10 + 10 * val} mult={9 + 9 * val} />
                </div>

            </div>
        </>
    )

}


export default Morepost;