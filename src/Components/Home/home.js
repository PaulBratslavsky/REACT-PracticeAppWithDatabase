import React from 'react';
import Slider from '../Slider/slider';
import News from '../News/news';


const Home = () => {

    return (
        <React.Fragment>
            <Slider start={0} end={5} />
            <News start={5} amount={3} />
        </React.Fragment>
    )
}


export default Home;
