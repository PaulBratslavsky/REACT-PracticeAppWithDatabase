import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { database } from '../../API/Axios';
import Loading from '../Loading/loading';
import { Redirect, withRouter } from 'react-router-dom';

const SliderContainer = styled.div`
    height: calc(40vh - 56px); 
    min-height: 350px;
    margin: 10px;
    border-radius: 15px; 
    overflow: hidden;
`;

const SliderImage = styled.img`
    position: relative;
    display: block;
    object-fit: 'cover';
    height: 100%;
    width: 100%;
`;

const SliderImageOverlay = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #0d0c22;
    background-image: linear-gradient( #0d0c22, #fd295f );
    opacity: 0.6;

`;

const Slider = ({start, end, history }) => {

    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(null);
    const [ articlesState, setArticlesState ] = React.useState(null);
    const [ isLoadingState, setIsLoadingState ] = React.useState(true);

    const getData = React.useCallback( () => { 

        database.get(`/articles?_start=${start}&_end=${end}`)
            .then( ( response => {
                setArticlesState(response.data);
                setIsLoadingState(false);
            } ))
            .catch( ( err => console.error(err) ))

    },[end, start]); 

    React.useEffect( () => {
        getData(); 
    },[getData]);


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    function listSliderItems(itemsList) {
        
        return itemsList.map( data => (
            <Carousel.Item onClick={ () => history.push(`/articles/${data.id}`) } key={data.id} style={{ height: 'calc(40vh - 56px)', minHeight: '350px'}} >
                <SliderImageOverlay />
                <SliderImage 
                    style={{objectFit: 'cover', height: '100%'}}
                    src={`./images/articles/${data.image}`}
                    alt={data.title}
                />
                <Carousel.Caption>
                <h3>{data.title}</h3>
                <p>{data.author}</p>
                </Carousel.Caption>
            </Carousel.Item>

        ));
    }

    return (
        <SliderContainer>
            {  isLoadingState 
                ?   <Loading /> 

                :   <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                        {listSliderItems(articlesState)};
                    </Carousel> }
        </SliderContainer>
        
    );    
}

export default withRouter(Slider);
