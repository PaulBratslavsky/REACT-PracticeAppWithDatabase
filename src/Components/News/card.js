import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { nominalTypeHack } from 'prop-types';

const Image = styled.img`
    transition: 0.5s all ease-out;
    display: block;
    object-fit: 'cover';
    width: 100%;
`;


const CardContainer = styled.div`
    background: #0c0b22;
    height: 120px;
    margin: 15px 0;
    border-radius: 5px; 
    overflow: hidden;
    display: flex;

    transition: 0.5s all ease-out;
    &:hover {
        background-color: #fc295e;
        color: #ffe9f9;
    }
    &:hover ${Image} {
        opacity: 0.6;
    }
`;

const CardImage = styled.div`
    height: 100%;
    flex: 1;
`;


const CardContent = styled.div`
    height: 100%;
    width: 100%;
    flex: 2;

    display: flex;
    align-items: center;

    h2 {
        color: #ffe9f9;
        font-size: 1.2rem;
    }

    span {
        color: #06fdfb;
    }
`;






const Card = ({data}) => {

    console.log('DATA FOR CARDS', data);

    function getExcerpt( text, limit ){
        let shortText = text;
        shortText = shortText.substr( 0, shortText.lastIndexOf( ' ', limit ) ) + '...';
        return shortText;
    }

    return (
        <Link style={{ textDecoration: 'none' }} to={`./articles/${data.id}`} ><CardContainer>
            <CardImage>
                <Image 
                    style={{objectFit: 'cover', height: '100%'}}
                    src={`./images/articles/${data.image}`}
                    alt={data.title}
                />
            </CardImage>
            <CardContent>
                <div style={{ paddingLeft: '1rem' }}>
                    <h2>{getExcerpt(data.title, 35)}</h2>
                    <span>{data.author} | {data.date}</span>
                </div>
            </CardContent>
        </CardContainer></Link>
    )
}

export default Card;

