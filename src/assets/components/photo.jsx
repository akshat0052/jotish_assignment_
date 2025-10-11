import React, { useRef, useState } from "react";

export default function Photo() {
  const videoRef = useRef(null);
  const [photo, setPhoto] = useState(null);


  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  const capturePhoto = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 480;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 640, 480);
    setPhoto(canvas.toDataURL("image/png"));
  };

  return (
   <div className="max-w-md mx-auto mt-10 p-6 bg-pink-50 rounded-xl shadow-lg border border-pink-300 text-center">
  <h1 className="text-2xl font-bold text-pink-600 mb-6">Capture Photo</h1>

  {!photo ? (
    <>
      <video
        ref={videoRef}
        autoPlay
        className="mx-auto mb-4 border-4 border-pink-300 rounded-lg shadow-md"
        width="400"
        height="300"
      />
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg shadow-md transition-colors duration-300"
          onClick={startCamera}
        >
          Start Camera
        </button>
        <button
          className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md transition-colors duration-300"
          onClick={capturePhoto}
        >
          Capture
        </button>
      </div>
    </>
  ) : (
    <img
      src={photo}
      alt="Captured"
      className="mx-auto mt-6 border-4 border-pink-300 rounded-lg shadow-md"
    />
  )}
</div>

  );
}
