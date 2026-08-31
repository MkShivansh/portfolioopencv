"use client";

/*
  Live webcam computer-vision interface.
*/
import CameraVision from "./CameraVision";

/*
  VISION LAB
  ==========

  This is the main container for the Computer Vision section
  of the portfolio.

  IMPORTANT:
  At this stage, this is only the UI shell.

  We are NOT processing images yet.

  Later, this component will contain:
  - Image upload
  - OpenCV.js processing
  - Grayscale
  - Blur
  - Threshold
  - Canny edge detection
  - Webcam processing
  - Motion detection

  We are building the UI first so that we can test the
  layout independently from the computer-vision logic.
*/


import { useState } from "react";

export default function VisionLab() {
    /*
        Stores the selected image as a browser Data URL.

        The image remains on the visitor's device and is not
        uploaded to a server.

        Example:

        User selects photo.jpg
                ↓
        Browser creates a temporary URL
                ↓
        imageUrl = "blob:..."
                ↓
        <img> displays it
    */

    /*
        Stores the selected image as a browser Data URL.
    */
    const [imageUrl, setImageUrl] = useState<string | null>(null);


    /*
        Handles the image selected by the visitor.

        Instead of creating a temporary "blob:" URL, we read the
        image directly into the browser as a Data URL.

        This is slightly more compatible with mobile browsers
        because the resulting image URL is self-contained.

        IMPORTANT:
        The image is still processed locally.
        Nothing is uploaded to a server.
    */
    
    /*
    ============================================================
    NATIVE FILE INPUT LISTENER
    ============================================================

    We are deliberately listening to the browser's native
    "change" event instead of React's onChange handler.

    This gives mobile browsers a direct DOM-level path:

        Phone Gallery
            ↓
        Native <input>
            ↓
        Native change event
            ↓
        handleImageUpload()
            ↓
        React state
            ↓
        Image preview

    This is specifically useful for troubleshooting the
    mobile file-picker behavior we are seeing.
    */

    /*
        Handles the image selected by the visitor.

        FileReader converts the selected local image into a Data URL.

        The image never leaves the visitor's device.
    */
    const handleImageUpload = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];

        /*
            Stop if the visitor cancelled the file picker.
        */
        if (!file) {
            return;
        }

        /*
            Only allow image files.
        */
        if (!file.type.startsWith("image/")) {
            return;
        }

        /*
            Read the image locally.
        */
        const reader = new FileReader();

        /*
            Once the browser finishes reading the image,
            store the result in React state.
        */
        reader.onload = () => {
            if (typeof reader.result === "string") {
            setImageUrl(reader.result);
            }
        };

        /*
            Convert the local image into a browser-readable
            Data URL.
        */
        reader.readAsDataURL(file);
        };



    /*
        Main section.

        The id allows the navbar to navigate directly to the
        Vision Lab using:

            #vision

        "scroll-mt-24" prevents the navbar from covering the
        heading when the visitor jumps to this section.
    */
   return(
    <section
      id="vision"
      className="mx-auto max-w-7xl px-6 py-32 md:px-10"
    >

      {/* 
        ======================================================
        SECTION HEADER
        ======================================================
      */}

      <div className="mb-16">

        {/* Small section identifier */}
        <p className="font-mono text-xs tracking-[0.3em] text-zinc-600">
          03 — VISION LAB
        </p>

        {/* Main heading */}
        <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Computer vision,
          <br />
          <span className="text-zinc-600">
            running in the browser.
          </span>
        </h2>

        {/* Short explanation */}
        <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
          A small interactive computer-vision playground built
          with browser-based processing. Experiment with image
          transformations and see the results instantly.
        </p>

      </div>


      {/* 
        ======================================================
        VISION LAB WORKSPACE
        ======================================================

        This is currently a visual placeholder.

        The actual image-processing engine will be connected
        in the next steps.
      */}

      <div className="border border-zinc-900 bg-[#0d0d0d]">

        {/* 
          ----------------------------------------------------
          WORKSPACE HEADER
          ----------------------------------------------------
        */}
        <div className="flex items-center justify-between border-b border-zinc-900 px-5 py-4">

          <div className="flex items-center gap-3">

            {/* Small status indicator */}
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />

            <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-600">
              VISION ENGINE
            </span>

          </div>

          <span className="font-mono text-[10px] tracking-[0.15em] text-zinc-700">
            BROWSER / LOCAL
          </span>

        </div>


        {/* 
          ----------------------------------------------------
          MAIN WORKSPACE
          ----------------------------------------------------

          Two-column layout on desktop.

          On mobile it becomes a single column.
        */}
        <div className="grid md:grid-cols-[1fr_280px]">

          {/* 
            ==================================================
            IMAGE VIEWPORT
            ==================================================
          */}
          <div className="relative flex min-h-[360px] items-center justify-center border-b border-zinc-900 p-6 md:min-h-[500px] md:border-b-0 md:border-r">

            {/* 
              Placeholder grid.

              This will eventually be replaced by the actual
              uploaded image or webcam feed.
            */}
            <div
              className="absolute inset-6 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Empty viewport */}
            {/*
                IMAGE VIEWPORT

                If there is no selected image:
                    Show the "NO INPUT" placeholder.

                If an image has been selected:
                    Display that image inside the viewport.

                This conditional rendering is controlled by imageUrl.
            */}
                <div className="relative flex h-64 w-full max-w-xl items-center justify-center overflow-hidden border border-dashed border-zinc-800 md:h-80">

                    {imageUrl ? (

                        /*
                            Selected image.

                            "object-contain" ensures the entire image remains
                            visible without being cropped.

                            "max-h-full max-w-full" prevents large images from
                            overflowing the viewport.
                        */
                        <img
                            src={imageUrl}
                            alt="Selected image for computer vision processing"
                            className="max-h-full max-w-full object-contain"
                        />
                    ) : (

                        /*
                            No image selected yet.
                        */
                        <div className="text-center">

                            <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-700">
                                NO INPUT
                            </p>

                            <p className="mt-3 text-sm text-zinc-600">
                                Upload an image to begin
                            </p>

                        </div>

                    )}

                </div>

          </div>


          {/* 
            ==================================================
            CONTROL PANEL
            ==================================================
          */}
          <div className="flex flex-col">

            {/* Panel heading */}
            <div className="border-b border-zinc-900 px-5 py-5">

              <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-600">
                PROCESSING MODE
              </p>

              <p className="mt-2 text-sm text-zinc-300">
                Select an operation
              </p>

            </div>


            {/* 
              Operation buttons.

              These are currently visual only.

              We will make them functional once OpenCV.js
              is connected.
            */}
            <div className="flex flex-col">

              <button
                type="button"
                className="border-b border-zinc-900 px-5 py-4 text-left text-sm text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                Grayscale
              </button>

              <button
                type="button"
                className="border-b border-zinc-900 px-5 py-4 text-left text-sm text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                Blur
              </button>

              <button
                type="button"
                className="border-b border-zinc-900 px-5 py-4 text-left text-sm text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                Threshold
              </button>

              <button
                type="button"
                className="border-b border-zinc-900 px-5 py-4 text-left text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                Canny Edges
              </button>

            </div>


            {/* 
                Input controls.

                The image upload control is now connected.
                The selected image is handled locally in the browser.
            */}
            <div className="mt-auto p-5">
                {/*
                    ============================================================
                    IMAGE UPLOAD
                    ============================================================

                    We are intentionally using the browser's native file input
                    here.

                    This removes the hidden-input + label interaction from the
                    equation and gives mobile browsers a completely standard
                    file-upload control.
                */}
                <input
                    id="vision-image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="block w-full cursor-pointer text-xs text-zinc-500 file:mr-4 file:border file:border-zinc-700 file:bg-transparent file:px-4 file:py-3 file:text-xs file:text-zinc-300"
                />

                <p className="mt-3 text-center font-mono text-[9px] tracking-[0.1em] text-zinc-700">
                    PROCESSING STAYS ON YOUR DEVICE
                </p>

                {/*
                    TEMPORARY DEBUG STATUS

                    We'll remove this once the upload works correctly.
                */}
                {/* <p className="mt-2 text-center font-mono text-[9px] text-zinc-600">
                    {uploadStatus}
                </p>

                <p className="mt-3 text-center font-mono text-[9px] tracking-[0.1em] text-zinc-700">
                    PROCESSING STAYS ON YOUR DEVICE
                </p> */}

            </div>

          </div>

        </div>


        {/* 
          ----------------------------------------------------
          WORKSPACE FOOTER
          ----------------------------------------------------
        */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-900 px-5 py-4">

          <span className="font-mono text-[9px] tracking-[0.15em] text-zinc-700">
            OPENCV / IMAGE PROCESSING
          </span>

          <span className="font-mono text-[9px] tracking-[0.15em] text-zinc-700">
            LOCAL PROCESSING
          </span>

        </div>

      </div>

        {/* 
            ============================================================
            LIVE CAMERA MODE
            ============================================================

            This is separate from image upload.

            Upload mode:
                Image → OpenCV

            Camera mode:
                Webcam → Video → OpenCV

            Keeping them separate makes the Vision Lab easier to
            understand and easier to expand later.
        */}

        <div className="mt-16">

            <p className="mb-6 font-mono text-[10px] tracking-[0.2em] text-zinc-600">
                03.1 — LIVE CAMERA
            </p>

            <CameraVision />

        </div>
    </section>
  );
}