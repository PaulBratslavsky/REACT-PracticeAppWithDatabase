import React from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    display: absolute;
    top: 0;
    left: 0;
    background: #08090a;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center
`;

const Loading = () => {
    return (
        <ContainerDiv>
            <Spinner animation="grow" variant="danger" />
        </ContainerDiv>
    )
}

export default Loading;