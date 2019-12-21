import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { database } from '../../API/Axios';
import Loading from '../Loading/loading';
import Card from './card';

const NewsContainer = styled.div`
    height: 50vh;
    min-height: 350px;
    margin: 10px;
`;

const News = ({start, amount}) => {

    const [ articlesState, setArticlesState ] = React.useState([]);
    const [ isLoadingState, setIsLoadingState ] = React.useState(true);
    const [ startAndEndState, setStartEndState ] = React.useState({ start: start, end: start + amount })


    const getData = React.useCallback( () => { 

        const { start, end } = startAndEndState;
        database.get(`/articles?_start=${start}&_end=${end}`)
            .then( ( response => {
                setArticlesState([...articlesState, ...response.data]);
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
            <Card key={item.id} data={item} />
        ));
    }

    return (
        <NewsContainer>
            { isLoadingState ?   <Loading /> : listArticleItems(articlesState) }
            <Button variant="danger" block onClick={nextSlides} >LOAD MORE</Button>
        </NewsContainer>
        
    );    

}

export default News
