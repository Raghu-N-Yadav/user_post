import React from "react";
import styles from '../mycssmodule.module.css'

export default class FetchUserOne extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: "",
            show: false,
            street: "",
            suite: "",
            city: "",
            zipcode: ""

            // postId: this.props.userId
        }
    }

    fetchData = async (url) => {
        const bufferData = await fetch(url)
        const jsonData = await bufferData.json()
        return jsonData;
    }

    componentDidMount = async () => {
        // console.log(typeof this.props.userId)
        const userData = await this.fetchData(`https://jsonplaceholder.typicode.com/users/${this.props.userId % 10}`)
        this.setState({
            userData: userData,
            street: userData.address.street,
            suite: userData.address.suite,
            city: userData.address.city,
            zipcode: userData.address.zipcode,
            cName: userData.company.name,
            bs: userData.company.bs,
            catchPhrase: userData.company.catchPhrase
        })
        // console.log(userData)
        // console.log(this.state.userData.address)
    }

    render() {
        const { userData } = this.state
        const { id, name, email, username, phone, website } = this.state.userData
        const { street, city, zipcode, suite, cName, catchPhrase, bs } = this.state

        return (

            <div className="user">
                <div className="author">
                    <img src="https://img.icons8.com/bubbles/50/000000/user.png" />
                    <div>
                        <div>@{username} </div>
                        <div>{name} </div>
                    </div>
                </div>
                <div className="userInfo">

                    <div className="userAdd">
                        <><img src="https://img.icons8.com/doodle/48/000000/home--v1.png" /></>
                        <div><div>{suite},</div>
                            <div>{street},</div>
                            <div>{city},</div>
                            <div>{zipcode}</div></div>

                    </div>
                    <div className="userCom">
                        <div><img src="https://img.icons8.com/bubbles/50/000000/company.png" /></div>
                        <div><div>{cName},</div>
                            <div>{catchPhrase},</div>
                            <div>{bs}</div></div>
                    </div>
                    <div className="userPhon"><img src="https://img.icons8.com/ios-filled/50/000000/apple-phone.png" />{phone}</div>
                    <div className="userWebsite"><img src="https://img.icons8.com/color/48/000000/domain--v1.png" />{website}</div>
                    <>
                        {/* <div>User ID : {id}</div> */}
                        <div className="userEmail"><img src="https://img.icons8.com/doodle/48/000000/apple-mail.png" /> {email}</div>
                    </>
                </div>
            </div>)
    }
}