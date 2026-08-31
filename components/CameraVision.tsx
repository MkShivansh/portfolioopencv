"use client";

/*
  ============================================================
  CAMERA VISION
  ============================================================

  This component is the foundation of our real-time
  computer-vision system.

  The eventual pipeline will be:

      Camera
        ↓
      Video
        ↓
      Canvas
        ↓
      OpenCV.js
        ↓
      Computer Vision
        ↓
      Visual / Portfolio Interaction

  IMPORTANT:

  At this stage we are ONLY testing the camera.

  We are NOT doing:
  - Face detection
  - Hand detection
  - Gesture recognition
  - Motion detection

  Those will be added after the camera pipeline is reliable.
*/

import { useEffect, useRef, useState } from "react";

export default function CameraVision() {
  /*
    ==========================================================
    REACT REFERENCES
    ==========================================================

    useRef lets us access actual HTML elements.

    We need references to:

    1. <video>
       → Displays the live camera stream.

    2. <canvas>
       → Later this will receive individual video frames
         for OpenCV processing.
  */

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  /*
    ==========================================================
    CAMERA STATE
    ==========================================================

    This tells the UI whether the camera is currently running.
  */

  const [cameraActive, setCameraActive] = useState(false);

  /*
    Stores a human-readable error message if the browser
    refuses access to the camera.
  */

  const [cameraError, setCameraError] = useState<string | null>(
    null
  );

  /*
    ==========================================================
    START CAMERA
    ==========================================================

    navigator.mediaDevices.getUserMedia() is a browser API
    that requests access to the user's camera.

    IMPORTANT:

    The camera stream stays inside the browser.

    We are NOT uploading the camera feed anywhere.
  */

  const startCamera = async () => {
    try {
      /*
        Clear any previous error.
      */

      setCameraError(null);

      /*
        Ask the browser for access to the camera.

        video: true
          → We want video.

        audio: false
          → We do NOT need the microphone.
      */

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      /*
        Make sure the <video> element exists before trying
        to attach the camera stream to it.
      */

      if (!videoRef.current) {
        return;
      }

      /*
        Attach the camera stream to the video element.

        The browser will now display the live camera feed.
      */

      videoRef.current.srcObject = stream;

      /*
        Start playing the video.
      */

      await videoRef.current.play();

      /*
        Tell React that the camera is now active.
      */

      setCameraActive(true);
    } catch (error) {
      /*
        Camera access can fail for several reasons:

        - User denied permission
        - Camera is already being used
        - Browser does not support camera access
        - Page is not considered secure
      */

      console.error("Camera error:", error);

      setCameraError(
        "Camera access was denied or is unavailable."
      );
    }
  };

  /*
    ==========================================================
    STOP CAMERA
    ==========================================================

    When the visitor stops the camera, we must also stop the
    underlying MediaStream tracks.

    Otherwise the camera may continue running in the background.
  */

  const stopCamera = () => {
    /*
      Get the current video element.
    */

    const video = videoRef.current;

    if (!video) {
      return;
    }

    /*
      The srcObject contains the camera MediaStream.
    */

    const stream = video.srcObject as MediaStream | null;

    if (stream) {
      /*
        Stop every track in the stream.

        This releases the physical camera.
      */

      stream.getTracks().forEach((track) => {
        track.stop();
      });
    }

    /*
      Remove the stream from the video element.
    */

    video.srcObject = null;

    /*
      Update React state.
    */

    setCameraActive(false);
  };

  /*
    ==========================================================
    CLEANUP
    ==========================================================

    If the visitor leaves this section/page while the camera
    is running, we should release the camera automatically.
  */

  useEffect(() => {
    return () => {
      const video = videoRef.current;

      if (!video) {
        return;
      }

      const stream = video.srcObject as MediaStream | null;

      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  /*
    ==========================================================
    USER INTERFACE
    ==========================================================
  */

  return (
    <div className="border border-zinc-900 bg-[#0d0d0d]">

      {/* ---------------------------------------------------- */}
      {/* CAMERA HEADER                                        */}
      {/* ---------------------------------------------------- */}

      <div className="flex items-center justify-between border-b border-zinc-900 px-5 py-4">

        <div className="flex items-center gap-3">

          <span
            className={`h-1.5 w-1.5 rounded-full ${
              cameraActive
                ? "bg-red-500"
                : "bg-zinc-700"
            }`}
          />

          <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-600">
            LIVE VISION
          </span>

        </div>

        <span className="font-mono text-[10px] tracking-[0.15em] text-zinc-700">
          LOCAL CAMERA
        </span>

      </div>

      {/* ---------------------------------------------------- */}
      {/* CAMERA VIEWPORT                                      */}
      {/* ---------------------------------------------------- */}

      <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-black md:min-h-[450px]">

        {/*
          The <video> element displays the actual camera feed.

          We use object-cover so the video fills the viewport
          without leaving large empty areas.
        */}

        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`h-full w-full object-cover ${
            cameraActive ? "block" : "hidden"
          }`}
        />

        {/*
          This canvas is currently hidden.

          Later it will become extremely important.

          OpenCV.js will use it to:

              video frame
                    ↓
                 canvas
                    ↓
                OpenCV Mat
                    ↓
               processing
                    ↓
                 canvas
        */}

        <canvas
          ref={canvasRef}
          className="hidden"
        />

        {/*
          Show a placeholder when the camera isn't running.
        */}

        {!cameraActive && (
          <div className="text-center">

            <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-700">
              CAMERA OFFLINE
            </p>

            <p className="mt-3 text-sm text-zinc-600">
              Start the camera to begin
            </p>

          </div>
        )}

      </div>

      {/* ---------------------------------------------------- */}
      {/* CAMERA CONTROLS                                     */}
      {/* ---------------------------------------------------- */}

      <div className="border-t border-zinc-900 p-5">

        {!cameraActive ? (
          <button
            type="button"
            onClick={startCamera}
            className="w-full border border-zinc-700 px-4 py-3 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            Start Camera
          </button>
        ) : (
          <button
            type="button"
            onClick={stopCamera}
            className="w-full border border-zinc-700 px-4 py-3 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            Stop Camera
          </button>
        )}

        {/*
          Display camera errors only when one exists.
        */}

        {cameraError && (
          <p className="mt-3 text-center font-mono text-[9px] text-zinc-600">
            {cameraError}
          </p>
        )}

        {/*
          Privacy explanation.

          This is important because we are requesting access
          to a visitor's physical camera.
        */}

        <p className="mt-4 text-center font-mono text-[9px] tracking-[0.1em] text-zinc-700">
          CAMERA DATA STAYS ON YOUR DEVICE
        </p>

      </div>

    </div>
  );
}