import React,{useState} from "react";
// import { Avatar } from "../../components/Avatar";
import { Steps } from "antd";
import { Provider } from "./AddDeviceContext";
// import { NavItemButton } from "../../components/NavItemButton";
// import { BarChartSquare02 } from "../../icons/BarChartSquare02";
// import { CheckDone01 } from "../../icons/CheckDone01";
// import { HomeLine38 } from "../../icons/HomeLine38";
// import { LayersThree011 } from "../../icons/LayersThree011";
// import { LifeBuoy01 } from "../../icons/LifeBuoy01";
// import { PieChart031 } from "../../icons/PieChart031";
// import { Settings013 } from "../../icons/Settings013";
// import { Users014 } from "../../icons/Users014";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ButtonsButton } from "../../components/ButtonsButton";
// import { Checkbox } from "../../components/Checkbox";
// import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
// import { FileTypeIcon } from "../../components/FileTypeIcon";
// import { HelpIcon } from "../../components/HelpIcon";
// import { ProgressBar } from "../../components/ProgressBar";
// import { StepBase } from "../../components/StepBase";
// import { TagCloseX } from "../../components/TagCloseX";
// import { ArrowsDown } from "../../icons/ArrowsDown";
// import { ChevronDown1 } from "../../icons/ChevronDown1";
// import { ChevronLeft1 } from "../../icons/ChevronLeft1";
// import { Eye1 } from "../../icons/Eye1";
// import { LogIn041 } from "../../icons/LogIn041";
import { LogOut014 } from "../../icons/LogOut014";
// import { Placeholder157 } from "../../icons/Placeholder157";
import { PlusCircle1 } from "../../icons/PlusCircle1";
// import { SearchLg1 } from "../../icons/SearchLg1";
// import { StepIconBase27 } from "../../icons/StepIconBase27";
// import { StepIconBase28 } from "../../icons/StepIconBase28";
// import { StepIconBase29 } from "../../icons/StepIconBase29";
import { Upload041 } from "../../icons/Upload041";
// import { UploadCloud022 } from "../../icons/UploadCloud022";
import "./style.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { SideNav } from "../../components/SideNav/SideNav";
import AddDeviceStep1 from "../../components/AddDeviceFormComponent/AddDeviceStep1";
import AddDeviceStep2 from "../../components/AddDeviceFormComponent/AddDeviceStep2";
import AddDeviceStep3 from "../../components/AddDeviceFormComponent/AddDeviceStep3";


const { Step } = Steps;

const detailsInitialState = {
  name: "",
  age: "",
  profession: ""
};

const addressInitialState = {
  address1: "",
  address2: "",
  city: ""
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <AddDeviceStep1 />;
    case 1:
      return <AddDeviceStep2 />;
    case 2:
      return <AddDeviceStep3 />;
    default:
      return null;
  }
};

export const AddDevice = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [address, setAddress] = useState(addressInitialState);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
      setDetails(detailsInitialState);
      setAddress(addressInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    // <></>
  
     <Provider value={{ details, setDetails, next, prev, address, setAddress }}>
    <div className="element-dashboard">
      <div className="overlap-wrapper">
        <div className="overlap-2">
        <Navbar/>
        <SideNav/>
          
          {/* Second side nav form */}
         

          
          <div className="account">
            <div className="text-21">
              <div className="title">Olivia Rhye</div>
              <div className="text-wrapper-2">olivia@untitledui.com</div>
            </div>
            <ButtonsButton
              className="buttons-button-instance"
              hierarchy="tertiary-gray"
              icon="only"
              override={<LogOut014 className="icon-instance-node" />}
              size="sm"
              stateProp="default"
            />
          </div>
          <div className="main-wrapper">
            <div className="main">
              <div className="header-section">
                <div className="page-header-wrapper">
                  <div className="div-5">
                    <Breadcrumbs
                      breadcrumbButtonCurrentFalseTypeClassName="breadcrumbs-instance"
                      breadcrumbButtonCurrentFalseTypeClassNameOverride="breadcrumbs-instance"
                      breadcrumbButtonText="Dashboard"
                      breadcrumbButtonText1="Add Device"
                      breakpoint="desktop"
                      className="design-component-instance-node-2"
                      divider="chevron"
                      type="button-gray"
                      visible={false}
                      visible1={false}
                    />
                    <div className="content-12">
                      <div className="text-and-supporting-4">
                        <div className="text-22">Add Job Listing</div>
                        <p className="supporting-text-9">Job Listing</p>
                      </div>
                      <div className="input-dropdown">
                        <div className="div-4">
                          <ButtonsButton
                            className="design-component-instance-node-2"
                            hierarchy="secondary-gray"
                            icon="default"
                            icon1={<Upload041 className="icon-instance-node" />}
                            iconTrailing={false}
                            size="md"
                            stateProp="default"
                            text="Import"
                          />
                          <button className="button">
                            <PlusCircle1 className="icon-instance-node" />
                            <div className="text-padding-2">
                              <div className="text-23">Add Job</div>
                            </div>
                            <img className="icon-instance-node" alt="Chevron down" src="/img/chevron-down-3.svg" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="line" alt="Line" src="/img/line-2.png" />
              <img className="line-2" alt="Line" src="/img/line-2.png" />
            </div>
          </div>
          <img className="divider" alt="Divider" src="/img/divider.svg" />
          <img className="divider-2" alt="Divider" src="/img/divider.svg" />
           
           

          {/* Basic Information Step 1 Form */}
          {renderStep(currentStep)}
         {/* <AddDeviceStep1/>
         <AddDeviceStep2/>
         <AddDeviceStep3/> */}
        
       
       {/*    
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
                    <div className="label">Hardware</div>
                    <div className="textarea-input-field-wrapper">
                      <div className="textarea-input-field">
                        <div className="input-with-label-3">
                          <div className="input-6">
                            <div className="text-32">1000 characters</div>
                          </div>
                        </div>
                        <div className="text-wrapper-2">40 characters left</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field-6">
                <div className="input-with-label-2">
                  <p className="label">Software / Upgrades / OS / Applications / Worklist</p>
                  <div className="textarea-input-field-wrapper">
                    <div className="textarea-input-field">
                      <div className="input-with-label-3">
                        <div className="input-6">
                          <div className="text-32">1000 characters</div>
                        </div>
                      </div>
                      <div className="text-wrapper-2">40 characters left</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field-6">
                <div className="input-with-label-2">
                  <div className="label">Accessories</div>
                  <div className="textarea-input-field-wrapper">
                    <div className="textarea-input-field">
                      <div className="input-with-label-3">
                        <div className="input-6">
                          <div className="text-32">1000 characters</div>
                        </div>
                      </div>
                      <div className="text-wrapper-2">40 characters left</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field-6">
                <div className="input-with-label-2">
                  <div className="label">Warranty</div>
                  <div className="textarea-input-field-wrapper">
                    <div className="textarea-input-field">
                      <div className="input-with-label-3">
                        <div className="input-6">
                          <p className="text-32">1000 characters. Specify inclusions and exclusions</p>
                        </div>
                      </div>
                      <div className="text-wrapper-2">40 characters left</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field-6">
                <div className="input-with-label-2">
                  <div className="label">Service History</div>
                  <div className="textarea-input-field-wrapper">
                    <div className="textarea-input-field">
                      <div className="input-with-label-3">
                        <div className="input-6">
                          <div className="text-32">1000 characters</div>
                        </div>
                      </div>
                      <div className="text-wrapper-2">40 characters left</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field-6">
                <div className="input-with-label-2">
                  <div className="label">Packing List</div>
                  <div className="textarea-input-field-wrapper">
                    <div className="textarea-input-field">
                      <div className="input-with-label-3">
                        <div className="input-6">
                          <div className="text-32">1000 characters</div>
                        </div>
                      </div>
                      <div className="text-wrapper-2">40 characters left</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field-6">
                <div className="input-with-label-2">
                  <div className="label">Additional Information</div>
                  <div className="textarea-input-field-wrapper">
                    <div className="textarea-input-field">
                      <div className="input-with-label-3">
                        <div className="input-6">
                          <div className="text-32">2000 characters</div>
                        </div>
                      </div>
                      <div className="text-wrapper-2">40 characters left</div>
                    </div>
                  </div>
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
              <div className="frame-4">
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
              </div>
              <div className="section-footer">
                <div className="section-footer">
                  <img className="divider-5" alt="Divider" src="/img/divider-2.svg" />
                  <div className="content-18">
                    <div className="actions">
                      <button className="button-2">
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
         
          */}

          {/* Footer  */}
          <div className="footer-wrapper">
            <div className="container-wrapper">
              <div className="container-2">
                <div className="content-13">
                  <p className="footer-text">© Gerator Asia LLP and/or its partners</p>
                  <div className="logo-2">
                    <div className="frame-3">
                      <div className="footer-text-wrapper">
                        <p className="footer-text-2">All prices are in USD</p>
                      </div>
                      <div className="logomark">
                        <div className="logomark">
                          <img className="gerator-2" alt="Gerator" src="/img/gerator-10-2.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Provider>
  
  );
};
