import React from 'react'
import Webcam from 'react-webcam'
import App from './App';
import './App.css'

function Camera(){

    const VideoConstraints = {
        width: 1280,
        height: 720
    };

    const WebCamComponent = () => (
        <Webcam
            audio={false}
            height={720}
            width={1280}
            videoConstraints={VideoConstraints}
        >
        </Webcam>
    );
    // console.log(WebCamComponent);
    return (
        <>
            <p>TEST</p>
        </>
    )
    // return <WebCam videoConstraints={videoConstraints} />;
}

export default Camera