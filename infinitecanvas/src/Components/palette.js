import React from 'react';
import {PaletteArea, ColourInput, ColourLabel} from './Styled-Components/styled-components';

function Palette(props) {
    return (
        <PaletteArea>
            <h3>DotArt</h3>
            <ColourLabel colour={props.colour}>
                <ColourInput type="color" onChange={e => props.setColour(e.target.value)}/>
            </ColourLabel>
        </PaletteArea>
    )
}

export default Palette;