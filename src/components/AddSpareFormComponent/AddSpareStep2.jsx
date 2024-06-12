import { ChevronDown1 } from "../../icons/ChevronDown1";
import { ArrowsDown } from "../../icons/ArrowsDown";
import { FeaturedIcon } from "../FeaturedIcon";
import { UploadCloud022 } from "../../icons/UploadCloud022";
import { ButtonsButton } from "../ButtonsButton";
import { FileTypeIcon } from "../FileTypeIcon";
import { ProgressBar } from "../ProgressBar";
import { Checkbox } from "../Checkbox";
import { Placeholder157 } from "../../icons/Placeholder157";
import { ChevronLeft1 } from "../../icons/ChevronLeft1";
import { StepIconBase27 } from "../../icons/StepIconBase27";
import { StepBase } from "../StepBase";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import React, { useContext } from "react";
import AddDeviceFormContext from "../../screens/AddDevice/AddDeviceContext";
import { MyTextInput, MyCheckbox, MySelect } from "./AddDeviceStep1";
import { Formik,Form} from "formik";
import * as Yup from "yup";

const AddDeviceStep2 = () => {
  // const { details, setDetails, next, prev } = useContext(AddDeviceFormContext);
  
  const { step2Data, setStep2Details, next, prev } = useContext(AddDeviceFormContext);
  return (
    
    <Formik 
    initialValues={{
      hardwareHighlights:'',
      softwareHighlights:'',
      video:'',
      location:'',
    }}                                            //Added everything inside form and form inside formik & Initial values in formik opening tag
    validationSchema={Yup.object({

      hardwareHighlights:Yup.string().required("This is a required field").max(190,'Must be 190 characters or less'),

      softwareHighlights:Yup.string().required("This is a required field").max(190,'Must be 190 characters or less'),


      location:Yup.string().required("This is a required field").test(
        "OPTION","Please select a valid option",
        (value) => value !== '0' 
  
      ),
         
    })}
    onSubmit={(values) => {
     setStep2Details(values);
        next()
     //  setTimeout(() => {
     //   //  alert(JSON.stringify(values, null, 2));
        
     //  }, 400);
    }}
    >
  
      <Form>
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
                      name="hardwareHighlights"                                                          //New Code
                      type="text"
                      placeholder="190 characters"
                  />
                    {/* <p className="label">
                      <span className="span">Hardware - Highlights </span>
                      <span className="text-wrapper-3">*</span>
                    </p>
                    <div className="input-3">
                      <div className="content-15">
                        <div className="text-input">
                          <div className="text-25">190 characters</div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="input-field-5">
                  <div className="input-with-label-2">

                  <MyTextInput
                      label="Software / Upgrades / OS / Applications / Worklist - Highlights"
                      name="softwareHighlights"                                                          //New Code
                      type="text"
                      placeholder="190 characters"
                  />

                    {/* <p className="label">
                      <span className="span">Software / Upgrades / OS / Applications / Worklist - Highlights </span>
                      <span className="text-wrapper-3">*</span>
                    </p>
                    <div className="input-3">
                      <div className="content-15">
                        <div className="text-input">
                          <div className="text-25">190 characters</div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <div className="frame-4">
                <div className="input-field-5">
                  <div className="input-with-label-2">

                    
                  <MyTextInput
                      label="Accessories - Highlights"
                      name="accessoriesHighlights"                                                          //New Code
                      type="text"
                      placeholder="190 characters"
                  />
                  
                  
                  </div>
                </div>
              </div> */}
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
                      <div className="text-and-supporting-6">
                        <div className="action">
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
                          />
                          <div className="text-28">or drag and drop</div>
                        </div>
                        <p className="supporting-text-10">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                      </div>
                    </div>
                  </div>
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
                          <div className="text-29">Tech design requirements.pdf</div>
                          <div className="supporting-text-11">200 KB</div>
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
                    <Checkbox
                      checkboxBaseCheckedFalseClassName="checkbox-2"
                      checked
                      className="checkbox-instance"
                      indeterminate={false}
                      size="sm"
                      state="default"
                      text={false}
                      type="checkbox"
                    />
                  </div>
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
                      <div className="text-and-supporting-6">
                        <div className="action">
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
                          />
                          <div className="text-28">or drag and drop</div>
                        </div>
                        <p className="supporting-text-10">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="input-field">
                  <div className="input-with-label-2">
                    <p className="label">
                      <span className="span">Video </span>
                      {/* <span className="text-wrapper-3">*</span> */}
                    </p>
                  </div>
                  <div className="frame-6">
                    <div className="buttons-button-4">
                      <Placeholder157 className="icon-instance-node" color="#475467" />
                      <div className="text-padding-3">
                        <div className="text-30">YouTube</div>
                      </div>
                    </div>
                    <div className="buttons-button-4">
                      <Placeholder157 className="icon-instance-node" color="#475467" />
                      <div className="text-padding-3">
                        <div className="text-30">Vimeo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-5">
                <div className="form">
                  <div className="divider-4" />
                  <div className="div-5">
                    <div className="content-14">
                      <div className="text-and-supporting-5">
                        <p className="text-24">Where have you stored the Spare?</p>
                      </div>
                    </div>
                    <img className="divider-3" alt="Divider" src="/img/divider-2.svg" />
                  </div>
                  <div className="input-field-6">
                    <div className="input-with-label-2">

                    <MySelect label="Select one from the saved addresses " name="location">
                      <option value="0">Select From Dropdown list </option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                    </MySelect>
                      {/* <p className="label">
                        <span className="span">Select one from the saved addresses </span>
                        <span className="text-wrapper-3">*</span>
                      </p>
                      <div className="input-5">
                        <div className="content-15">
                          <div className="text-input">
                            <div className="text-25">Select From Dropdown list</div>
                          </div>
                        </div>
                        <div className="chevron-down-1-wrapper">
                          <ChevronDown1 className="icon-instance-node" color="#98A2B3" />
                        </div>
                      </div> */}
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
                      <button  className="button"  type="submit"  onClick={next}>
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
          {/* <div className="group-8">
            <button className="buttons-button-wrapper">
              <button onClick={next} className="buttons-button-5">
                <ArrowsDown className="icon-instance-node-2" color="#344054" />
                <div className="text-padding-3">
                  <div className="text-33">Load More</div>
                </div>
              </button>
            </button>
          </div> */}
    </Form>
    </Formik>
  );
};

export default AddDeviceStep2;
