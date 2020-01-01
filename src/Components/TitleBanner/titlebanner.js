import React from 'react'
import styled from 'styled-components';

const  TitleBannerContainer = styled.div`
    height: 75px;
    background: #ffa501;
    color: #0d0c22;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function TitleBanner({title}) {
    return (
        <TitleBannerContainer>
            <h2>{title}</h2>  
        </TitleBannerContainer>
    )
}


