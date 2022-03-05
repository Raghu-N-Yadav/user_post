import React from "react";
import User from "./User";
import Navbar from "./Navbar";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <User userId={1} mult={0} />
                <User userId={2} mult={1} />
                <User userId={3} mult={2} />
                <User userId={4} mult={3} />
                <User userId={5} mult={4} />
                <User userId={6} mult={5} />
                <User userId={7} mult={6} />
                <User userId={8} mult={7} />
                <User userId={9} mult={8} />
                <User userId={10} mult={9} />
            </div>
        )
    }
}