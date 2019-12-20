import React, { Component } from 'react'

class SomewhereElse extends Component {

    state = {
        count: this.props.count
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
    
}

export default SomewhereElse;