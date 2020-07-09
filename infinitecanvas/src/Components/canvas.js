import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {CanvasArea, CanvasFrame} from './Styled-Components/styled-components';

import openSocket from "socket.io-client";

const socket = openSocket("ws://52.151.114.80:3030/");

const getCanvas = async () => {
    await axios.get('http://52.151.114.80:3000/canvas/boardState',
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
    }).then(response => {
        let arr = new Uint8ClampedArray(4000000);
        let originalArray = response.data.colour;
        let j = -1;
        for (let i = 0; i < arr.length; i += 4) {
            arr[i] = originalArray[j+=1];
            arr[i + 1] = originalArray[j+=1];
            arr[i + 2] = originalArray[j+=1];
            arr[i + 3] = 255;
        }
        
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext('2d');
        
        let imageDataFinal = new ImageData(arr, 1000, 1000);
        ctx.putImageData(imageDataFinal, 0, 0);
    }).catch(error => {
        console.log(error);
    });
}

const updateCanvas = async (e, colour, user, userData) => {
    const canvas = document.getElementById("myCanvas");
    e.preventDefault();
    var rect = canvas.getBoundingClientRect();
    var x = Math.floor((e.clientX - rect.left) * (canvas.width / rect.width));
    var y = Math.floor((e.clientY - rect.top) * (canvas.height / rect.height));
    if (userData.typeId === 2) {
        await axios.post('http://52.151.114.80:3000/canvas/getPixelInfo',
        {
            x: x+1,
            y: y+1
        },{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        }).then(response => {
            window.alert(response.data.username);
        }).catch(error => {
            console.log(error);
        });
    } else {
        let r = parseInt("0x" + colour.slice(1,3));
        let g = parseInt("0x" + colour.slice(3,5));
        let b = parseInt("0x" + colour.slice(5,7));
        
        await axios.put('http://52.151.114.80:3000/canvas/drawPixel',
        {
            x: y,
            y: x,
            r: r,
            g: g,
            b: b,
            userId: userData.userId
        },
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        }).then(response => {
            drawUpdate(x, y, r, g, b);
            disableClick();
            setTimeout(function() {
                enableClick();
            }, 1000);
        }).catch(error => {
            console.log(error);
        });
    } 
}

function drawUpdate(x, y, r, g, b) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(x,y,1,1);
}

function disableClick() {
    const canvas = document.getElementById("myCanvas");
    canvas.style["pointer-events"] = "none";
}

function enableClick() {
    const canvas = document.getElementById("myCanvas");
    canvas.style["pointer-events"] = "auto";
}

function startTimer(e, setTime, setPanning, setPosition, position) {
    let start = new Date();
    let startTime = start.getTime();
    setTime(startTime);
    setPosition({
        ...position,
        oldX: e.clientX,
        oldY: e.clientY
    })
    setPanning(true);
}

function endTimer(time, setTime, setPanning, e, colour, user, userData) {
    let end = new Date();
    let endTime = end.getTime();
    if (endTime - time < 100) {
        updateCanvas(e, colour, user, userData)
    }
    setTime(0);
    setPanning(false);
}

function panImage(e, isPanning, position, setPosition) {
    if (isPanning) {        
        let newX = e.clientX;
        let newY = e.clientY;
        let offsetX = newX-position.oldX;
        let offsetY = newY-position.oldY;
        setPosition({
            ...position,
            oldX: newX,
            oldY: newY,
            x: position.x+offsetX,
            y: position.y+offsetY
        });
    }
}

function zoom(e, scale, setScale) {
    const sign = Math.sign(e.deltaY) / 5;
    let finalScale = scale-sign;
    setScale(finalScale);
}

function Canvas(props) {
    const [isPanning, setPanning] = useState(false);
    const [time, setTime] = useState(0);
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        oldX: 0,
        oldY: 0,
    });
    const [scale, setScale] = useState(1);

    useEffect(() => {
        if (props.user === null) {
            getCanvas();
        }
        
        socket.on("newData", data => {
            drawUpdate(data.y, data.x, data.r, data.g, data.b);
        });
    }, [props.user]);
    
    return (
        <CanvasFrame id="frame" user={props.user}>
            <CanvasArea
            onWheel={e => zoom(e, scale, setScale, position, setPosition)}
            scale={scale}
            id="myCanvas" 
            height='1000' 
            width='1000' 
            user={props.user}
            position={position}
            onMouseDown={e => startTimer(e, setTime, setPanning, setPosition, position)} 
            onMouseUp={e => endTimer(time, setTime, setPanning, e, props.colour, props.user, props.userData)}
            onMouseMove={e => panImage(e, isPanning, position, setPosition)}>
            </CanvasArea>
        </CanvasFrame>
    );
}

export default Canvas
