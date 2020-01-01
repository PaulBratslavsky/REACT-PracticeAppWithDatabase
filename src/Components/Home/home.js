import React from 'react';
import Slider from '../Slider/slider';
import News from '../News/news';
import Videos from '../Videos/videos';
import TitleBanner from '../TitleBanner/titlebanner';


const Home = () => {

    return (
        <React.Fragment>
            <Slider start={0} end={5} />
            <TitleBanner title={'NBA NEWS'} />
            <News start={5} amount={3} />
            <TitleBanner title={'NBA VIDEOS'}/>
            <Videos start={0} amount={3} />
        </React.Fragment>
    )
}


export default Home;
