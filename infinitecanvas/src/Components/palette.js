import React from 'react';
import {PaletteArea, Colour} from './Styled-Components/styled-components';

function Palette() {
    return (
        <PaletteArea>
            <h3>Infinte Canvas</h3>
            <Colour colour="white"/>
            <Colour colour="black"/>
            <Colour colour="grey"/>
            <Colour colour="blue"/>
            <Colour colour="red"/>
            <Colour colour="yellow"/>
            <Colour colour="orange"/>
            <Colour colour="green"/>
            <Colour colour="purple"/>
        </PaletteArea>
    )
}

export default Palette;