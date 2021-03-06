import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { database } from '../../API/Axios';
import Loading from '../Loading/loading';
import Card from './card';

const NewsContainer = styled.div`
    min-height: 350px;
    margin: 10px;
    margin-bottom: 1rem;
`;

const News = ({start, amount}) => {

    const [ articlesState, setArticlesState ] = React.useState([]);
    const [ teamsState, setTeamsState ] = React.useState([]);

    const [ isLoadingState, setIsLoadingState ] = React.useState(true);
    const [ startAndEndState, setStartEndState ] = React.useState({ start: start, end: start + amount })


    const getData = React.useCallback( () => { 

        const { start, end } = startAndEndState;

        database.get(`/articles?_start=${start}&_end=${end}`)
            .then( response => {
                setArticlesState([...articlesState, ...response.data]);
                setIsLoadingState(false);
            })
            .catch( ( err => console.error(err) ) );

        // Check if have list then get associated teams
        if (teamsState.length < 1 ) {
            setIsLoadingState(true);
            database.get(`/teams`)
                .then( response => {
                    setTeamsState([...response.data]);
                    setIsLoadingState(false);
                })
                .catch( ( err => console.error(err) ))
        }

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
            <Card key={item.id} data={item} teams={teamsState} />
        ));
    }

    console.log(teamsState, "TEAMS THAT I NEED");

    return (
        <NewsContainer>
            { isLoadingState ?   <Loading /> : listArticleItems(articlesState) }
            <Button variant="danger" block onClick={nextSlides} >LOAD MORE NEWS</Button>
        </NewsContainer>
        
    );    

}

export default News
