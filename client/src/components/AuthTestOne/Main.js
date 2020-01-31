import React, { Component } from "react"

export default class Main extends Component {
    render() {
        return (
            <div>
                <p>
                    This is from Main

                    Hello {this.props.name}

                    Do you want to see the secret? <a href="/secret">Click here</a>
                </p>
                {this.props.auth.isAuthenticated &&
                    <div>
                        <hr />
                        Please login first
                <hr />
                        <button onClick={this.props.auth.login}>Login</button>
                    </div>
                }
            </div>
        )
    }
}