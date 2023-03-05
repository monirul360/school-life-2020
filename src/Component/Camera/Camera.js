import React, { useRef } from "react";

const Camera = () => {
  const videoRef = useRef(null);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error opening camera:", error);
    }
  };
  return (
    <div>
      <button onClick={openCamera}>Open Camera</button>
      <video ref={videoRef} autoPlay />
    </div>
  );
};

export default Camera;
