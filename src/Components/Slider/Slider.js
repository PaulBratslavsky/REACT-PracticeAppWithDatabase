import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = ({data}) => {

    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    function listSliderItems(itemsList) {
        
        return itemsList.map( item => (
            <Carousel.Item key={item.id} style={{ height: 'calc(40vh - 56px)', minHeight: '350px'}} >
                <img style={{objectFit: 'cover', height: '100%'}}
                className="d-block w-100"
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
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            {listSliderItems(data)};
        </Carousel>
    );
}

export default Slider
