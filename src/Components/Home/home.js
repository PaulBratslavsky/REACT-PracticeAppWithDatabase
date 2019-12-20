import React from 'react';
import Slider from '../Slider/Slider';
import { database } from '../../API/Axios';
import { Spinner } from 'react-bootstrap';


const Home = () => {

    const [ articlesState, setArticlesState ] = React.useState(null);
    const [ isLoadingState, setIsLoadingState ] = React.useState(true);

    React.useEffect( () => {
        getData(); 
    },[]);

    function getData() { 
        database.get('/articles')
            .then( ( response => {
                setArticlesState(response.data);
                setIsLoadingState(false);
            } ))
            .catch( ( err => console.error(err) ))
    }

    return (
        <div>
            { isLoadingState  ? <Spinner animation="grow" variant="info" /> :<Slider data={articlesState}/> }
        </div>
    )
}

export default Home;
