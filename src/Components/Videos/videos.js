import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { database } from '../../API/Axios';
import Loading from '../Loading/loading';
import VidoeCard from './videocard';

const VideosContainer = styled.div`
    min-height: 350px;
    margin: 10px;
`;

const Videos = ({start, amount}) => {

    const [ videosState, setVideosState ] = React.useState([]);
    const [ teamsState, setTeamsState ] = React.useState([]);

    const [ isLoadingState, setIsLoadingState ] = React.useState(true);
    const [ startAndEndState, setStartEndState ] = React.useState({ start: start, end: start + amount })


    const getData = React.useCallback( () => { 

        const { start, end } = startAndEndState;

        database.get(`/videos?_start=${start}&_end=${end}`)
            .then( response => {
                setVideosState([...videosState, ...response.data]);
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

    function listVideoItems(itemsList) {
        
        return itemsList.map( item => ( 
            <VidoeCard key={item.id} data={item} teams={teamsState} />
        ));
    }

    console.log(videosState, "VIDEPS THAT I NEED");

    return (
        <VideosContainer>
            { isLoadingState ?   <Loading /> : listVideoItems(videosState) }
            <Button variant="danger" block onClick={nextSlides} >LOAD MORE VIDEOS</Button>
        </VideosContainer>
        
    );    

}

export default Videos;