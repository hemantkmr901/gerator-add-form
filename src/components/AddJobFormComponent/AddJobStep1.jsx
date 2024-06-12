import { ChevronDown1 } from "../../icons/ChevronDown1";
import { HelpIcon } from "../HelpIcon";
import { TagCloseX } from "../TagCloseX";
import { ArrowsDown } from "../../icons/ArrowsDown";
import { StepBase } from "../StepBase";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import React, { useContext } from "react";
import { Formik, Form, useField } from "formik";
import { Button } from "antd";
import AddDeviceFormContext from "../../screens/AddDevice/AddDeviceContext";
import ReactDOM from "react-dom";
import * as Yup from "yup";
import "./AddDeviceStep.css";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      {/* <label className="label">Model Number</label> */}

      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className="text-input text-25 content-15 myinputfield"
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

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently from other input types: select and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="label" htmlFor={props.id || props.name}>
        {label} <span className="text-wrapper-3">*</span>
      </label>
      <select
        className="input-3 text-input text-25 content-15 myselectfield"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const AddDeviceStep1 = () => {
  const { details, setDetails, next } = useContext(AddDeviceFormContext);

  return (
    <>
      <Formik  initialValues={{
           modelNumber: '',
          //  lastserialNumberName: '',
          //  email: '',
          //  acceptedTerms: false, // added for our checkbox
           transactionType: '', // added for our select
         }}
         validationSchema={Yup.object({
          modelNumber: Yup.string()
             .max(150, 'Must be 15 characters or less')
             .required('Required'),
             serialNumber: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
             transactionType: Yup.string()
             .oneOf(
               ['exchange', 'rentlease', 'sale'],
               'Invalid Transaction Type'
             )
             .required('Required'),
         })}
         onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
             alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
             next()
           }, 400);
          //  next();
         }}
>
        <Form>
          <div className="content-11">
            <div className="frame">
              <div className="text-19">Form</div>
              <img
                className="icon-instance-node-2"
                alt="Arrow narrow left"
                src="/img/arrow-narrow-left.svg"
              />
            </div>
            <div className="frame-wrapper">
              <div className="frame-2">
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
                  text="Basic Information"
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
                      stateProp="hover"
                      status="incomplete"
                      statusIncompleteClassName="step-icon-base-2"
                    />
                    <div className="connector-3" />
                  </div>
                  <div className="text-and-supporting-3">
                    <div className="text-20">Highlights</div>
                    <p className="supporting-text-8">
                      Please provide your name and email
                    </p>
                  </div>
                </div>
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
                    <p className="supporting-text-8">
                      Please provide your name and email
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-4">
            <div className="container-3">
              <div className="div-5">
                <div className="content-14">
                  <div className="text-and-supporting-5">
                    <div className="text-24">Basic Information</div>
                  </div>
                </div>
                <img
                  className="divider-3"
                  alt="Divider"
                  src="/img/divider-2.svg"
                />
              </div>
              <div className="frame-4">
                <div className="input-field">
                  <div className="input-with-label-2">

                    <MySelect label="Transaction Type" name="transactionType">
                      <option value="">Select From Dropdown list </option>
                      <option value="exchange">Exchange</option>
                      <option value="rentlease">Rent/Lease</option>
                      <option value="sale">sale</option>
                    </MySelect>

                  </div>
                </div>
                <div className="input-field">
                  <div className="input-with-label-2">
                  <MySelect label="Your Role (in relation to Device listed)" name="yourrole">
                      <option value="">Select From Dropdown list </option>
                      <option value="dealerDistributor">Dealer/Distributor</option><option value="manufacturer">Manufacturer</option><option value="ownerEmployee">Owner/Employee</option><option value="thirdPartyAgent">Third Party/Agent</option>
                    </MySelect>
                   
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="input-field">
                  <div className="input-with-label-2">
                  <MySelect label="Device Category" name="deviceCategory">
                      <option value="">Select From Dropdown list </option>
                      <option value="dealerDistributor">1/25-DIHYDROXY VITAMIN D3 IVD/ CALIBRATOR</option><option value="manufacturer">1/25-DIHYDROXY VITAMIN D3 IVD/ CONTROL</option><option value="ownerEmployee">1/25-DIHYDROXY VITAMIN D3 IVD/ KIT/ CHEMILUMINESCENT IMMUNOASSAY</option><option value="thirdPartyAgent">1/25-DIHYDROXY VITAMIN D3 IVD/ REAGENT</option>
                    </MySelect>
                  </div>
                </div>
                <div className="input-field">
                  <div className="input-with-label-2">
                    <p className="label">
                      <span className="span">
                        Original Equipment Manufacture (OEM)&nbsp;&nbsp;
                      </span>
                      <span className="text-wrapper-3">*</span>
                    </p>
                    <div className="input-3">
                      <div className="content-15">
                        <input
                          className="text-input-2"
                          placeholder="Type 3 Characters to search and select"
                          type="text"
                        />
                      </div>
                      <div className="chevron-down-wrapper">
                        <ChevronDown1
                          className="chevron-down"
                          color="#98A2B3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="input-field">
                  <div className="input-with-label-2">
                    <p className="label">
                      <span className="span">Model Name </span>
                      <span className="text-wrapper-3">*</span>
                    </p>
                    <div className="input-3">
                      <div className="content-15">
                        <input
                          className="text-input-2"
                          placeholder="Enter Model Name without OEM Brand - max. 30 characters"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-field">
                  <div className="input-with-label-2">
                    <p className="label">
                      <span className="span">Status&nbsp;&nbsp;</span>
                      <span className="text-wrapper-3">*</span>
                    </p>
                    <div className="input-3">
                      <div className="content-15">
                        <div className="text-input">
                          <div className="text-25">
                            Select From Dropdown list
                          </div>
                        </div>
                      </div>
                      <div className="chevron-down-wrapper">
                        <ChevronDown1
                          className="chevron-down"
                          color="#98A2B3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="input-field">
                  <div className="input-with-label-2">
                    <MyTextInput
                      label="Model Number"
                      name="modelNumber"
                      type="text"
                      placeholder="Max .30 characters"
                    />
                  </div>
                </div>
                <div className="input-field">
                  <div className="input-with-label-2">
                    <MyTextInput
                      label="Serial Number"
                      name="serialNumber"
                      type="text"
                      placeholder="Max .30 characters"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="input-field-2">
                  <div className="input-with-label-2">
                    <p className="label">
                      <span className="span">Price (EXW) in USD / unit </span>
                      <span className="text-wrapper-3">*</span>
                    </p>
                    <div className="input-wrapper">
                      <div className="input-4">
                        <div className="content-15">
                          <div className="text-input">
                            <div className="text-wrapper-4">$</div>
                            <div className="text-25">1,000.00</div>
                          </div>
                          <HelpIcon
                            className="help-icon-instance"
                            open={false}
                            supportingText={false}
                            tooltip="top-arrow"
                          />
                        </div>
                        <div className="dropdown-2">
                          <div className="text-wrapper-4">USD</div>
                          <ChevronDown1
                            className="icon-instance-node"
                            color="#98A2B3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-field-2">
                  <div className="input-with-label-2">
                    <p className="label">
                      <span className="span">Unit of Measure </span>
                      <span className="text-wrapper-3">*</span>
                    </p>
                    <div className="input-3">
                      <div className="content-15">
                        <div className="text-input">
                          <div className="text-25">
                            Select From Dropdown list
                          </div>
                        </div>
                      </div>
                      <div className="chevron-down-wrapper">
                        <ChevronDown1
                          className="chevron-down"
                          color="#98A2B3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-field-2">
                  <div className="input-with-label-2">
                    <p className="label">
                      <span className="span">Available Quantity </span>
                      <span className="text-wrapper-3">*</span>
                    </p>
                    <div className="input-3">
                      <div className="content-15">
                        <div className="text-input">
                          <p className="text-25">Any number between 0 and 99</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-5">
                <div className="frame-4">
                  <div className="input-field">
                    <div className="input-with-label-2">
                      <p className="label">
                        <span className="span">Warranty </span>
                        <span className="text-wrapper-3">* </span>
                      </p>
                      <div className="input-3">
                        <div className="content-15">
                          <div className="text-input">
                            <div className="text-25">
                              Select From Dropdown list
                            </div>
                          </div>
                        </div>
                        <div className="chevron-down-wrapper">
                          <ChevronDown1
                            className="chevron-down"
                            color="#98A2B3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-field">
                    <div className="input-with-label-2">
                      <p className="label">
                        <span className="span">Shipping&nbsp;&nbsp;</span>
                        <span className="text-wrapper-3">*</span>
                      </p>
                      <div className="input-3">
                        <div className="content-15">
                          <div className="text-input">
                            <div className="text-25">
                              Select From Dropdown list
                            </div>
                          </div>
                        </div>
                        <div className="chevron-down-wrapper">
                          <ChevronDown1
                            className="chevron-down"
                            color="#98A2B3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form">
                  <div className="divider-4" />
                  <div className="div-5">
                    <div className="content-14">
                      <div className="text-and-supporting-5">
                        <p className="text-24">
                          Select Tags Based on Device Features / Use
                        </p>
                      </div>
                    </div>
                    <img
                      className="divider-3"
                      alt="Divider"
                      src="/img/divider-2.svg"
                    />
                  </div>
                  <div className="input-field-wrapper">
                    <div className="input-field-3">
                      <div className="input-with-label-2">
                        <p className="label">
                          <span className="span">Clinical Applications </span>
                          <span className="text-wrapper-3">*</span>
                        </p>
                        <div className="input-3">
                          <div className="content-15">
                            <div className="text-input">
                              <div className="content-16">
                                <div className="tags">
                                  <div className="tag">
                                    <div className="content-17">
                                      <div className="text-26">Olivia</div>
                                    </div>
                                    <TagCloseX
                                      className="tag-close-x-instance"
                                      size="md"
                                      stateProp="default"
                                    />
                                  </div>
                                  <div className="tag">
                                    <div className="content-17">
                                      <div className="text-26">Phoenix</div>
                                    </div>
                                    <TagCloseX
                                      className="tag-close-x-instance"
                                      size="md"
                                      stateProp="default"
                                    />
                                  </div>
                                </div>
                                <div className="text-27">Lana</div>
                              </div>
                            </div>
                          </div>
                          <div className="chevron-down-wrapper">
                            <ChevronDown1
                              className="chevron-down"
                              color="#98A2B3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-field-4">
                    <div className="input-with-label-2">
                      <p className="label">
                        <span className="span">Device Use </span>
                        <span className="text-wrapper-3">*</span>
                      </p>
                      <div className="input-3">
                        <div className="content-15">
                          <div className="text-input">
                            <div className="content-16">
                              <div className="tags">
                                <div className="tag">
                                  <div className="content-17">
                                    <div className="text-26">Olivia</div>
                                  </div>
                                  <TagCloseX
                                    className="tag-close-x-instance"
                                    size="md"
                                    stateProp="default"
                                  />
                                </div>
                                <div className="tag">
                                  <div className="content-17">
                                    <div className="text-26">Phoenix</div>
                                  </div>
                                  <TagCloseX
                                    className="tag-close-x-instance"
                                    size="md"
                                    stateProp="default"
                                  />
                                </div>
                              </div>
                              <div className="text-27">Lana</div>
                            </div>
                          </div>
                        </div>
                        <div className="chevron-down-wrapper">
                          <ChevronDown1
                            className="chevron-down"
                            color="#98A2B3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-field-4">
                    <div className="input-with-label-2">
                      <p className="label">
                        <span className="span">Physical Location </span>
                        <span className="text-wrapper-3">*</span>
                      </p>
                      <div className="input-3">
                        <div className="content-15">
                          <div className="text-input">
                            <div className="text-25">
                              Select From Dropdown list
                            </div>
                          </div>
                        </div>
                        <div className="chevron-down-wrapper">
                          <ChevronDown1
                            className="chevron-down"
                            color="#98A2B3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-footer">
                <img
                  className="divider-5"
                  alt="Divider"
                  src="/img/divider-2.svg"
                />
                <div className="content-18">
                  <div className="actions">
                    <button className="button" type="submit">
                      <img
                        className="icon-instance-node-2"
                        alt="Save"
                        src="/img/save-02.svg"
                      />
                      <div className="text-padding-2">
                        <div className="text-23">Save &amp; Proceed</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="group-7">
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
    </>
  );
};

export default AddDeviceStep1;
