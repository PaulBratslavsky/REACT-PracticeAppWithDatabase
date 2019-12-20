import React, { Component } from 'react';
import Somewhere from './somewhere';
import SomewhereElse from './somewhereelse';

class App extends Component {

    state = { 
        count: 0
    }

    addOne = () => {
        this.setState( prevState => {
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello World</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.addOne}>Add</button>
                <Somewhere count={this.state.count} /> 
                <SomewhereElse count={this.state.count} />
            </React.Fragment>
            
        )
    }
}

export default App;