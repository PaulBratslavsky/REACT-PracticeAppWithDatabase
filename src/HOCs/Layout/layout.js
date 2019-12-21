import React, { Component } from 'react';
import styled from 'styled-components';

const LayoutBackgroundDiv = styled.div`
    background: #0d0c22;
    height: calc(100% - 40px);
    overflow: auto;
`

class Layout extends Component {
    render() {
        return (
            <LayoutBackgroundDiv>
                {this.props.children}
            </LayoutBackgroundDiv>
        )
    }   
}

export default Layout;