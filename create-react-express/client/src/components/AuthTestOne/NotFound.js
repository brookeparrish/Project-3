import React, { Component } from "react"

export default class NotFound extends Component {
    render() {
        return (

            <div>
                <h1>Page not found</h1>
                <button onClick={this.props.auth.logout}>Logout</button>

            </div>

        )
    }


}