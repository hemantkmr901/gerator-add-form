import { ChevronLeft1 } from "../../icons/ChevronLeft1";
import { StepIconBase27 } from "../../icons/StepIconBase27";
import { ButtonsButton } from "../ButtonsButton";

import { Field, Formik, useField } from "formik";
import React, { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { FileTypeDefaultImageTypeSolid } from "../../icons/FileTypeDefaultImageTypeSolid";
import { UploadCloud022 } from "../../icons/UploadCloud022";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import { FeaturedIcon } from "../FeaturedIcon";
import { ProgressBar } from "../ProgressBar";
import { StepBase } from "../StepBase";
import {  clearEditDeviceForm, updateEditDeviceField } from "./EditDeviceSlice";
import { MySelect, MyTextInput } from "./EditDeviceStep1";
import { updateAppDataEditDevice, clearAppDataEditDevice } from "./AppDataEditDeviceSlice";
import EditDeviceFormContext from "../../screens/Device/EditDevice/EditDeviceContext";
// import { updateField } from "../AddDeviceFormComponent/AddDeviceSlice";

const FileUpload = ({ imageRef, ...props }) => {
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
      <input ref={imageRef} type="file" accept="image/*" {...field} {...props} />
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


const MultiFileUpload = ({ multi_imageRef, ...props }) => {
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
      <input ref={multi_imageRef} type="file" multiple {...field} accept="image/*" {...props} />
      <div className="action custom-action">

        {/* <br/> */}
        <div className="text-28">or drag and drop</div>
      </div>
      <p className="supporting-text-10">PNG, JPG or GIF (max. 800x400px)</p>{" "}

      {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null}
    </div>
  );
};




const EditDeviceStep2 = () => {
  // let myfieldinsideradio = false;
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.editDevice); 
  const appData = useSelector((state) => state.appDataEditDevice); 

  const { selectedMultiImageFile, setSelectedMultiImageFile, selectedImageFile, setSelectedImageFile} = useContext(EditDeviceFormContext);

  const inputYoutubeRef = useRef(null);
  const inputVimeoRef = useRef(null);
  const fileImageRef = useRef(null);
  const multiImageRef = useRef(null);

 
  
  //onChange Listener on input file tag(featureImage)
  useEffect(() => {
    if (fileImageRef.current) {
      fileImageRef.current.addEventListener('change', handleSelectedImageFile);
    }
    return () => { // Add a cleanup function
      if (fileImageRef.current) {
        fileImageRef.current.removeEventListener('change', handleSelectedImageFile);
      }
    }
  }, [selectedImageFile]);

//onChange Listener on input file tag(gallery)
  useEffect(() => {
    if (multiImageRef.current) {
      multiImageRef.current.addEventListener('change', handleSelectedMultiImageFile);
    }
    return () => { // Add a cleanup function
      if (multiImageRef.current) {
        multiImageRef.current.removeEventListener('change', handleSelectedMultiImageFile);
      }
    }
  }, [selectedMultiImageFile]);


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
    dispatch(updateAppDataEditDevice({case:"VIDEO", field:"isVimeoChecked",value: false}))
    dispatch(updateAppDataEditDevice({case:"VIDEO", field:"isYoutubeChecked",value: true}))
    dispatch(updateAppDataEditDevice({case:"VIDEO", field:"myfieldinsideradio",value: true}))
  };

//Click method for Vimeo radio
  const handleClickVimeo = (e) => {
    // Reset Youtube when Vimeo is clicked
    dispatch(updateAppDataEditDevice({case:"VIDEO", field:"isYoutubeChecked",value: false}))
    dispatch(updateAppDataEditDevice({case:"VIDEO", field:"isVimeoChecked",value: true}))
    dispatch(updateAppDataEditDevice({case:"VIDEO", field:"myfieldinsideradio",value: true}))
   
  };


  //onChange handle method for featureImage where populating image
  const handleSelectedImageFile = (e) => {
    // dispatch(updateAppDataEditDevice({case:"FEATUREIMAGE", field:"selectedImageFile",value: e.target.files[0]}))
    setSelectedImageFile(e.target.files[0])
    console.log("handle method");
    // console.log(selectedImageFile);
  }
  
  //onClick handle method For featureImage remove
  const handleImageCheckbox = () => {
    setSelectedImageFile("")
    console.log("handle checkbox");
    // console.log(selectedImageFile);
  }

  //onChange handle method for gallery where populating image one by one
  const handleSelectedMultiImageFile = (e) => {
    const filesObject = e.target.files;
    const fileObjects = Array.from(filesObject).map(file => ({
      file: file, // Store the original file object
    }));
    setSelectedMultiImageFile([...selectedMultiImageFile,...fileObjects]);
  }


  //onClick handle method For gallery image remove one by one
  const handleImageMultiCheckbox = (indexToRemove) => {
    setSelectedMultiImageFile(selectedMultiImageFile => selectedMultiImageFile.filter((_, index) => index !== indexToRemove));
  }

//This handle method used to capture input entered text and save them into redux state
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateEditDeviceField({ field: name, value }));
  };


//This method used to decrement current step of form and update state in appData reducer
const prev = () =>{
  // dispatch(updateField({transactionType:"Nothing"}));
  dispatch(updateAppDataEditDevice({ case: "CURRENTSTEP", value:(appData.currentStep - 1)}))
}  

  //This method used to increment current step of form and update state in appData reducer
const next = () => {
  dispatch(updateAppDataEditDevice({ case: "CURRENTSTEP", value:(appData.currentStep + 1)}));
};


//Updating Checkbox field state
  useEffect(() => {
    if (formData.videoType === "Youtube") {
      dispatch(updateAppDataEditDevice({case:"VIDEO", field:"isVimeoChecked",value: false}))
    dispatch(updateAppDataEditDevice({case:"VIDEO", field:"isYoutubeChecked",value: true}))
    dispatch(updateAppDataEditDevice({case:"VIDEO", field:"myfieldinsideradio",value: true}))
    } else{
      dispatch(updateAppDataEditDevice({case:"VIDEO", field:"isYoutubeChecked",value: false}))
      dispatch(updateAppDataEditDevice({case:"VIDEO", field:"isVimeoChecked",value: true}))
      dispatch(updateAppDataEditDevice({case:"VIDEO", field:"myfieldinsideradio",value: true}))
    }
  
  }, []); // Dependencies to trigger the effect

  return (
    <Formik
      initialValues={formData}                                 //Added everything inside form and form inside formik & Initial values in formik opening tag
      validationSchema={Yup.object().shape({

        // hardwareHighlights: Yup.string().required("This is a required field").max(190, 'Must be 190 characters or less'),

        // softwareUpgradesOsApplicationsworklistHighlights: Yup.string().required("This is a required field").max(190, 'Must be 190 characters or less'),

        // accessoriesHighlights: Yup.string().required("This is a required field").max(190, 'Must be 190 characters or less'),

        // location: Yup.string().required("This is a required field").test(
        //   "OPTION", "Please select a valid option",
        //   (value) => value !== '0'

        // ),
        // featureImage: Yup.mixed()
        //   .required('A file is required')
        // .test(
        //   'fileType',
        //   'Unsupported File Format (only images)',
        //   value => value && ['image/jpeg', 'image/png'].includes(value.type)
        // )
        // .test(
        //   'fileSize',
        //   'File too large (max size 1MB)',
        //   value => value && value.size <= 4286580
        // )


      })}
      onSubmit={
        (values) => {
          if (appData.isYoutubeChecked) dispatch(updateEditDeviceField({ field: "videoType", value:"Youtube" }));
          if (appData.isVimeoChecked) dispatch(updateEditDeviceField({ field: "videoType", value:"Vimeo" }));
          // 
          // setStep2Details(values);
          // console.log(values);
          // if (selectedImageFile.length === 0) {
          //   values.featureImage = ""
          //   values.featureImageObject = {}
          // }
          if (selectedMultiImageFile.length === 0) values.gallery = "";
          // dispatch(updateField(values))
          next()
          // console.log(values);
        }
      }
    >
      {({ handleSubmit, errors }) => {
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


                        <FileUpload name="featureImage" id="featureImage" imageRef={fileImageRef} value={undefined} />


                      </div>
                    </div>
                    {

                      (typeof selectedImageFile === 'object' && selectedImageFile !== "") && (
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
                                <div className="text-29">{selectedImageFile.name}</div>
                                <div className="supporting-text-11">{(selectedImageFile.size / 1000).toFixed(1) + " KB"} </div>
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
                          <Field type="checkbox" onClick={handleImageCheckbox} name="imageCheckbox"  checked className="checkbox-instance checkbox-base size-30-sm state-8-default checked-true type-checkbox checkbox-2"></Field>
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


                        <MultiFileUpload name="gallery" id="gallery" multi_imageRef={multiImageRef} value={undefined} />

                        
                      </div>
                    </div>
                    {
                      (typeof selectedMultiImageFile === 'object' && selectedMultiImageFile.length !== 0) && (
                        selectedMultiImageFile.map((imageObject, index) => (
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
                            <Field type="checkbox" onClick={()=>handleImageMultiCheckbox(index)} name="imageMultiCheckbox" checked className="checkbox-instance checkbox-base size-30-sm state-8-default checked-true type-checkbox checkbox-2"></Field>
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
                            <Field type="radio" id="youtube" name="video" value="Youtube" innerRef={inputYoutubeRef} checked={appData.isYoutubeChecked} />
                          </label>
                        </div>
                      </div>
                      <div className="buttons-button-4">
                        <div className="text-padding-3">
                          <label className="label" htmlFor="vimeo">
                            Vimeo
                            <Field type="radio" id='vimeo' name="video" value="Vimeo" innerRef={inputVimeoRef} checked={appData.isVimeoChecked} />
                          </label>
                        </div>
                      </div>
                    </div>
                    {appData.myfieldinsideradio && (
                      <Field type="text" name="linkVideo" onChange={handleChange} value={formData.linkVideo}  className="text-input text-25 content-15 myinputfield" />
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
                        <button className="button" type="button" onClick={handleSubmit}>
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
        )
      }}

    </Formik>
  );
};

export default EditDeviceStep2;
