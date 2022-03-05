import React from "react";
import Comments from "./Comment";

export default class FetchPostOne extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postData: "",
            show: true
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
        // console.log(this.props.postId)
        const postData = await this.fetchData(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`)
        this.setState({ postData: postData })
        // console.log(postData)
        // console.log(this.state.postData)
    }

    render() {
        const { title, body, userId, id } = this.state.postData
        if (!this.state.show) {
            return (
                <div className="post">
                    <div className="title">{title} </div>
                    <div className="body">{body}</div>
                    <div className="cmtBtn" onClick={this.handleClick}><img src="https://img.icons8.com/ultraviolet/40/000000/comments.png" />Hide Comments</div>
                    <Comments commentId={1 + 5 * this.props.mult} />
                    <Comments commentId={2 + 5 * this.props.mult} />
                    <Comments commentId={3 + 5 * this.props.mult} />
                    <Comments commentId={4 + 5 * this.props.mult} />
                    <Comments commentId={5 + 5 * this.props.mult} />
                </div>
            )
        } else {
            return (
                <div className="post">
                    <div className="title">{title} </div>
                    <div className="body">{body}</div>
                    <div className="cmtBtn" onClick={this.handleClick}><img src="https://img.icons8.com/ultraviolet/40/000000/comments.png" />Comments</div>

                    {/* <Comments commentId={1} /> */}
                </div>
            )
        }
    }
}