import React from 'react';
// import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { database } from '../../API/Axios';
import Loading from '../Loading/loading';

const NewsContainer = styled.div`
    height: 50vh;
    min-height: 350px;
`;

const News = ({start, amount}) => {

    const [ articlesState, setArticlesState ] = React.useState(null);
    const [ isLoadingState, setIsLoadingState ] = React.useState(true);
    const [ startAndEndState, setStartEndState ] = React.useState({ start: start, end: start + amount })


    const getData = React.useCallback( () => { 

        const { start, end } = startAndEndState;
        database.get(`/articles?_start=${start}&_end=${end}`)
            .then( ( response => {
                setArticlesState(response.data);
                setIsLoadingState(false);
            } ))
            .catch( ( err => console.error(err) ))

    },[startAndEndState]); 

    React.useEffect( () => {
        getData(); 
    },[getData]);

    function nextSlides() {
        console.log('button clicked');
        setStartEndState( prevState => {
            return { 
                start: prevState.end,
                end: prevState.end + amount
            }
        });
    }

    function listArticleItems(itemsList) {
        
        return itemsList.map( item => (
            <div key={item.id} >
                <h2>{item.id}</h2>
            </div>

        ));
    }

    return (
        <NewsContainer>
            { isLoadingState ?   <Loading /> : listArticleItems(articlesState) }
            <button onClick={nextSlides} >Click ME</button>
        </NewsContainer>
        
    );    

}

export default News