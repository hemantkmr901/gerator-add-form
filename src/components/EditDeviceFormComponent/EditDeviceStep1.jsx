import { Formik, useField } from "formik";
import React, { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import { StepBase } from "../StepBase";
import "./AddDeviceStep.css";
// import { updateAppDataDevice } from "./AppDataDeviceSlice";
import { useFindGetDeviceQuery, useGetDeviceQuery} from "../../api/AddDeviceAPI";
import { fillEditDeviceForm, updateEditDeviceField } from "./EditDeviceSlice";
import { updateAppDataEditDevice } from "./AppDataEditDeviceSlice";
import { useParams } from "react-router-dom";
import EditDeviceFormContext from "../../screens/Device/EditDevice/EditDeviceContext";


export const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  const inputStyle = meta.touched && meta.error ? { borderColor: 'red' } : {};     //New code for border colour
  return (
    <>
      {/* <label className="label">Model Number</label> */}

      <label className="label" htmlFor={props.id || props.name}>
      {label} <span className="text-wrapper-3">*</span>
       
      </label>
      <input
        className="text-input text-25 content-15 myinputfield"
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

export const RadioButton = ({ label, ...props }) => {
  // useField hook from Formik for seamless integration
  const [field, meta] = useField(props);
  // const inputStyle = meta.touched && meta.error ? { borderColor: 'red' } : {};     //New code for border colour

  return (
    <>
       <label htmlFor={field.id} className="label">
        {label}
      </label>
      <input
        // style={inputStyle}
        {...field}
        {...props}
        type="radio"
        name="gender"
        // className={`text-30 ${meta.touched && meta.error ? 'error' : ''}`}
      />
      
    </>
  );
};

export const MyCheckbox = ({ children, ...props }) => {
  
  const [field, meta] = useField({ ...props, type: "checkbox" });
  
  return (
    
    <div className="frame">
      <label className="label text-padding-3 text-30">
        {children}
      </label>
        <input type="checkbox" {...field} {...props} className="buttons-button-4"/>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const inputStyle = meta.touched && meta.error ? { borderColor: 'red' } : {};   //New code for border colour

  return (
    <>
      <label className="label" htmlFor={props.name}>
        {label} <span className="text-wrapper-3">*</span>
      </label>
      <select
        className="input-3 text-input text-25 content-15 myselectfield"
        style={inputStyle}   //New code for border colour
        {...field}
        {...props}
        
        
      />              
     
     


      {meta.touched && meta.error ? (                                          
        <div className="error">{meta.error}</div>                      
      ) : null}
    </>
  );                                                   
};

export const MyTextInput_not_mandatory = ({ label, ...props }) => {
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



const EditDeviceStep1 = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
 
  const formData = useSelector((state) => state.editDevice); 
  const appData = useSelector((state) => state.appDataEditDevice); 
  const formikRef = useRef(null);
  const { data,
    isLoading,
    isSuccess,
    isError,
    error } = useFindGetDeviceQuery(id)

    const { allTaxonomy } = useContext(AddDeviceFormContext);


  useEffect(() => {
    if (isSuccess && data) {
      dispatch(fillEditDeviceForm(data));
    }
  
    if (isError) {
      // Handle the error (e.g., display an error message)
      console.error(error);
    }
  }, [isSuccess, data, isError, error, dispatch]); // Dependencies to trigger the effect
  

  useEffect(() => {
    formikRef.current?.setValues(formData);
    // console.log(formikRef.current);
  }, [formData]);

  //This method used to increment current step of form and update state in appData reducer
const next = () => {
  dispatch(updateAppDataEditDevice({ case: "CURRENTSTEP", value:(appData.currentStep + 1)}));
};

//This handle method used to capture input entered text and save them into redux state
const handleChange = (event) => {
  const { name, value } = event.target;
  dispatch(updateEditDeviceField({ field: name, value }));
};
  

  return (
    <>
      <Formik  
      innerRef={formikRef} 
      initialValues={formData}
         validationSchema={Yup.object({
          // transactionType: Yup.string().required("This is a required field").test(
          //   "OPTION","Please select a valid option",
          //   (value) => value !== '0' 
          // ),
          // yourRole:Yup.string().required("This is a required field").test(
          //   "OPTION","Please select a valid option",
          //   (value) => value !== '0' 
      
          // ),
          // deviceCategory:Yup.string().required("This is a required field").test(
          //   "OPTION","Please select a valid option",
          //   (value) => value !== '0' 
      
          // ),
          // oem:Yup.string().required("This is a required field").test(
          //   "OPTION","Please select a valid option",
          //   (value) => value !== '0' 
      
          // ),

          // modelName:Yup.string().required("This is a required field").max(30,'Must be 30 characters or less'),

          // statusCondition:Yup.string().required("This is a required field").test(
          //   "OPTION","Please select a valid option",
          //   (value) => value !== '0' 
      
          // ),
          // yearofManufacture:Yup.string().required("This is a required field").test(
          //   "OPTION","Please select a valid option",
          //   (value) => value !== '0' 
      
          // ),
          // availability:Yup.string().required("This is a required field").test(
          //   "OPTION","Please select a valid option",
          //   (value) => value !== '0' 
      
          // ),
          // modelNumber: Yup.string()
          //    .max(30, 'Must be 30 characters or less'),
            
          // serialNumber: Yup.string()
          //    .max(30, 'Must be 30 characters or less'),


          // price:Yup.number("Please enter a valid number").required("This is a required field")
          // .test('decimal-places', 'Only two decimal places are allowed', value => {
            
          //   const [, decimalPart] = String(value).split('.');
          //   return decimalPart === undefined || decimalPart.length <= 2;
          // }),

          // unitofMeasure:Yup.string().required("This is a required field").test(
          //   "OPTION","Please select a valid option",
          //   (value) => value !== '0' 
      
          // ),
          // availableQuantity:Yup.string().required("This is a required field").test(
          //   "OPTION","Please select a valid option",
          //   (value) => value !== '0' 
      
          // ),
          // warranty:Yup.string().required("This is a required field").test(
          //   "OPTION","Please select a valid option",
          //   (value) => value !== '0' 
      
          // ),
          // shipping:Yup.string().required("This is a required field").test(
          //   "OPTION","Please select a valid option",
          //   (value) => value !== '0' 
      
          // ),
          // clinicalApplications:Yup.string().required("This is a required field").test(
          //   "OPTION","Please select a valid option",
          //   (value) => value !== '0' 
      
          // ),
          // purposeUse:Yup.string().required("This is a required field").test(
          //   "OPTION","Please select a valid option",
          //   (value) => value !== '0' 
      
          // ),
          // physicalLocation:Yup.string().required("This is a required field").test(
          //   "OPTION","Please select a valid option",
          //   (value) => value !== '0' 
      
          // ),
         
        
         })}
        

        onSubmit={(values) => {
          next()
          // setStep1Details(values);
          // console.log(addDeviceStep1);
          // console.log(formData);
          // dispatch(updateField(values))    
          // console.log(appData.currentStep);
          // getDevice();
         }}
>
        {({handleSubmit, errors})=>{
          return (
            <>
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
                    Key features - performance, usability, safety, and unique advantages.
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
                    Device functionality, intended use, benefits, and applications in detail.
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

                    <MySelect label="Transaction Type" onChange={handleChange} value={formData.transactionType}   name="transactionType" id="transactionType" >
                      <option value="">Select From Dropdown list </option>
                      {(allTaxonomy.transactionType.isLoading || allTaxonomy.transactionType.isError)&& <option value="0">Loading...</option>}
                      {
                        (allTaxonomy.transactionType.isSuccess) && (allTaxonomy.transactionType.data.map(tax =>(
                          <option key={tax.id} value={tax.id}>{tax.name}</option>
                        )))
                      }
                    </MySelect>
                   

                  </div>
                </div>
                <div className="input-field">
                  <div className="input-with-label-2">
                  <MySelect label="Your Role (in relation to Device listed)" name="yourRole" id="yourRole"  onChange={handleChange} value={formData.yourRole}>
                      <option value="0">Select From Dropdown list </option>
                      {(allTaxonomy.yourRole.isLoading || allTaxonomy.yourRole.isError)&& <option value="0">Loading...</option>}
                      {
                        (allTaxonomy.yourRole.isSuccess) && (allTaxonomy.yourRole.data.map(tax =>(
                          <option key={tax.id} value={tax.id}>{tax.name}</option>
                        )))
                      }
                 
                    </MySelect>
                    

                   
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="input-field">
                  <div className="input-with-label-2">
                  <MySelect label="Device Category" name="deviceCategory" id="deviceCategory" onChange={handleChange} value={formData.deviceCategory}>
                      <option value="0">Select From Dropdown list </option>
                      <option value="CALIBRATOR">1/25-DIHYDROXY VITAMIN D3 IVD/ CALIBRATOR</option>
                      <option value="CONTROL">1/25-DIHYDROXY VITAMIN D3 IVD/ CONTROL</option>
                      <option value="IMMUNOASSAY">1/25-DIHYDROXY VITAMIN D3 IVD/ KIT/ CHEMILUMINESCENT IMMUNOASSAY</option>
                      <option value="REAGENT">1/25-DIHYDROXY VITAMIN D3 IVD/ REAGENT</option>
                    </MySelect>

                   

                  </div>
                </div>
                <div className="input-field">
                  <div className="input-with-label-2">

                  <MySelect label="Original Equipment Manufacture (OEM)&nbsp;&nbsp;" name="oem" id="oem" onChange={handleChange} value={formData.oem}>
                      <option value="0">Type 3 Characters to search and select </option>
                      <option value="3tp">3TP</option>
                      <option value="4med">4 MED</option>
                      <option value="4web">4-WEB</option>
                      <option value="2b1">2B1</option>                        
                    </MySelect>

                  

               
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="input-field">
                  <div className="input-with-label-2">

                  <MyTextInput
                      label="Model Name"
                      name="modelName"  
                      id="modelName"                                                        
                      type="text"
                      onChange={handleChange} value={formData.modelName}
                      placeholder="Enter Model Name without OEM Brand - max. 30 characters"
                  />


                 
                  </div>
                </div>
                <div className="input-field">
                  <div className="input-with-label-2">
                   
                   
                    <MySelect label="Status" name="statusCondition" id="statusCondition" onChange={handleChange} value={formData.statusCondition}>
                      <option value="0">Select From Dropdown List </option>
                      {(allTaxonomy.statusCondition.isLoading || allTaxonomy.statusCondition.isError)&& <option value="0">Loading...</option>}
                      {
                        (allTaxonomy.statusCondition.isSuccess) && (allTaxonomy.statusCondition.data.map(tax =>(
                          <option key={tax.id} value={tax.id}>{tax.name}</option>
                        )))
                      }
                    </MySelect>
                         
                    

                 
                  </div>
                </div>
              </div>

              <div className="frame-4">                       
              <div className="input-field">
                  <div className="input-with-label-2">


                  <MySelect label="Year of Manufacture" name="yearofManufacture"  id="yearofManufacture" onChange={handleChange} value={formData.yearofManufacture}>
                      <option value="0">Select From Dropdown List </option>
                      {(allTaxonomy.yearOfManufacture.isLoading || allTaxonomy.yearOfManufacture.isError)&& <option value="0">Loading...</option>}
                      {
                        (allTaxonomy.yearOfManufacture.isSuccess) && (allTaxonomy.yearOfManufacture.data.map(tax =>(
                          <option key={tax.id} value={tax.id}>{tax.name}</option>
                        )))
                      }
                     
                    </MySelect>
                    
                   

                
                  </div>
                </div>
                <div className="input-field">
                  <div className="input-with-label-2">

                  <MySelect label="Availability" name="availability" id="availability" onChange={handleChange} value={formData.availability}>
                      <option value="0">Select From Dropdown List </option>
                      {(allTaxonomy.availability.isLoading || allTaxonomy.availability.isError)&& <option value="0">Loading...</option>}
                      {
                        (allTaxonomy.availability.isSuccess) && (allTaxonomy.availability.data.map(tax =>(
                          <option key={tax.id} value={tax.id}>{tax.name}</option>
                        )))
                      }
                     
                    </MySelect>

                    

                 
                  </div>
                </div>
              </div>         

              <div className="frame-4">
                <div className="input-field">
                  <div className="input-with-label-2">
                    <MyTextInput_not_mandatory
                      label="Model Number"
                      id="modelNumber"
                      name="modelNumber"
                      type="text"
                      onChange={handleChange} value={formData.modelNumber}
                      placeholder="Max .30 characters"
                    />

                  

                  </div>
                </div>
                <div className="input-field">
                  <div className="input-with-label-2">
                    <MyTextInput_not_mandatory
                      label="Serial Number"
                      name="serialNumber"
                      id="serialNumber"
                      type="text"
                      onChange={handleChange} value={formData.serialNumber}
                      placeholder="Max .30 characters"
                    />             

                    

                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="input-field-2">
                  <div className="input-with-label-2">
                  <MyTextInput
                      label="Price (EXW) in USD / unit " 
                      name="price"
                      id="price"
                      onChange={handleChange} value={formData.price}
                      type="number"
                      placeholder="Any Number"
                      
                  />
                  

                    
                
                 
                  </div>
                </div>
                <div className="input-field-2">
                  <div className="input-with-label-2">

                  <MySelect label="Unit of Measure" name="unitofMeasure" id="unitofMeasure" onChange={handleChange} value={formData.unitofMeasure}>
                      <option value="0">Select From Dropdown List </option>
                      {(allTaxonomy.unitOfMeasure.isLoading || allTaxonomy.unitOfMeasure.isError)&& <option value="0">Loading...</option>}
                      {
                        (allTaxonomy.unitOfMeasure.isSuccess) && (allTaxonomy.unitOfMeasure.data.map(tax =>(
                          <option key={tax.id} value={tax.id}>{tax.name}</option>
                        )))
                      }
                     
                    </MySelect>

                  

               
                  </div>
                </div>
                <div className="input-field-2">
                  <div className="input-with-label-2">
                    
                  <MyTextInput
                      label="Available Quantity"
                      name="availableQuantity"
                      id="availableQuantity"
                      onChange={handleChange} 
                      value={formData.availableQuantity}
                      type="text"
                      placeholder="Any Number between 0 and 99"
                      
                  />  
                    
                  
                  </div>
                </div>
              </div>
              <div className="frame-5">
                <div className="frame-4">
                  <div className="input-field">
                    <div className="input-with-label-2">

                    <MySelect label="Warranty" name="warranty" id="warranty" onChange={handleChange} value={formData.warranty}>
                      <option value="0">Select From Dropdown List </option>
                      {(allTaxonomy.warranty.isLoading || allTaxonomy.warranty.isError)&& <option value="0">Loading...</option>}
                      {
                        (allTaxonomy.warranty.isSuccess) && (allTaxonomy.warranty.data.map(tax =>(
                          <option key={tax.id} value={tax.id}>{tax.name}</option>
                        )))
                      }
                    </MySelect>
                    
                    </div>
                  </div>
                  <div className="input-field">
                    <div className="input-with-label-2">

                    <MySelect label="Shipping" name="shipping" id="shipping" onChange={handleChange} value={formData.shipping}>
                      <option value="0">Select From Dropdown List </option>
                      {(allTaxonomy.shipping.isLoading || allTaxonomy.shipping.isError)&& <option value="0">Loading...</option>}
                      {
                        (allTaxonomy.shipping.isSuccess) && (allTaxonomy.shipping.data.map(tax =>(
                          <option key={tax.id} value={tax.id}>{tax.name}</option>
                        )))
                      }
                     
                    </MySelect>

                 
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

                        
                    <MySelect label="Clinical Applications" name="clinicalApplications" id="clinicalApplications" onChange={handleChange} value={formData.clinicalApplications}>
                      <option value="0">Select From Dropdown List </option>
                      {(allTaxonomy.clinicalApplications.isLoading || allTaxonomy.clinicalApplications.isError)&& <option value="0">Loading...</option>}
                      {
                        (allTaxonomy.clinicalApplications.isSuccess) && (allTaxonomy.clinicalApplications.data.map(tax =>(
                          <option key={tax.id} value={tax.id}>{tax.name}</option>
                        )))
                      }
                     
                    </MySelect>
                   
                      </div>
                    </div>
                  </div>
                  <div className="input-field-4">
                    <div className="input-with-label-2">

                      
                    <MySelect label="Device Use" name="purposeUse" id="purposeUse" onChange={handleChange} value={formData.purposeUse}>
                      <option value="0">Select From Dropdown List </option>
                      {(allTaxonomy.purposeUse.isLoading || allTaxonomy.purposeUse.isError)&& <option value="0">Loading...</option>}
                      {
                        (allTaxonomy.purposeUse.isSuccess) && (allTaxonomy.purposeUse.data.map(tax =>(
                          <option key={tax.id} value={tax.id}>{tax.name}</option>
                        )))
                      }
                     
                    </MySelect>
                    
                    </div>
                  </div>
                  <div className="input-field-4">
                    <div className="input-with-label-2">

                      
                    <MySelect label="Physical Location" name="physicalLocation" id="physicalLocation" onChange={handleChange} value={formData.physicalLocation}>
                      <option value="0">Select From Dropdown List </option>
                      {(allTaxonomy.physicalLocation.isLoading || allTaxonomy.physicalLocation.isError)&& <option value="0">Loading...</option>}
                      {
                        (allTaxonomy.physicalLocation.isSuccess) && (allTaxonomy.physicalLocation.data.map(tax =>(
                          <option key={tax.id} value={tax.id}>{tax.name}</option>
                        )))
                      }
                     
                    </MySelect>
                    
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
                {(isError) && (<div style={{color:"red"}}>Error: {error.data.message}</div>)}
                <div className="content-18">
                  <div className="actions">
                    <button className="button" type="button" onClick={handleSubmit}  >
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
            </>
          );
        }}
         
      </Formik>
    </>
  );
};

export default EditDeviceStep1;
// export { MyTextInput, MyCheckbox, MySelect };


