import React from "react";
import Posts from "./Posts";
import { Link } from "react-router-dom";

export default class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: "",
            show: false,
            // postId: this.props.userId
        }
    }

    handleClick = () => {
        if (this.state.show) {
            this.setState({ show: false })
        } else {
            this.setState({ show: true })
        }
    }
    fetchData = async (url) => {
        const bufferData = await fetch(url)
        const jsonData = await bufferData.json()
        return jsonData;
    }

    componentDidMount = async () => {
        // console.log(typeof this.props.userId)
        const userData = await this.fetchData(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
        this.setState({ userData: userData })
        // console.log(userData)
        // console.log(this.state.userData)
    }

    render() {
        const { id, name, email, username, phone, website } = this.state.userData
        // if (!this.state.show) {
        return (

            <div className="user">
                <div className="author">
                    <img src="https://img.icons8.com/bubbles/50/000000/user.png" />
                    <div>
                        <Link className="link" to={`/userone/${this.props.userId}`}>
                            {/* <div>@{username} </div> */}
                            <div className="Uname">{name} </div></Link>
                    </div>
                </div>
                <Posts postId={1 + 10 * this.props.mult} mult={0} />

                <div className="showButton" onClick={this.handleClick}>
                    <img src="https://img.icons8.com/fluency/48/000000/reading.png" />
                    <Link
                        className="link"
                        to="/more"
                        state={{ val: this.props.mult, username: username, name: name }}
                    >See More Posts by {name}
                    </Link>


                    {/* {this.state.show ? 'Show less' : 'See more Posts'} */}
                </div>

            </div>)
    }
}