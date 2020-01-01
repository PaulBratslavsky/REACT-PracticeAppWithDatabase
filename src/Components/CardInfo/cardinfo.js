import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import styled from 'styled-components';

const TeamNameTag = styled.span`
    background: #dc3545;
    padding: 0.125rem 0.35rem;
    color: white !important;
    margin-right: 0.25rem;
    border-radius: 3px;
`;


const CardInfo = (props) => {
    const { teams, currentTeam } = props;

    function teamName(teams, currentTeam) {

        const teamMatch = teams.find( (item ) => {
            return item.id === currentTeam;
        });

        if (teamMatch) {
            return teamMatch.name;
        }

    }

    return (
        <div>
            <TeamNameTag>{teamName(teams, currentTeam)}</TeamNameTag>
            <span><AiOutlineClockCircle />{" "}Date 12/20/99</span>
        </div>
    )
}

export default CardInfo;