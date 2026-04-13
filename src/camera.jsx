import React from 'react'
import { useEffect } from 'react';
import App from './App';
import './App.css'
import './camera.css'
import JSMpeg from 'jsmpeg';

function Camera(){

    useEffect(() => {
        const canvas = document.getElementById('videoCanvas');
        const url = 'ws://192.168.0.113:9999';
        new JSMpeg(url, { canvas: canvas, autoplay: true });
    }, []);

    return (
        <>
            <div id="camera_feed">
                <img src="src/assets/camera_feed_temp.png" alt="video feed temp image"/>
                {/* <canvas id="videoCanvas" width="640" height="480"></canvas> */}
            </div>
        </>
    )
}

export default Camera