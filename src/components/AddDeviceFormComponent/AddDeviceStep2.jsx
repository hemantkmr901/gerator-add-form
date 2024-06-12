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





const FileUpload = ({ ...props }) => {
  const [field, meta] = useField(props);


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

      {meta.touched && meta.error ? (
        <div style={{ color: "red", textAlign: "center" }}>{meta.error}</div>
      ) : null}
    </div>
  );
};


const MultiFileUpload = ({ ...props }) => {
  const [field, meta] = useField(props);
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
      {meta.touched && meta.error && meta.error.length > 0 ? (
        <div>
          {meta.error.map((error, index) => (
            <div key={index} style={{ color: "red" }}>
              {error}
            </div>
          ))}
        </div>
      ) : null}
      {/* {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null} */}
    </div>
  );
};




const AddDeviceStep2 = () => {

  // const getFormik = () => { 
  //   const formik = useFormikContext();
  //   return formik}

  // const imageUploadSchema = Yup.object({
  //   featureImage: Yup.mixed()
  //     .test(
  //       'fileSize',
  //       'File too large (max size 1MB)',
  //       value => value && value.size <= 4286580
  //     )
  //     .test(
  //       'fileType',
  //       'Unsupported File Format (only jpeg and png)',
  //       value => !value ||
  //         value instanceof File &&
  //         ['image/jpeg', 'image/png'].includes(value.type)
  //     )

  // });
  // let myfieldinsideradio = false;
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.addDevice);
  const appData = useSelector((state) => state.appDataAddDevice);
  const [featureImageFile, setFeatureImageFile] = useState(null);
  const [galleryImageFile, setGalleryImageFile] = useState([]);
  const { values, validateForm, setFieldValue, setFieldError, setErrors, setFieldTouched, validateField, errors, isValid, dirty, touched } = useFormikContext();
  // let imageCrop ;
  const { isImageSelected, setIsImageSelected, selectedMultiImageFile, setSelectedMultiImageFile, selectedImageFile, setSelectedImageFile, cropedImageFile, setCropedImageFile } = useContext(AddDeviceFormContext);

  const inputYoutubeRef = useRef(null);
  const inputVimeoRef = useRef(null);
  // const fileImageRef = useRef(null);
  const multiImageRef = useRef(null);
  // const formikRef = useRef(null);
  // useEffect(() => {
  //   // This effect runs whenever errors, isValid, or dirty change
  //   if (!isValid && dirty) {
  //     // Perform actions based on the updated errors
  //     console.log(errors); // Inspect the latest errors
  //   }
  // }, [errors, isValid, dirty]);


  useEffect(() => {
    // This effect runs whenever errors, isValid, or dirty change
    // console.log("File ref has any data? ");
    // console.log(fileImageRef.current?.files);
    // if (fileImageRef.current?.files.length > 0) {
    //   console.log(fileImageRef.current.files[0]);
    // if(featureImageFile != null)
    // {
    // console.log("Feature Image");
    // console.log(featureImageFile);
    if (!isValid && dirty && (featureImageFile != null)) {
      // console.log("UseEffect error and handleSelect is called");
      handleSelectedImageFile(featureImageFile, errors);
      // setFeatureImageFile(null);
    }

  }, [errors, isValid, dirty, featureImageFile]);




  useEffect(() => {
    console.log("Gallery touched Open 169");
    console.log(touched);
    if (touched.gallery && values.gallery[0] != null) {
      // console.log();
      console.log("inside useEffect values 173");
    const galleryError = validateField("gallery");
      console.log(galleryError);
      setGalleryImageFile([...values.gallery]);
    }

    console.log("Gallery touched Close 177");

    //   console.log(values.gallery);

    // return () => {
    //   second
    // }
  }, [values])

  useEffect(() => {
    // This effect runs whenever errors, isValid, or dirty change
    // console.log("File ref has any data? ");
    // console.log(fileImageRef.current?.files);
    // if (fileImageRef.current?.files.length > 0) {
    //   console.log(fileImageRef.current.files[0]);
    // if(featureImageFile != null)
    // {
    console.log("+++++++++++++++++++++++++++++++++");
    console.log("Gallery Image Error Called ");
    console.log(galleryImageFile.length);
    console.log(!isValid + " " + dirty);
    if (!isValid && dirty && (galleryImageFile.length > 0)) {
      console.log("Gallery Image Error UseEffect 199");
      handleSelectedMultiImageFile("error");
      // galleryImageFile.forEach(file => {
      // });
      // setFeatureImageFile(null);
    }
    console.log("Gallery Image Error Closed ");
    console.log("+++++++++++++++++++++++++++++++++");
  }, [errors]);


  useEffect(() => {
    // This effect runs whenever errors, isValid, or dirty change
    // console.log("File ref has any data? ");
    // console.log(fileImageRef.current?.files);
    // if (fileImageRef.current?.files.length > 0) {
    //   console.log(fileImageRef.current.files[0]);
    // if(featureImageFile != null)
    // {
        
    console.log("----------------------------------");
    console.log("Gallery Image File Called ");
    console.log(galleryImageFile.length);
    console.log(!isValid + " " + dirty);
    if (!isValid && dirty && (galleryImageFile.length > 0)) {
      console.log("Gallery Image File UseEffect2 223");
      handleSelectedMultiImageFile("galleryImageFile");
      // galleryImageFile.forEach(file => {
      // });
      // setFeatureImageFile(null);
    }
    console.log("Gallery Image File Closed ");

    console.log("----------------------------------");

  }, [galleryImageFile]);






  // useEffect(() => {
  //   //   formikRef.current?.setValues(formData);
  //   //   // console.log(formikRef.current);
  //   // }, [formData]);

  //   // onChange Listener on input file tag(featureImage)
  //   // useEffect(() => {
  //   //   if (fileImageRef.current) {
  //   //     fileImageRef.current.addEventListener('change', handleSelectedImageFile);
  //   //   }
  //   //   return () => { // Add a cleanup function
  //   //     if (fileImageRef.current) {
  //   //       fileImageRef.current.removeEventListener('change', handleSelectedImageFile);
  //   //     }
  //   //   }

  //   // console.log(selectedImageFile);
  //   // console.log(isImageSelected);
  //   // if (selectedImageFile !== "" && isImageSelected === true) {
  //   //   setIsImageSelected(false);
  //   //   setFieldValue("featureImage", '')
  //   //   console.log("file+true effect");
  //   //   console.log(selectedImageFile);
  //   // }
  //   console.log("outside selectimage effect");
  //   if (selectedImageFile !== "" && isImageSelected === false) {
  //     setIsImageSelected(true);
  //     console.log("UseEffect file+false");
  //     selectedImageFile ? console.log(selectedImageFile) : console.log("no data in selectedImageFile hook");
  //   }

  //   if (selectedImageFile === "" && isImageSelected === true) {
  //     const filteredErrors = Object.keys(errors).reduce((acc, fieldName) => {
  //       // Filter based on your condition (replace with your actual logic)
  //       if (fieldName !== 'featureImage') {
  //         acc[fieldName] = errors[fieldName];
  //       }
  //       return acc;
  //     }, {});

  //     // Update Formik's error state
  //     setErrors(filteredErrors);
  //     setIsImageSelected(false);
  //     console.log(errors.featureImage);
  //     console.log("UseEffect file+true");
  //     //   console.log(selectedImageFile);
  //   }
  //   // console.log(selectedImageFile);
  //   // console.log(cropedImageFile);
  // }, [selectedImageFile]);

  //onChange Listener on input file tag(gallery)
  // useEffect(() => {
  //   if (multiImageRef.current) {
  //     multiImageRef.current.addEventListener('change', handleSelectedMultiImageFile);
  //   }
  //   return () => { // Add a cleanup function
  //     if (multiImageRef.current) {
  //       multiImageRef.current.removeEventListener('change', handleSelectedMultiImageFile);
  //     }
  //   }
  // }, [selectedMultiImageFile]);


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
    // setIsVimeoChecked(false); 
    // setIsYoutubeChecked(true);
    // setFieldInsideRadio(true);
  };

  //Click method for Vimeo radio
  const handleClickVimeo = (e) => {
    // Reset Youtube when Vimeo is clicked
    dispatch(updateAppDataDevice({ case: "VIDEO", field: "isYoutubeChecked", value: false }))
    dispatch(updateAppDataDevice({ case: "VIDEO", field: "isVimeoChecked", value: true }))
    dispatch(updateAppDataDevice({ case: "VIDEO", field: "myfieldinsideradio", value: true }))
    // setIsYoutubeChecked(false); 
    // setIsVimeoChecked(true);
    // setFieldInsideRadio(true);
  };


  //onChange handle method for featureImage where populating image
  const handleSelectedImageFile = async (file, error) => {
    // dispatch(updateAppDataDevice({case:"FEATUREIMAGE", field:"selectedImageFile",value: e.target.files[0]}))
    // const file = e.target.files[0];
    // setFieldValue("featureImage", "featureImage");
    // console.log(file);
    // setFieldValue("featureImage", file);
    //
    // validateField('featureImage');
    // console.log(selectedImageFile);
    // console.log(errors[featureImage]);
    // setSelectedImageFile(e.target.files[0])
    // console.log(savedError);
    // console.log(error);
    // console.log(error);

    if (!errors.featureImage) {
      setFieldTouched("featureImage", true);
      console.log("handleSelectedImage Called 280");
      setSelectedImageFile(file)
    } else {
      console.log("Error found line 283 ");
      if (cropedImageFile !== '') setCropedImageFile('')
      setSelectedImageFile('')
      setFieldTouched("featureImage", true);
    }

    // e.target.value = null;
  }

  // try {
  //   Yup.reach(imageUploadSchema, "featureImage").validateSync(file);
  // } catch (error) {
  //   console.log(error);
  //   formik.errors = {"featureImage": error.message};selectedMultiImageFile.length
  //   // formik.setFieldError("featureImage", error.message);
  //   formik.setFieldTouched("featureImage", true);
  //   // return error.message;
  // }

  // console.log(file);
  // try {
  //   // await imageUploadSchema.validate({ featureImage: file });
  //   console.log(formik);
  //   console.log("file saved and clear");
  //   } catch (error) {
  //     // setErrors({})
  //     setErrors({featureImage:"Required Field"})
  //     // setFieldError("featureImage",error.message)
  //     // const latestFormik = getFormik();
  //     console.log(error.errors);
  //     // console.log(formik.errors);
  //     // console.log(latestFormik);
  //     }

  // console.log(validatedData);
  // setFieldValue("featureImage",file)
  // e.target.value = null;
  // console.error(error);
  // formik.errors = { "featureImage": error.message }
  // formik.setErrors({"featureImage": error.message});


  //onClick handle method For featureImage remove
  const handleImageCheckbox = (e) => {
    setFeatureImageFile(null);
    setCropedImageFile('');
    setFieldValue("featureImage", '');
    // setSelectedImageFile('');
    // console.log(selectedImageFile);
    // fileImageRef.current.value="";
    // console.log(selectedImageFile);
  }

  //onChange handle method for gallery where populating image one by one
  const handleSelectedMultiImageFile = (type) => {

    console.log("handleSelectedMultiImageFile Called "+type );
    // console.log(!errors.gallery);
    
    if (!errors.gallery) {
      setFieldTouched("gallery", true);
      console.log(errors);
      console.log("Inside !erros.gallery is true means no error found 435");
      setSelectedMultiImageFile(galleryImageFile)
      console.log("File added into select multi image hook");
      // [...selectedMultiImageFile, ...galleryImageFile]
      setGalleryImageFile([])
    } else {
      console.log(errors);
      console.log("Inside !erros.gallery is false means error found 435");

      // if (cropedImageFile !== '') setCropedImageFile('')
      // setGalleryImageFile([])
      // const updatedValues = values.gallery;
      // const newUpdatedValues = updatedValues.pop();
      // console.log(newUpdatedValues);
      setFieldTouched("gallery", true);
    }
       console.log("handleSelectedMultiImageFile Closed "+type);

  }


  //onClick handle method For gallery image remove one by one
  const handleImageMultiCheckbox = (indexToRemove) => {
    setSelectedMultiImageFile(selectedMultiImageFile => selectedMultiImageFile.filter((_, index) => index !== indexToRemove));
    // setGalleryImageFile(galleryImageFile => galleryImageFile.filter((_, index) => index !== indexToRemove));
    // console.log(values.gallery);
    const gallery = values.gallery;
    gallery.splice(indexToRemove, 1)
    // console.log("index to remove " + indexToRemove);
    // console.log("update value of gallery ");
    console.log(gallery);
    if (gallery.length !== 0) {
      setFieldValue('gallery', gallery);
    } else {
      setFieldValue('gallery', [null]);
    }
    // setGalleryImageFile([...galleryImageFile, ...fileObjects])

  }

  //This handle method used to capture input entered text and save them into redux state
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("handle change called");
    console.log(event.target?.files[0]);

    if (name === 'featureImage') {
      const file = event.target.files[0];
      console.log('\x1b[36m%s\x1b[0m', "inside handle change called");
      setFieldValue(name, file);
      setFeatureImageFile(file);
      // handleSelectedImageFile(file, errors);
      // dispatch(updateField({ field: name, file }));
      return;
    }

    if (name === 'gallery') {
      // if(event.target.files.length === 0 ){
      //   const error
      // }
      const filesObject = event.target.files;
      const fileObjects = Array.from(filesObject).map(file => ({
        file: file, // Store the original file object
      }));

      setFieldValue(name, [
        ...(values.gallery[0] === null ? [] : [values.gallery[0]]), // Conditional spreading
        ...values.gallery.slice(1), // Rest of the original array
        ...fileObjects
      ]);

      setFieldTouched("gallery", true);


      // if (values.gallery[0] === null) { console.log("first value is null"); }
      // setFieldValue(name, [...values.gallery, ...fileObjects]);
      console.log("Values updated........");
      // console.log(values.gallery);

      // setGalleryImageFile([...values.gallery, ...fileObjects]);
      return;
    }

    console.log("handle change closed");


    setFieldValue(name, value);
    dispatch(updateField({ field: name, value }));

  };


  //This method used to decrement current step of form and update state in appData reducer
  const prev = () => {
    // dispatch(updateField({transactionType:"Nothing"}));
    dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: (appData.currentStep - 1) }))
  }

  //This method used to increment current step of form and update state in appData reducer
  const next = async () => {

    const errors = await validateForm();
    if (Object.keys(errors).length > 0) {
      // console.log("Croped image has something "+(cropedImageFile !== ''));
      // console.log(errors);
      if (cropedImageFile !== '') {
        console.log("Croped image has something " + (cropedImageFile !== ''));
        const filteredErrors = Object.keys(errors).reduce((acc, fieldName) => {
          // Filter based on your condition (replace with your actual logic)
          if (fieldName !== 'featureImage') {
            acc[fieldName] = errors[fieldName];
          }
          return acc;
        }, {});


        // if(galleryImageFile.length === 0 ){
        //   console.log(filteredErrors);
        // }
        // console.log(filteredErrors);
        setErrors(filteredErrors)
      }

      if (values > 0) {

      }

      Object.keys(errors).forEach(key => {
        setFieldTouched(key, true);
      });

    } else {
      dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: (appData.currentStep + 1) }));
    }


  };

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
                  <FileUpload name="featureImage" id="featureImage" onChange={handleChange} value={undefined} />
                  {(selectedImageFile instanceof File && isImageSelected) && (
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
                        <ProgressBar
                          className="progress-bar-instance"
                          label="right"
                          percentageClassName="progress-bar-4"
                          progress="one-hundred"
                          progressBarClassName="progress-bar-2"
                          progressClassName="progress-bar-3"
                        />
                      </div>
                    </div>
                    <Field type="checkbox" onClick={handleImageCheckbox} name="imageCheckbox" checked className="checkbox-instance checkbox-base size-30-sm state-8-default checked-true type-checkbox checkbox-2"></Field>
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
                  <MultiFileUpload name="gallery" id="gallery" onChange={handleChange} value={undefined} />
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
                          <ProgressBar
                            className="progress-bar-instance"
                            label="right"
                            percentageClassName="progress-bar-4"
                            progress="one-hundred"
                            progressBarClassName="progress-bar-2"
                            progressClassName="progress-bar-3"
                          />
                        </div>
                      </div>
                      <Field type="checkbox" onClick={() => handleImageMultiCheckbox(index)} name="imageMultiCheckbox" checked className="checkbox-instance checkbox-base size-30-sm state-8-default checked-true type-checkbox checkbox-2"></Field>
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
                <Field type="text" name="linkVideo" onChange={handleChange} value={formData.linkVideo} className="text-input text-25 content-15 myinputfield" />
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

                  <MySelect label="Select one from the saved addresses " name="location" id="location" onChange={handleChange} value={formData.location}>
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
