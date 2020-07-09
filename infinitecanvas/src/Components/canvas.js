import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {CanvasArea, CanvasFrame} from './Styled-Components/styled-components';

function draw(e, colour, user) {
    if (user === null) {
        return;
    }
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext('2d');
    e.preventDefault();
    var rect = canvas.getBoundingClientRect();
    var x = (e.clientX - rect.left) * (canvas.width / rect.width);
    var y = (e.clientY - rect.top) * (canvas.height / rect.height);

    ctx.fillStyle = colour;
    ctx.fillRect(x,y,1,1);
    disableClick();
    updateCanvas(x, y, colour, user);
    setTimeout(function() {
        enableClick();
    }, 1000);
}

function disableClick() {
    const canvas = document.getElementById("myCanvas");
    canvas.style["pointer-events"] = "none";
}

function enableClick() {
    const canvas = document.getElementById("myCanvas");
    canvas.style["pointer-events"] = "auto";
}

const getCanvas = async () => {
    await axios.get('http://51.132.134.222:3000/canvas/boardState',
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
        
        console.log("success");
    })
    .catch(error => {
        console.log("Didn't get it");
        console.log(error);
    });
}

const updateCanvas = async (x, y, colour, user) => {
    let r = parseInt("0x" + colour.slice(1,3));
    let g = parseInt("0x" + colour.slice(3,5));
    let b = parseInt("0x" + colour.slice(5,7));
    await axios.put('http://51.132.134.222:3000/canvas/drawPixel',
    {
        x: y,
        y: x,
        r: r,
        g: g,
        b: b,
        userId: user
    },
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
    }).then(response => {
        console.log("put: " + x + ", " + y + ", " + r + ", " + g + ", " + b + ", " + user);
    }).catch(error => {
        console.log("not put");
        console.log(error);
    });
}

function Canvas(props) {
    useEffect(() => {
        if (props.user === null) {
            getCanvas();
        }
    });
    
    return (
        <CanvasFrame user={props.user}>
            <CanvasArea id="myCanvas" height='1000' width='1000' user={props.user} onClick={e => draw(e, props.colour, props.user)}></CanvasArea>
        </CanvasFrame>
    );
}

export default Canvas