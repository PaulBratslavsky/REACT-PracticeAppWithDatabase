import React, { Component } from 'react';
import styled from 'styled-components';

const LayoutBackgroundDiv = styled.div`
    background: #1a1842;
    height: 100%;
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