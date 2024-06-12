import React, { useState, useRef, useEffect,useContext } from "react"
import './ImageCrop.css'
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  convertToPixelCrop
} from "react-image-crop"
import { canvasPreview } from "./canvasPreview"
import { useDebounceEffect } from "./useDebounceEffect"
import "react-image-crop/dist/ReactCrop.css"
// import ImageCropContext from "./ImageCropContext"
import AddDeviceFormContext from "../../screens/Device/AddDevice/AddDeviceContext"
import { useFormikContext } from "formik"

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  )
}

export default function ImageCrop() {
  const {setIsImageSelected, cropedImageFile, setCropedImageFile,selectedImageFile, setSelectedImageFile } = useContext(AddDeviceFormContext);
  const {setFieldValue} = useFormikContext();
  const [imgSrc, setImgSrc] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const previewCanvasRef = useRef(null)
  const imgRef = useRef(null)
  const hiddenAnchorRef = useRef(null)
  const blobUrlRef = useRef("")
  const [crop, setCrop] = useState()
  const [completedCrop, setCompletedCrop] = useState()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const [aspect, setAspect] = useState(1 / 1)


  useEffect(() => {
    // first
    console.log("passed to image crop");
    console.log(selectedImageFile);
    onSelectFile(selectedImageFile)
    // return () => {
    //   second
    // }
  }, [])

  // useEffect(() => {
  //   // first
  //   console.log(cropedImageFile);
  //   // onSelectFile(file)
  //   // return () => {
  //   //   second
  //   // }
  // }, [cropedImageFile])

  function onSelectFile(file) {
    if (file instanceof Blob) {
      setCrop(undefined) // Makes crop preview update between images.
      const reader = new FileReader()
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      )
      reader.readAsDataURL(file)
    }
  }

  // function onSelectFile(file) {
  //   if (file && file.length > 0) {
  //     setCrop(undefined) // Makes crop preview update between images.
  //     const reader = new FileReader()
  //     reader.addEventListener("load", () =>
  //       setImgSrc(reader.result?.toString() || "")
  //     )
  //     reader.readAsDataURL(e.target.files[0])
  //   }
  // }

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  async function onDownloadCropClick() {
    const image = imgRef.current
    const previewCanvas = previewCanvasRef.current
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error("Crop canvas does not exist")
    }

    // This will size relative to the uploaded image
    // size. If you want to size according to what they
    // are looking at on screen, remove scaleX + scaleY
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    
    //When crop size square is not selected then this will show message
   if((completedCrop.width===0 || completedCrop.height===0) ){
    setErrorMessage("Please select crop size of image")
    return;
    // throw new Error("Please select crop image")
   }
    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY
    )
    const ctx = offscreen.getContext("2d")
    if (!ctx) {
      throw new Error("No 2d context")
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height
    )
    // You might want { type: "image/jpeg", quality: <0 to 1> } to
    // reduce image size
    const blob = await offscreen.convertToBlob({
      type: "image/webp"
    })

//Creating file object from blob
    const file = new File([blob], "image.webp", { type: blob.type });
   //Set file object into croped image state
    setCropedImageFile(file);
    //To hide popup set null in Selected Image file
    setSelectedImageFile('');
    // setFieldValue("featureImage",'')
      // setIsImageSelected(false);
    //Some cleanup code 
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current)
    }

    // blobUrlRef.current = URL.createObjectURL(blob)
    // if (hiddenAnchorRef.current) {
    //   hiddenAnchorRef.current.href = blobUrlRef.current
    //   hiddenAnchorRef.current.click()
    //   console.log( hiddenAnchorRef.current);
    // }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        )
      }
    },
    100,
    [completedCrop, scale, rotate]
  )

  function handleToggleAspectClick() {
    if (aspect) {
      setAspect(undefined)
    } else {
      setAspect(16 / 9)

      if (imgRef.current) {
        const { width, height } = imgRef.current
        const newCrop = centerAspectCrop(width, height, 16 / 9)
        setCrop(newCrop)
        // Updates the preview
        setCompletedCrop(convertToPixelCrop(newCrop, width, height))
      }
    }
  }

  return (
    <div className="image-crop-overlay">
      <div className="image-crop-center">
        <div >
          <div className="container">
            {/* <input type="file" accept="image/*" onChange={onSelectFile} /> */}
            {!!imgSrc && (
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={c => setCompletedCrop(c)}
                aspect={aspect}
                // minWidth={400}
                // circularCrop
                minHeight={100}
              >
                <img
                  ref={imgRef}
                  alt="Crop me"
                  src={imgSrc}
                  style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
            )}
            
            <div className="row">
            <div className="scale-input">
              <label htmlFor="scale-input">Scale: </label>
              <input
                id="scale-input"
                type="number"
                step="0.1"
                value={scale}
                disabled={!imgSrc}
                onChange={e => setScale(Number(e.target.value))}
              />
            </div>

            <div className="rotate-input">
              <label htmlFor="rotate-input">Rotate: </label>
              <input
                id="rotate-input"
                type="number"
                value={rotate}
                disabled={!imgSrc}
                onChange={e =>
                  setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
                }
              />
            </div>
            </div>
            {/* <div>
          <button onClick={handleToggleAspectClick}>
            Toggle aspect {aspect ? "off" : "on"}
          </button>
        </div> */}

            {/* {!!imgSrc && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={c => setCompletedCrop(c)}
          aspect={aspect}
          // minWidth={400}
          // circularCrop
          minHeight={100}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={imgSrc}
            style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )} */}
            {!!completedCrop && (
              <>
                <div className="image-preview">
                  <canvas
                    ref={previewCanvasRef}
                    style={{
                      border: "1px solid black",
                      objectFit: "contain",
                      width: completedCrop.width,
                      height: completedCrop.height
                    }}
                  />
                </div>
                <div>
                  <button onClick={onDownloadCropClick} type="button" className="select-image">Select Crop Image</button>
                  {/* <a
                    href="#hidden"
                    ref={hiddenAnchorRef}
                    download
                    style={{
                      position: "absolute",
                      top: "-200vh",
                      visibility: "hidden"
                    }}
                  >
                    Hidden download
                  </a> */}
                  {!!errorMessage && (
                    <div className="error-message"><span>{errorMessage}</span></div>
                  )}
                </div>
              </>
            )}</div>
        </div>
      </div>
    </div>

  )

  // return <></>
}
