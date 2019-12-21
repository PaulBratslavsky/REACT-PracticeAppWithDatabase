import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { database } from '../../API/Axios';
import Loading from '../Loading/loading';

const SliderContainer = styled.div`
    height: calc(40vh - 56px); 
    min-height: 350px;
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
    opacity: 0.5;

`;

const Slider = ({start, end}) => {

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
        
        return itemsList.map( item => (
            <Carousel.Item key={item.id} style={{ height: 'calc(40vh - 56px)', minHeight: '350px'}} >
                <SliderImageOverlay />
                <SliderImage style={{objectFit: 'cover', height: '100%'}}
                
                src={`./images/articles/${item.image}`}
                alt={item.title}
                />
                <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.author}</p>
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

export default Slider
