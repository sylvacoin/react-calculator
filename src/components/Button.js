import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <div className={`calc-button col-${this.props.col}`}>
                <button onClick={() => this.props.action(this.props.symbol)}> {this.props.symbol }</button>
            </div>
        )
    }
}

export default Button
