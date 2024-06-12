// import { ArrowsDown } from "../../icons/ArrowsDown";
import { Field, Formik, useField } from "formik";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import AddDeviceFormContext from "../../screens/Device/AddDevice/AddDeviceContext";
import { clearForm, updateField } from "./AddDeviceSlice";
import { clearAppData, updateAppDataDevice } from "./AppDataDeviceSlice";
import { useNavigate } from "react-router-dom";
import { MyTextInput_not_mandatory } from "./AddDeviceStep1";
import { useAddDeviceMutation } from "../../api/AddDeviceAPI";
import { purgeStorage } from "../..";
import { objectToFormData } from "../../helper/AddDeviceHelper";


import { ChevronLeft1 } from "../../icons/ChevronLeft1";
import { Eye1 } from "../../icons/Eye1";
import { LogIn041 } from "../../icons/LogIn041";
import { StepIconBase28 } from "../../icons/StepIconBase28";
import { StepIconBase29 } from "../../icons/StepIconBase29";
import { UploadCloud022 } from "../../icons/UploadCloud022";
import { ButtonsButton } from "../ButtonsButton";
import { FeaturedIcon } from "../FeaturedIcon";
import { FileTypeIcon } from "../FileTypeIcon";
import { ProgressBar } from "../ProgressBar";
import { StepBase } from "../StepBase";



const DocumentFileUpload = ({ docRef, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor="documentId" className="documentLabel">
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
      <input ref={docRef} type="file" accept=".pdf" {...field} {...props} />
      <div className="action custom-action">

        {/* <br/> */}
        <div className="text-28">or drag and drop</div>
      </div>
      <p className="supporting-text-10">PDF (max. 1MB)</p>{" "}

      {meta.touched && meta.error ? (
        <div style={{ color: "red", textAlign: "center" }}>{meta.error}</div>
      ) : null}
    </div>
  );
};


const AddDeviceStep3 = () => {
  const navigate = useNavigate();
  const [addDevice, { isLoading, isError, error }] = useAddDeviceMutation();
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({});
  const formData = useSelector((state) => state.addDevice);
  const appData = useSelector((state) => state.appDataAddDevice);
  const { cropedImageFile, setCropedImageFile, selectedMultiImageFile, setSelectedMultiImageFile, selectedDocumentFile, setSelectedDocumentFile, selectedImageFile, setSelectedImageFile } = useContext(AddDeviceFormContext);
  const fileDocRef = useRef(null);
  const [fileDoceLinkRemover, setFileDocLinkRemover] = useState(false);
  const formikRef = useRef(null);



  const prev = () => dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: (appData.currentStep - 1) }));

  const next = () => {
    dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: 0 }));
  };

  useEffect(() => {
    formikRef.current?.setValues(formData);
    // console.log(formikRef.current);
  }, [formData]);

  useEffect(() => {
    if (fileDocRef.current) {
      fileDocRef.current.addEventListener('change', handleSelectedDocumentFile);
    }
    return () => { // Add a cleanup function
      if (fileDocRef.current) {
        fileDocRef.current.removeEventListener('change', handleSelectedDocumentFile);
      }
    }
  }, [selectedDocumentFile]);

  const handleCheckbox = () => {
    setSelectedDocumentFile("")
    setFileDocLinkRemover(true);
  }

  const handleSelectedDocumentFile = (e) => {
    setSelectedDocumentFile(e.target.files[0])
    setFileDocLinkRemover(true);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateField({ field: name, value }));
  };

  const resetForm = () => {
    setSelectedImageFile("")
    setCropedImageFile("")
    setSelectedMultiImageFile([])
    setSelectedDocumentFile("")
    dispatch(clearForm())
    dispatch(clearAppData());
    purgeStorage()
  }

  const handleSubmit = async (multiPartData) => {
    try {
      
      const response = await addDevice(multiPartData).unwrap();
      // console.log("Device added successfully!", response);
      //If form was submitted successfully then isCreated return with true, then reseting form
      if (response.isCreated) {
        // Reseting form
        resetForm();
      }
    } catch (err) {
      if (err.status === 422) {
        console.error("Validation errors:", err.data);
      } else {
        console.error("An error occurred:", err);
      }
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={formData}                                            //Added everything inside form and form inside formik & Initial values in formik opening tag
      validationSchema={Yup.object().shape({

        //   hardware:Yup.string().max(1000,'Must be 1000 characters or less'),

        //   softwareUpgraadesOsApplicationsWorklist:Yup.string().max(1000,'Must be 1000 characters or less'),

        //   accessories:Yup.string().max(1000,'Must be 1000 characters or less'),

        //  serviceHistory:Yup.string().max(1000,'Must be 1000 characters or less'),

        //  packingList:Yup.string().max(1000,'Must be 1000 characters or less'),

        //  additionalInfo:Yup.string().max(2000,'Must be 2000 characters or less'),

      })}
      onSubmit={(values) => {
        console.log(values);
        if (fileDoceLinkRemover) values.document = ""

        //Getting FormData object to send multipart request
        multiPartData = objectToFormData(values, cropedImageFile, selectedMultiImageFile, selectedDocumentFile)

        //Final submission of form
        handleSubmit(multiPartData);

        
      }
      }
    >
      {({ handleSubmit, errors }) => {
        return (
          <>
            <div className="group-6">
              <div className="container-3">
                <div className="div-5">
                  <div className="content-14">
                    <div className="text-and-supporting-5">
                      <div className="text-24">Description</div>
                    </div>
                  </div>
                  <img className="divider-3" alt="Divider" src="/img/divider-2.svg" />
                </div>
                <div className="frame-4">
                  <div className="input-field-5">
                    <div className="input-with-label-2">

                      <MyTextInput_not_mandatory
                        label="Hardware"
                        name="hardware"                                                          //New Code
                        id="hardware"                                                          //New Code
                        type="text"
                        onChange={handleChange}
                        value={formData.hardware}
                        placeholder="1000 characters"
                      />


                    </div>
                  </div>
                </div>
                <div className="input-field-6">
                  <div className="input-with-label-2">


                    <MyTextInput_not_mandatory
                      label="Software / Upgrades / OS / Applications / Worklist"
                      name="softwareUpgraadesOsApplicationsWorklist"                                                          //New Code
                      id="softwareUpgraadesOsApplicationsWorklist"                                                          //New Code
                      onChange={handleChange}
                      value={formData.softwareUpgraadesOsApplicationsWorklist}
                      type="text"
                      placeholder="1000 characters"
                    />

                  </div>
                </div>
                <div className="input-field-6">
                  <div className="input-with-label-2">

                    <MyTextInput_not_mandatory
                      label="Accessories"
                      name="accessories"                                                          //New Code
                      id="accessories"                                                          //New Code
                      type="text"
                      onChange={handleChange}
                      value={formData.accessories}
                      placeholder="1000 characters"
                    />


                  </div>
                </div>
                <div className="input-field-6">
                  <div className="input-with-label-2">


                    {/* <MyTextInput_not_mandatory
                      label="Warranty"
                      name="warranty"                                                         
                      id="warranty"                                                          
                      type="text"
                      onChange={handleChange}
                      value={formData.warranty}
                      placeholder="1000 characters. Specify inclusions and exclusions"
                    /> */}


                  </div>
                </div>
                <div className="input-field-6">
                  <div className="input-with-label-2">

                    <MyTextInput_not_mandatory
                      label="Service History"
                      name="serviceHistory"                                                          //New Code
                      id="serviceHistory"                                                          //New Code
                      type="text"
                      onChange={handleChange}
                      value={formData.serviceHistory}
                      placeholder="1000 characters"
                    />


                  </div>
                </div>
                <div className="input-field-6">
                  <div className="input-with-label-2">

                    <MyTextInput_not_mandatory
                      label="Packing List"
                      name="packingList"                                                          //New Code
                      id="packingList"                                                          //New Code
                      type="text"
                      onChange={handleChange}
                      value={formData.packingList}
                      placeholder="1000 characters"
                    />


                  </div>
                </div>
                <div className="input-field-6">
                  <div className="input-with-label-2">

                    <MyTextInput_not_mandatory
                      label="Additional Information"
                      name="additionalInformation"                                                          //New Code
                      id="additionalInformation"                                                          //New Code
                      type="text"
                      onChange={handleChange}
                      value={formData.additionalInformation}
                      placeholder="2000 characters"
                    />


                  </div>
                </div>
                <div className="frame-4">
                  <div className="input-field">
                    <div className="input-with-label-2">
                      <div className="label">Documents</div>
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


                        <DocumentFileUpload name="document" id="documentId" docRef={fileDocRef} value={undefined} />
                      </div>
                    </div>
                    {

                      (typeof selectedDocumentFile === 'object' && selectedDocumentFile !== "") && (
                        <div className="file-upload-item">
                          <div className="content-20">
                            <FileTypeIcon
                              fileType="document-PDF"
                              fileTypeClassName="file-type-icon-2"
                              fileTypeImageImgClassName="design-component-instance-node"
                              fileTypeWrapClassName="file-type-icon-instance"
                              type="default"
                            />

                            <div className="content-21">
                              <div className="text-and-supporting-7">
                                <div className="text-29">{selectedDocumentFile.name}</div>
                                <div className="supporting-text-11">{(selectedDocumentFile.size / 1000).toFixed(1) + " KB"} </div>
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
                          <Field type="checkbox" onClick={handleCheckbox} name="imageCheckbox" checked className="checkbox-instance checkbox-base size-30-sm state-8-default checked-true type-checkbox checkbox-2"></Field>
                        </div>
                      )
                    }
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
                        <button className="button-3">
                          <Eye1 className="icon-instance-node-2" />
                          <div className="text-padding-2">
                            <div className="text-23">Preview</div>
                          </div>
                        </button>
                        <button className="button" type="submit" onClick={handleSubmit}>
                          <LogIn041 className="icon-instance-node-2" />
                          <div className="text-padding-2">
                            <div className="text-23">Submit</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div >
            </div>

            <div className="content-23">
              <div className="frame">
                <div className="text-19">Form</div>
                <img className="icon-instance-node-2" alt="Arrow narrow left" src="/img/arrow-narrow-left.svg" />
              </div>
              <div className="frame-wrapper">
                <div className="frame-2">
                  <div className="step-base-10">
                    <div className="connector-wrap-2">
                      <StepIconBase28 className="step-icon-base-5" />
                      <div className="connector-4" />
                    </div>
                    <div className="text-and-supporting-3">
                      <div className="text-20">Basic Information</div>
                      <p className="supporting-text-8">Please provide your name and email</p>
                    </div>
                  </div>
                  <div className="step-base-10">
                    <div className="connector-wrap-2">
                      <StepIconBase29 className="step-icon-base-5" />
                      <div className="connector-4" />
                    </div>
                    <div className="text-and-supporting-3">
                      <div className="text-20">Highlights</div>
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
                    text="Description"
                    textAndSupportingClassName="step-base-7"
                    textClassName="step-base-8"
                    type="icon-left"
                  />
                </div>
              </div>
            </div></>
        )
      }}


    </Formik >
  );
};

export default AddDeviceStep3;

// onClick={() => {
//   addDevice({ id: (data.length + 1).toString(), amount: 104 })
// }}

// export default Admin;
