import React from 'react';
import styled from 'styled-components';
import { CURRENT_YEAR, NAME } from '../../config';

const FooterDiv = styled.footer`
    height: 40px;
    background: #0d0c22;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    p {
        margin: 0;
        padding: 0;
        color: #e2e2e2;
    }
`;


const Footer = (props) => {
    return (
        <FooterDiv className="fixed-bottom">
            <p>&copy; {CURRENT_YEAR} | {NAME} </p>
        </FooterDiv>
    )
}

export default Footer;