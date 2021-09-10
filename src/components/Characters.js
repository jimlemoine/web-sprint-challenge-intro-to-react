import React from 'react';
import styled from 'styled-components';

import Character from './Character';

const StyledCharacters = styled.div`
    width: 60%;
    background-color: rgba(238, 238, 0, .2);
    border-radius: 10px;
    margin: 15px 0px;
    
`;

export default function Characters (props) {
    const { characters } = props;

    return (
        <StyledCharacters>
            {characters.map((character, index) => {
                return <Character name={character.name} height={character.height} mass={character.mass} birthYear={character.birth_year} key={index} />
            })}
        </StyledCharacters>
    )
}
