// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    border: 1px solid yellow;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 10px;
    margin: 20px 0px;

`;

export default function Character ({name, height, mass, birthYear}) {

    return (
        <StyledCharacter>
            <h2>{name}</h2>
            <h3>{birthYear}</h3>
        </StyledCharacter>
    )
}