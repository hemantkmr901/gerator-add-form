import { ChevronDown1 } from "../../icons/ChevronDown1";
// import { ArrowsDown } from "../../icons/ArrowsDown";
import { FeaturedIcon } from "../FeaturedIcon";
import { UploadCloud022 } from "../../icons/UploadCloud022";
import { ButtonsButton } from "../ButtonsButton";
import { FileTypeIcon } from "../FileTypeIcon";
import { ProgressBar } from "../ProgressBar";
import { Checkbox } from "../Checkbox";
import { Placeholder157 } from "../../icons/Placeholder157";
import { ChevronLeft1 } from "../../icons/ChevronLeft1";
import { Eye1 } from "../../icons/Eye1";
import { LogIn041 } from "../../icons/LogIn041";
import { StepBase } from "../StepBase";
import { StepIconBase28 } from "../../icons/StepIconBase28";
import { StepIconBase29 } from "../../icons/StepIconBase29";
import React, { useContext } from "react";
import AddSpareFormContext from "../../screens/AddSpare/AddSpareContext";
import { Formik,Form,useField} from "formik";
import * as Yup from "yup";


const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  const inputStyle = meta.touched && meta.error ? { borderColor: 'red' ,} : {};     //New code for border colour
  return (
    <>
      {/* <label className="label">Model Number</label> */}

      <label className="label" htmlFor={props.id || props.name}>
      {label} 
       
      </label>
      <textarea
        className=" text-25 content-15 mytextarea"
        style={inputStyle}  //New code for border colour
        {...field}
        {...props}
        
      />

     
      
      {/* <input className="text-input" {...field} {...props} /> */}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const AddDeviceStep3 = () => {

  // const { details, setDetails, prev } = useContext(AddDeviceFormContext);

  const { step3Data, setStep3Details, next, prev } = useContext(AddDeviceFormContext);



  
  return (
   <Formik
   initialValues={{
    listParentDevice:'',
    hardware:'',
    software:'',
    history:'',
    warranty:'',
    packingList:'',
    additionalInfo:'',
  }}                                            //Added everything inside form and form inside formik & Initial values in formik opening tag
  validationSchema={Yup.object({

    listParentDevice:Yup.string().max(1000,'Must be 1000 characters or less'),

    hardware:Yup.string().max(1000,'Must be 1000 characters or less'),

    software:Yup.string().max(1000,'Must be 1000 characters or less'),

    history:Yup.string().max(1000,'Must be 1000 characters or less'),

    warranty:Yup.string().max(1000,'Must be 1000 characters or less'),

   packingList:Yup.string().max(1000,'Must be 1000 characters or less'),
  
   additionalInfo:Yup.string().max(2000,'Must be 2000 characters or less'),
       
  })}
  onSubmit={(values) => {
   setStep3Details(values);
      next()
   //  setTimeout(() => {
   //   //  alert(JSON.stringify(values, null, 2));
      
   //  }, 400);
  }}
   
   >
     <Form>
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

                      
                <MyTextInput
                      label="List Parent Devices Compatible With This Part / Spare"
                      name="listParentDevice"                                                          //New Code
                      type="text"
                      placeholder="1000 characters"
                />

                

                    {/* <div className="label">Hardware</div>
                    <div className="textarea-input-field-wrapper">
                      <div className="textarea-input-field">
                        <div className="input-with-label-3">
                          <div className="input-6">
                            <div className="text-32">1000 characters</div>
                          </div>
                        </div>
                        <div className="text-wrapper-2">40 characters left</div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="input-field-6">
                <div className="input-with-label-2">
                   

                <MyTextInput
                      label="Hardware"
                      name="hardware"                                                          //New Code
                      type="text"
                      placeholder="1000 characters"
                />
                  
              

                  {/* <p className="label">Software / Upgrades / OS / Applications / Worklist</p>
                  <div className="textarea-input-field-wrapper">
                    <div className="textarea-input-field">
                      <div className="input-with-label-3">
                        <div className="input-6">
                          <div className="text-32">1000 characters</div>
                        </div>
                      </div>
                      <div className="text-wrapper-2">40 characters left</div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="input-field-6">
                <div className="input-with-label-2">
                 

                <MyTextInput
                      label="Software / Upgrades / OS / Applications / Worklist"
                      name="software"                                                          //New Code
                      type="text"
                      placeholder="1000 characters"
                />

                  {/* <div className="label">Accessories</div>
                  <div className="textarea-input-field-wrapper">
                    <div className="textarea-input-field">
                      <div className="input-with-label-3">
                        <div className="input-6">
                          <div className="text-32">1000 characters</div>
                        </div>
                      </div>
                      <div className="text-wrapper-2">40 characters left</div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="input-field-6">
                <div className="input-with-label-2">

                    
                <MyTextInput
                      label="Service History"
                      name="history"                                                          //New Code
                      type="text"
                      placeholder="1000 characters"
                />

               

                  {/* <div className="label">Warranty</div>
                  <div className="textarea-input-field-wrapper">
                    <div className="textarea-input-field">
                      <div className="input-with-label-3">
                        <div className="input-6">
                          <p className="text-32">1000 characters. Specify inclusions and exclusions</p>
                        </div>
                      </div>
                      <div className="text-wrapper-2">40 characters left</div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="input-field-6">
                <div className="input-with-label-2">
                
                 
                <MyTextInput
                      label="Warranty"
                      name="warranty"                                                          //New Code
                      type="text"
                      placeholder="1000 characters. Specify inclusions and exclusions"
                />
                
                  {/* <div className="label">Service History</div>
                  <div className="textarea-input-field-wrapper">
                    <div className="textarea-input-field">
                      <div className="input-with-label-3">
                        <div className="input-6">
                          <div className="text-32">1000 characters</div>
                        </div>
                      </div>
                      <div className="text-wrapper-2">40 characters left</div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="input-field-6">
                <div className="input-with-label-2">

                <MyTextInput
                      label="Packing List"
                      name="packingList"                                                          //New Code
                      type="text"
                      placeholder="1000 characters"
                />

                  {/* <div className="label">Packing List</div>
                  <div className="textarea-input-field-wrapper">
                    <div className="textarea-input-field">
                      <div className="input-with-label-3">
                        <div className="input-6">
                          <div className="text-32">1000 characters</div>
                        </div>
                      </div>
                      <div className="text-wrapper-2">40 characters left</div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="input-field-6">
                <div className="input-with-label-2">

                <MyTextInput
                      label="Additional Information"
                      name="additionalInformation"                                                          //New Code
                      type="text"
                      placeholder="2000 characters"
                />

                  {/* <div className="label">Additional Information</div>
                  <div className="textarea-input-field-wrapper">
                    <div className="textarea-input-field">
                      <div className="input-with-label-3">
                        <div className="input-6">
                          <div className="text-32">2000 characters</div>
                        </div>
                      </div>
                      <div className="text-wrapper-2">40 characters left</div>
                    </div>
                  </div> */}
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
                        <p className="supporting-text-12">
                          <span className="text-wrapper-7">Please upload files having extension </span>
                          <span className="text-wrapper-8">PDF</span>
                          <span className="text-wrapper-7"> only (Maximum file size.10 MB)</span>
                        </p>
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
              </div>

              {/* <div className="frame-4">
                <div className="input-field">
                  <div className="input-with-label-2">
                    <p className="label">
                      <span className="span">Video </span>
                      <span className="text-wrapper-3">*</span>
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
                        <p className="text-24">Current Location Of the Device ?</p>
                      </div>
                    </div>
                    <img className="divider-3" alt="Divider" src="/img/divider-2.svg" />
                  </div>
                  <div className="input-field-6">
                    <div className="input-with-label-2">
                      <p className="label">
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
                      </div>
                    </div>
                    <p className="hint-text">
                      <span className="text-wrapper-5">Cant find an address? </span>
                      <span className="text-wrapper-6">Add it.</span>
                    </p>
                  </div>
                </div>
              </div> */}
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
                      <button className="button">
                        <LogIn041 className="icon-instance-node-2" />
                        <div className="text-padding-2">
                          <div className="text-23">Submit</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="group-8">
            <button className="buttons-button-wrapper">
              <button className="buttons-button-5">
                <ArrowsDown className="icon-instance-node-2" color="#344054" />
                <div className="text-padding-3">
                  <div className="text-33">Load More</div>
                </div>
              </button>
            </button>
          </div> */}
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
          </div>
    </Form>
   </Formik>
  );
};

export default AddDeviceStep3;
