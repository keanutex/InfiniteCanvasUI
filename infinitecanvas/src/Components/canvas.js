import React, {useEffect} from 'react';
import {CanvasArea} from './Styled-Components/styled-components';

function Canvas() {
    useEffect(() => {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext('2d');
        ctx.beginPath()
        ctx.strokeRect(50, 35, 50, 50)
    });
    
    return (
        <CanvasArea id="myCanvas"></CanvasArea>
    );
}

export default Canvas