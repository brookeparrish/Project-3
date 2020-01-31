import React, { Component } from 'react'

export default class Secret extends Component {
    render() {
        return (
            <div>
                <h1>
                    This is a secret
                </h1>
                <button onClick={this.props.auth.logout}>Logout</button>
            </div>
        )
    }
}