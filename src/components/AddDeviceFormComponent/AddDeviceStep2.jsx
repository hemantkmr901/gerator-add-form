import { ChevronLeft1 } from "../../icons/ChevronLeft1";
import { StepIconBase27 } from "../../icons/StepIconBase27";
import { ButtonsButton } from "../ButtonsButton";

import { Field, Formik, useField, useFormikContext, getIn } from "formik";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { FileTypeDefaultImageTypeSolid } from "../../icons/FileTypeDefaultImageTypeSolid";
import { UploadCloud022 } from "../../icons/UploadCloud022";
import AddDeviceFormContext from "../../screens/Device/AddDevice/AddDeviceContext";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import { FeaturedIcon } from "../FeaturedIcon";
import { ProgressBar } from "../ProgressBar";
import { StepBase } from "../StepBase";
import { updateField } from "./AddDeviceSlice";
import { MySelect, MyTextInput } from "./AddDeviceStep1";
import { updateAppDataDevice } from "./AppDataDeviceSlice";
import ImageCrop from "../ImageCropComponent/ImageCrop";
import { XClose31 } from "../../icons/XClose31";





const FileUpload = ({ validate, ...props }) => {
  const [field, meta] = useField(props);

  let fieldValidationData = "";
  if (validate?.length > 0) {
    validate.some(field => { // Use 'some' for early termination
      if (field.path === "featureImageObject") {
        fieldValidationData = field;
        return true; // This will stop the loop early
      }
      return false; // Continue if no match
    });
  }

  if (fieldValidationData != "") {
    // console.log(fieldValidationData);
  }
  // {
  //   fieldValidationData !== '' ? (
  //     <div className="error">{fieldValidationData.msg}</div>
  //   ) : null
  // }

  return (
    <div>
      <label htmlFor="featureImage" className="featurImageLabel">
        <ButtonsButton
          className="buttons-button-3"
          hierarchy="link-color"
          icon="default"
          iconLeading={false}
          iconTrailing={false}
          size="md"
          stateProp="default"
          text="Click to upload"
          textPaddingClassName="buttons-button-2"
        /></label>
      <input type="file" accept="image/*" {...field} {...props} />
      <div className="action custom-action">

        {/* <br/> */}
        <div className="text-28">or drag and drop</div>
      </div>
      <p className="supporting-text-10">PNG, JPG or GIF (max. 800x400px)</p>{" "}
      {/* {requiredWarning.isRequired && (
        <div>
          <div style={{ color: "red" }}>
            {requiredWarning.message}
          </div>
        </div>
      )} */}
      {meta.touched && meta.error === "A file is required" ? (
        <div style={{ color: "red", textAlign: "center" }}>{meta.error}</div>
      ) : null}
      {fieldValidationData !== "" ? (
        <div className="error">{fieldValidationData.msg}</div>
      ) : null}
    </div>
  );
};


const MultiFileUpload = ({ validate, maxFileWarning, minFileWarning, ...props }) => {
  const [field, meta] = useField(props);
  let fieldValidationData = "";
  if (validate?.length > 0) {
    validate.some(field => { // Use 'some' for early termination
      if (field.path === "galleryImageObject") {
        fieldValidationData = field;
        return true; // This will stop the loop early
      }
      return false; // Continue if no match
    });
  }

  if (fieldValidationData != "") {
    // console.log(fieldValidationData);
  }
  // {
  //   fieldValidationData !== null ? (
  //     <div className="error">{fieldValidationData.msg}</div>
  //   ) : null
  // }

  return (
    <div>
      <label htmlFor="gallery" className="featurImageLabel">
        <ButtonsButton
          className="buttons-button-3"
          hierarchy="link-color"
          icon="default"
          iconLeading={false}
          iconTrailing={false}
          size="md"
          stateProp="default"
          text="Click to upload"
          textPaddingClassName="buttons-button-2"
        /></label>
      <input type="file" multiple accept="image/*" {...field} {...props} />
      <div className="action custom-action">

        {/* <br/> */}
        <div className="text-28">or drag and drop</div>
      </div>
      <p className="supporting-text-10">PNG, JPG or GIF (max. 800x400px)</p>{" "}

      {maxFileWarning.isMaxImage && (
        <div>
          <div style={{ color: "red" }}>
            {maxFileWarning.message}
          </div>
        </div>
      )}
      {minFileWarning.isMinImage && (
        <div>
          <div style={{ color: "red" }}>
            {minFileWarning.message}
          </div>
        </div>
      )}

      {fieldValidationData !== "" ? (
        <div className="error">{fieldValidationData.msg}</div>
      ) : null}


      {/* {meta.touched && meta.error === "At least three image is required" ? (
        <div style={{ color: "red", textAlign: "center" }}>{meta.error}</div>
      ) : null} */}

    </div>
  );
};




const AddDeviceStep2 = () => {

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.addDevice);
  const appData = useSelector((state) => state.appDataAddDevice);

  // ------------ Feature Image Hooks ---------------------

  //This hook will store error message of featureImage 
  const [imageSingleCheckboxError, setImageSingleCheckboxError] = useState("");
  //This hook will store image file if uploaded image have some validation error on FeatureImage 
  const [featureImageDemoFile, setFeatureImageDemoFile] = useState("");

  // ------------ Gallery Image Hooks ---------------------

  //This hook will store boolean value if uploaded image has total 10 image validation exceeding
  const [maxFileValidation, setMaxFileValidation] = useState({ message: "Max 5 Files are allowed to upload.", isMaxImage: false });

  const [minFileValidation, setMinFileValidation] = useState({ message: "Min 3 Files are allowed to upload.", isMinImage: false })

  //This hook will store all error message of all uploaded images. using when showing error message on image card.
  const [imageMultiCheckboxError, setImageMultiCheckboxError] = useState([]);

  // ------------ Formik Methods to manage form flow ---------------------
  const { values, validateForm, setFieldValue, setFieldError, setErrors, setFieldTouched, validateField, errors, isValid, dirty, touched } = useFormikContext();

  // ------------ Form Context getting from Adddeviceparent.jsx ---------------------
  const { backendValidation, allTaxonomy } = useContext(AddDeviceFormContext);
  const { isImageSelected, setIsImageSelected, selectedMultiImageFile, setSelectedMultiImageFile, selectedImageFile, setSelectedImageFile, cropedImageFile, setCropedImageFile } = useContext(AddDeviceFormContext);

  // ------------ These refs used to manage radio field state ---------------------
  const inputYoutubeRef = useRef(null);
  const inputVimeoRef = useRef(null);


  /* 
      This useEffect will provide updated values from formik and run some conditions Used on FeatureImage
  */
  useEffect(() => {
    console.log("Values useEffect Open");

    if (touched.featureImage) {
      if (errors.featureImage && values.featureImage !== "") {
        console.log("Values Error UseEffect");
        handleSelectedImageFile("error");
        return; // Exit useEffect to avoid further actions if there are errors
      }

      // 2. Proceed with Updates if No Errors:
      if (touched.featureImage && values.featureImage != "") {
        console.log("Values Touch UseEffect");
        // setGalleryImageFile([...values.gallery]);
        handleSelectedImageFile("no-error");
      }
    }
    // 1. Check for Errors FIRST:

    console.log("Values useEffect Closed ");
    // }

  }, [values.featureImage, errors.featureImage]);


  /* 
    This useEffect will provide updated values from formik and run some conditions Used on Gallery Image
*/
  useEffect(() => {
    console.log("Values useEffect Open");

    //BELOWE CODE IS FOR GALLERY IMAGES
    if (touched.gallery) {
      if (errors.gallery && values.gallery.length > 0) {
        console.log("Values Error UseEffect");
        handleSelectedMultiImageFile("error");
        return; // Exit useEffect to avoid further actions if there are errors
      }

      // 2. Proceed with Updates if No Errors:
      if (touched.gallery && values.gallery[0] != null) {
        console.log("Values Touch UseEffect");
        // setGalleryImageFile([...values.gallery]);
        handleSelectedMultiImageFile("no-error");
      }
    }
    // 1. Check for Errors FIRST:

    console.log("Values useEffect Closed ");


  }, [values, errors.gallery]);

  //Added For loggin purposes
  useEffect(() => {
    console.log("Errors in image checkbox");
    console.log(imageMultiCheckboxError);
  }, [imageMultiCheckboxError])




  //onChange handle method for featureImage where populating image
  const handleSelectedImageFile = async (type) => {

    console.log("HandleSelectedImageFile Called " + type);

    setFieldTouched("featureImage", true); // Always touch the field for validation

    console.log(errors);

    // 3. Additional Error Check:
    if (errors.featureImage) {
      console.log("Inside errors.gallery is true means error found ");
      if (cropedImageFile !== '') setCropedImageFile('')
      setSelectedImageFile('');
      setFeatureImageDemoFile(values.featureImage);
      setImageSingleCheckboxError(errors.featureImage);
      return; // Don't proceed with upload if there's an error
    }

    // 4. Proceed with Upload if No Errors:
    console.log("Inside !errors.gallery is true means no error found");
    setFeatureImageDemoFile('');
    setImageSingleCheckboxError('');
    if (cropedImageFile === '') setSelectedImageFile(values.featureImage);
    console.log("File added into select multi image hook");

  }



  //onClick handle method For featureImage remove
  const handleImageCheckbox = async (e) => {

    //If croped Image hook has some data then clean up 
    if (cropedImageFile !== '') setCropedImageFile('');
    //If errors.featureImage has some errors then filter then set featureImage to "", clear other field as well
    if (errors.featureImage) {
      console.log(errors.featureImage);
      const filteredErrors = Object.keys(errors).reduce((acc, fieldName) => {
        // Filter based on your condition (replace with your actual logic)
        if (fieldName !== 'featureImage') {
          acc[fieldName] = errors[fieldName];
        }
        return acc;
      }, {});
      console.log(filteredErrors);
      await setFieldValue("featureImage", '');
      setErrors(filteredErrors)
      setFeatureImageDemoFile('');
      setImageSingleCheckboxError('');
    } else {

      await setFieldValue("featureImage", '');
      setFeatureImageDemoFile('');
      setImageSingleCheckboxError('');
    }
  }

  const handleSelectedMultiImageFile = async (type) => {
    console.log("HandleSelectedMultiImageFile Called " + type);

    setFieldTouched("gallery", true); // Always touch the field for validation

    console.log(errors);

    // 3. Additional Error Check:
    if (errors.gallery) {
      console.log("Inside errors.gallery is true means error found 435");
      setSelectedMultiImageFile(values.gallery);
      setImageMultiCheckboxError(errors.gallery);
      return; // Don't proceed with upload if there's an error
    }

    // 4. Proceed with Upload if No Errors:
    console.log("Inside !errors.gallery is true means no error found 435");
    setSelectedMultiImageFile(values.gallery);
    console.log("File added into select multi image hook");
  };


  //onClick handle method For gallery image remove one by one
  const handleImageMultiCheckbox = async (indexToRemove) => {
    await setSelectedMultiImageFile(selectedMultiImageFile => selectedMultiImageFile.filter((_, index) => index !== indexToRemove));

    const gallery = values.gallery;
    gallery.splice(indexToRemove, 1)

    if (imageMultiCheckboxError.length !== 0) {
      const errorMessages = imageMultiCheckboxError;
      errorMessages.splice(indexToRemove, 1);
      setImageMultiCheckboxError(errorMessages);
    }

    console.log("handleImageMultiCheckbox index removed :" + indexToRemove);
    console.log(gallery);

    if (gallery.length !== 0) {
      const filteredErrors = Object.keys(errors).reduce((acc, fieldName) => {
        // Filter based on your condition (replace with your actual logic)
        if (fieldName !== 'gallery') {
          acc[fieldName] = errors[fieldName];
        }
        return acc;
      }, {});
      setErrors(filteredErrors)
      await setFieldValue('gallery', gallery);

      //Custom Max Min file check validation.
      customValidation();
      console.log("handleImageMultiCheckbox working.....");
      return;
    } else {
      setFieldValue('gallery', []);
    }

    console.log("handleImageMultiCheckbox closed.....");

  }

  //This handle method used to capture input entered text and save them into redux state
  const handleChange = async (event) => {
    const { name, value } = event.target;
    console.log("handle change called");

    if (name === 'featureImage') {
      const file = event.target.files[0];
      console.log('\x1b[36m%s\x1b[0m', "inside handle change called");
      setFieldValue(name, file);
      setFieldTouched("featureImage", true);
      return;
    }

    if (name === 'gallery') {

      console.log("Gallery new File uploading.....................");
      console.log(event.target.files);
      const filesObject = event.target.files;
      const fileObjects = Array.from(filesObject).map(file => ({
        file: file, // Store the original file object
      }));
      let fileLength = values.gallery.length + fileObjects.length;

      (fileLength < 3) ? setMinFileValidation(prev => ({ ...prev, isMinImage: true }))
        : setMinFileValidation(prev => ({ ...prev, isMinImage: false }))
      // if (fileLength < 3) {
      //   setMinFileValidation((prevState) => ({
      //     ...prevState,    // Copy all existing properties
      //     isMinImage: true // Update isMaxImage
      //   }));

      // } else {
      //   setMinFileValidation((prevState) => ({
      //     ...prevState,    // Copy all existing properties
      //     isMinImage: false // Update isMaxImage
      //   }));
      // }
      if (fileLength <= 5) {
        maxFileValidation.isMaxImage && setMaxFileValidation(prev => ({ ...prev, isMaxImage: false }));
        setFieldTouched("gallery", true);
        await setFieldValue(name, [...values.gallery, ...fileObjects]);
      } else {
        setMaxFileValidation(prev => ({ ...prev, isMaxImage: true }));
      };
      console.log("Values updated........");
      return;
    }

    console.log("handle change closed");

    setFieldValue(name, value);
    dispatch(updateField({ field: name, value }));

  };

  //onClick Listener on input radio tag(video/youtube)
  useEffect(() => {
    if (inputYoutubeRef.current) {
      inputYoutubeRef.current.addEventListener('click', handleClickYoutube);
    }
    return () => { // Add a cleanup function
      if (inputYoutubeRef.current) {
        inputYoutubeRef.current.removeEventListener('click', handleClickYoutube);
      }
    }
  }, []);

  //onClick Listener on input radio tag(video/vimeo)
  useEffect(() => {
    if (inputVimeoRef.current) {
      inputVimeoRef.current.addEventListener('click', handleClickVimeo);
    }
    return () => { // Add a cleanup function
      if (inputVimeoRef.current) {
        inputVimeoRef.current.removeEventListener('click', handleClickVimeo);
      }
    }
  }, []);


  //Click method for Youtube radio
  const handleClickYoutube = (e) => {
    // Reset Vimeo when Youtube is clicked
    dispatch(updateAppDataDevice({ case: "VIDEO", field: "isVimeoChecked", value: false }))
    dispatch(updateAppDataDevice({ case: "VIDEO", field: "isYoutubeChecked", value: true }))
    dispatch(updateAppDataDevice({ case: "VIDEO", field: "myfieldinsideradio", value: true }))
  };

  //Click method for Vimeo radio
  const handleClickVimeo = (e) => {
    // Reset Youtube when Vimeo is clicked
    dispatch(updateAppDataDevice({ case: "VIDEO", field: "isYoutubeChecked", value: false }))
    dispatch(updateAppDataDevice({ case: "VIDEO", field: "isVimeoChecked", value: true }))
    dispatch(updateAppDataDevice({ case: "VIDEO", field: "myfieldinsideradio", value: true }))
  };

  //This method used to decrement current step of form and update state in appData reducer
  const prev = () => {
    // dispatch(updateField({transactionType:"Nothing"}));
    dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: (appData.currentStep - 1) }))
  }

  //This method used to increment current step of form and update state in appData reducer
  const next = async () => {

    // dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: appData.currentStep + 1 }));


    const errors = await validateForm();
    dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: appData.currentStep + 1 }));

    //Check all condition regarding validation and errors then go to next step
    // if (values.gallery.length >= 3 && values.gallery.length <= 5 && (!Object.keys(errors).length)) {
    //   dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: appData.currentStep + 1 }));
    // }

    //Below code make field touch so error will be visible on form 
    // for (const key in errors) {
    //   setFieldTouched(key, true);
    // }

    // This will check if images are uploaded. if yes then how much if that is less than 3 then show validation message
    // setMinFileValidation(prev => ({ ...prev, isMinImage: values.gallery.length < 3 }));

  };


  // if (cropedImageFile !== '') {
  //   console.log("Croped image has something " + (cropedImageFile !== ''));
  //   const filteredErrors = Object.keys(errors).reduce((acc, fieldName) => {
  //     if (fieldName !== 'featureImage') {
  //       acc[fieldName] = errors[fieldName];
  //     }
  //     return acc;
  //   }, {});
  //   setErrors(filteredErrors)
  // }


  const customValidation = () => {
    //gallery length is less than 3 then save true
    setMinFileValidation(prev => ({ ...prev, isMinImage: values.gallery.length < 3 }));

    //If isMaxImage is true then save value to false
    maxFileValidation.isMaxImage && setMaxFileValidation(prev => ({ ...prev, isMaxImage: false }));

  }

  return (
    <>
      <div className="group-5">
        <div className="container-3">
          <div className="div-5">
            <div className="content-14">
              <div className="text-and-supporting-5">
                <div className="text-24">Highlights</div>
              </div>
            </div>
            <img className="divider-3" alt="Divider" src="/img/divider-2.svg" />
          </div>
          <div className="frame-4">
            <div className="input-field-5">
              <div className="input-with-label-2">

                <MyTextInput
                  label="Hardware - Highlights"
                  name="hardwareHighlights"
                  id="hardwareHighlights"                                                          //New Code
                  type="text"
                  validate={backendValidation}
                  onChange={handleChange}
                  value={formData.hardwareHighlights}
                  placeholder="190 characters"
                />

              </div>
            </div>
          </div>
          <div className="frame-4">
            <div className="input-field-5">
              <div className="input-with-label-2">

                <MyTextInput
                  label="Software / Upgrades / OS / Applications / Worklist - Highlights"
                  name="softwareUpgradesOsApplicationsworklistHighlights"                                                          //New Code
                  id="softwareUpgradesOsApplicationsworklistHighlights"                                                          //New Code
                  type="text"
                  validate={backendValidation}
                  onChange={handleChange}
                  value={formData.softwareUpgradesOsApplicationsworklistHighlights}
                  placeholder="190 characters"
                />


              </div>
            </div>
          </div>
          <div className="frame-4">
            <div className="input-field-5">
              <div className="input-with-label-2">


                <MyTextInput
                  label="Accessories - Highlights"
                  name="accessoriesHighlights"                                                          //New Code
                  id="accessoriesHighlights"                                                          //New Code
                  type="text"
                  onChange={handleChange}
                  validate={backendValidation}
                  value={formData.accessoriesHighlights}
                  placeholder="190 characters"
                />

              </div>
            </div>
          </div>
          <div className="frame-4">
            <div className="input-field">
              <div className="input-with-label-2">
                <p className="label">
                  <span className="span">Featured Image </span>
                  <span className="text-wrapper-3">*</span>
                </p>
              </div>
              <div className="file-upload-base">
                <div className="content-19">
                  <FeaturedIcon
                    className="featured-icon"
                    color="gray"
                    icon={<UploadCloud022 className="upload-cloud" />}
                    size="md"
                    type="modern"
                  />

                  {/* imageRef={fileImageRef} */}
                  <FileUpload key={selectedImageFile ? selectedImageFile.name : Date.now()} name="featureImage" id="featureImage" validate={backendValidation} onChange={handleChange} value={undefined} />
                  {(selectedImageFile instanceof File) && (
                    <ImageCrop />
                  )}
                </div>
              </div>
              {

                (typeof cropedImageFile === 'object' && cropedImageFile !== "") && (
                  <div className="file-upload-item">
                    <div className="content-20">
                      <FileTypeDefaultImageTypeSolid
                        fileType="document-PDF"
                        fileTypeClassName="file-type-icon-2"
                        fileTypeImageImgClassName="design-component-instance-node"
                        fileTypeWrapClassName="file-type-icon-instance"
                        type="default"
                      />

                      <div className="content-21">
                        <div className="text-and-supporting-7">
                          <div className="text-29">{cropedImageFile.name}</div>
                          <div className="supporting-text-11">{(cropedImageFile.size / 1000).toFixed(1) + " KB"} </div>
                        </div>
                        {(imageSingleCheckboxError !== "") ?
                          <div style={{ color: "red" }}>
                            {imageMultiCheckboxError}
                          </div> :
                          <ProgressBar
                            className="progress-bar-instance"
                            label="right"
                            percentageClassName="progress-bar-4"
                            progress="one-hundred"
                            progressBarClassName="progress-bar-2"
                            progressClassName="progress-bar-3"
                          />
                        }
                        {/* <ProgressBar
                          className="progress-bar-instance"
                          label="right"
                          percentageClassName="progress-bar-4"
                          progress="one-hundred"
                          progressBarClassName="progress-bar-2"
                          progressClassName="progress-bar-3"
                        /> */}
                      </div>
                    </div>
                    <Field type="checkbox" onClick={handleImageCheckbox} name="imageCheckbox" checked className="checkbox-instance checkbox-base size-30-sm state-8-default checked-true type-checkbox checkbox-2"></Field>
                  </div>
                )

              }



              {
                (featureImageDemoFile instanceof File) && (
                  <div className="file-upload-item">
                    <div className="content-20">
                      <FileTypeDefaultImageTypeSolid
                        fileType="document-PDF"
                        fileTypeClassName="file-type-icon-2"
                        fileTypeImageImgClassName="design-component-instance-node"
                        fileTypeWrapClassName="file-type-icon-instance"
                        type="default"
                      />

                      <div className="content-21">
                        <div className="text-and-supporting-7">
                          <div className="text-29">{featureImageDemoFile.name}</div>
                          <div className="supporting-text-11">{(featureImageDemoFile.size / 1000).toFixed(1) + " KB"} </div>
                        </div>
                        {(imageSingleCheckboxError !== "") ?
                          <div style={{ color: "red" }}>
                            {imageSingleCheckboxError}
                          </div> :
                          <ProgressBar
                            className="progress-bar-instance"
                            label="right"
                            percentageClassName="progress-bar-4"
                            progress="one-hundred"
                            progressBarClassName="progress-bar-2"
                            progressClassName="progress-bar-3"
                          />
                        }
                      </div>
                    </div>
                    <Field type="checkbox" onClick={handleImageCheckbox} name="imageCheckbox" checked className="checkbox-instance custom-checkbox"></Field>
                  </div>

                )
              }
            </div>
            <div className="input-field">
              <div className="input-with-label-2">
                <p className="label">
                  <span className="span">Gallery&nbsp;&nbsp;</span>
                  <span className="text-wrapper-3">*</span>
                </p>
              </div>
              <div className="file-upload-base">
                <div className="content-19">
                  <FeaturedIcon
                    className="featured-icon"
                    color="gray"
                    icon={<UploadCloud022 className="upload-cloud" />}
                    size="md"
                    type="modern"
                  />

                  {/* multi_imageRef={multiImageRef} */}
                  <MultiFileUpload name="gallery" id="gallery" onChange={handleChange} validate={backendValidation} maxFileWarning={maxFileValidation} minFileWarning={minFileValidation} value={[undefined]} />
                </div>
              </div>
              {
                (typeof selectedMultiImageFile === 'object' && selectedMultiImageFile.length !== 0) && (
                  selectedMultiImageFile?.map((imageObject, index) => (
                    <div className="file-upload-item" key={index}>
                      <div className="content-20">
                        <FileTypeDefaultImageTypeSolid
                          fileType="document-PDF"
                          fileTypeClassName="file-type-icon-2"
                          fileTypeImageImgClassName="design-component-instance-node"
                          fileTypeWrapClassName="file-type-icon-instance"
                          type="default"
                        />
                        <div className="content-21">
                          <div className="text-and-supporting-7">
                            <div className="text-29">{imageObject.file.name}</div>
                            <div className="supporting-text-11">{(imageObject.file.size / 1000).toFixed(1) + " KB"} </div>
                          </div>
                          {(imageMultiCheckboxError[index]) ?
                            <div key={index} style={{ color: "red" }}>
                              {imageMultiCheckboxError[index]}
                            </div> :
                            <ProgressBar
                              className="progress-bar-instance"
                              label="right"
                              percentageClassName="progress-bar-4"
                              progress="one-hundred"
                              progressBarClassName="progress-bar-2"
                              progressClassName="progress-bar-3"
                            />
                          }
                        </div>

                      </div>
                      {(imageMultiCheckboxError[index]) ?
                        <Field type="checkbox" onClick={() => handleImageMultiCheckbox(index)} name="imageMultiCheckbox" checked className="checkbox-instance custom-checkbox"></Field> : <Field type="checkbox" onClick={() => handleImageMultiCheckbox(index)} name="imageMultiCheckbox" checked className="checkbox-instance checkbox-base size-30-sm state-8-default checked-false type-checkbox checkbox-2"></Field>}


                    </div>
                  ))

                )
              }

            </div>
          </div>
          <div className="frame-4">
            <div className="input-field">
              <div className="input-with-label-2">


                <p className="label">
                  <span className="span">Video </span>
                </p>
              </div>
              <div className="frame-6">
                <div className="buttons-button-4">
                  <div className="text-padding-3">
                    <label className="label" htmlFor="youtube">
                      Youtube
                      <Field type="radio" id="youtube" name="videoType" value="Youtube" innerRef={inputYoutubeRef} checked={appData.isYoutubeChecked} />
                    </label>
                  </div>
                </div>
                <div className="buttons-button-4">
                  <div className="text-padding-3">
                    <label className="label" htmlFor="vimeo">
                      Vimeo
                      <Field type="radio" id='vimeo' name="videoType" value="Vimeo" innerRef={inputVimeoRef} checked={appData.isVimeoChecked} />
                    </label>
                  </div>
                </div>
              </div>
              {appData.myfieldinsideradio && (
                <Field type="text" name="linkVideo" onChange={handleChange} validate={backendValidation} value={formData.linkVideo} className="text-input text-25 content-15 myinputfield" />
              )}

            </div>
          </div>
          <div className="frame-5">
            <div className="form">
              <div className="divider-4" />
              <div className="div-5">
                <div className="content-14">
                  <div className="text-and-supporting-5">
                    <p className="text-24">Current Location Of the Device ?</p>
                  </div>
                </div>
                <img className="divider-3" alt="Divider" src="/img/divider-2.svg" />
              </div>
              <div className="input-field-6">
                <div className="input-with-label-2">

                  <MySelect label="Select one from the saved addresses " validate={backendValidation} name="location" id="location" onChange={handleChange} value={formData.location}>
                    <option value="0">Select From Dropdown list </option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                  </MySelect>

                </div>
                <p className="hint-text">
                  <span className="text-wrapper-5">Cant find an address? </span>
                  <span className="text-wrapper-6">Add it.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="section-footer">
            <div className="section-footer">
              <img className="divider-5" alt="Divider" src="/img/divider-2.svg" />
              <div className="content-18">
                <div className="actions">
                  <button onClick={prev} className="button-2">
                    <ChevronLeft1 className="icon-instance-node-2" />
                    <div className="text-padding-2">
                      <div className="text-31">Back</div>
                    </div>
                  </button>
                  <button className="button" type="button" onClick={next}>
                    <img className="icon-instance-node-2" alt="Save" src="/img/save-02.svg" />
                    <div className="text-padding-2">
                      <div className="text-23">Save &amp; Proceed</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-9">
        <div className="content-22">
          <div className="frame">
            <div className="text-19">Form</div>
            <img className="icon-instance-node-2" alt="Arrow narrow left" src="/img/arrow-narrow-left.svg" />
          </div>
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="step-base-10">
                <div className="connector-wrap-2">
                  <StepIconBase27 className="step-icon-base-5" />
                  <div className="connector-4" />
                </div>
                <div className="text-and-supporting-3">
                  <div className="text-20">Basic Information</div>
                  <p className="supporting-text-8">Please provide your name and email</p>
                </div>
              </div>
              <StepBase
                className="step-base-instance"
                concreteComponentNodeContentClassName="step-base-4"
                concreteComponentNodeDotClassName="step-base-5"
                concreteComponentNodeStatusIncompleteClassName="step-base-3"
                connectorClassName="step-base-6"
                connectorWrapClassName="step-base-2"
                size="sm"
                stateProp="hover"
                status="current"
                supportingTextClassName="step-base-9"
                text="Highlights"
                textAndSupportingClassName="step-base-7"
                textClassName="step-base-8"
                type="icon-left"
              />
              <div className="step-base-10">
                <div className="connector-wrap-2">
                  <ConcreteComponentNode
                    contentClassName="step-icon-base-3"
                    dotClassName="step-icon-base-4"
                    size="sm"
                    stateProp="focused"
                    status="incomplete"
                    statusIncompleteClassName="step-icon-base-2"
                  />
                  <div className="connector-3" />
                </div>
                <div className="text-and-supporting-3">
                  <div className="text-20">Description</div>
                  <p className="supporting-text-8">Please provide your name and email</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AddDeviceStep2;
