import React, {useState, useEffect} from 'react';
import {CanvasArea} from './Styled-Components/styled-components';
import openSocket from "socket.io-client";

const socket = openSocket("ws://localhost:3030/");

function Canvas() {
    const [newPix, seNewPix] = useState(null)

    useEffect(() => {
        
        socket.on("newData", data => {
            seNewPix(data);
        });

    }, []);

    const updatePixelData = (data) => {
        console.log(data)
        seNewPix(data);
    }

    console.log(newPix)
    
    return (
        <CanvasArea id="myCanvas"></CanvasArea>
    );
}

export default Canvas