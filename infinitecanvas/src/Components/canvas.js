import React, {useState, useEffect} from 'react';
import {CanvasArea} from './Styled-Components/styled-components';

function Canvas() {
    const [newPix, seNewPix] = useState('')

    useEffect(() => {
        

        let eventSource = new EventSource("http://localhost:3000/canvas/getNew")
        eventSource.onmessage = e => updatePixelData(JSON.parse(e.data))
    }, []);

    const updatePixelData = (data) => {
        seNewPix(data);
    }

    console.log(newPix)
    
    return (
        <CanvasArea id="myCanvas"></CanvasArea>
    );
}

export default Canvas