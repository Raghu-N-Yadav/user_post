import React from "react";

export default class Comments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            commentData: ""
        }
    }

    fetchData = async (url) => {
        const bufferData = await fetch(url)
        const jsonData = await bufferData.json()
        return jsonData;
    }

    componentDidMount = async () => {
        // console.log(this.props.postId)
        const commentData = await this.fetchData(`https://jsonplaceholder.typicode.com/comments/${this.props.commentId}`)
        this.setState({ commentData: commentData })
        // console.log(postData)
        // console.log(this.state.postData)
    }

    render() {
        const { name, email, body } = this.state.commentData
        return (
            <div className="commentPost">
                <div className="name">
                    <img src="https://img.icons8.com/office/30/000000/user.png" /> {name} </div>
                <div className="email">
                    <img src="https://img.icons8.com/material-outlined/24/000000/mail.png" />{email}</div>
                <div className="comment">{body}</div>
            </div>
        )
    }
}