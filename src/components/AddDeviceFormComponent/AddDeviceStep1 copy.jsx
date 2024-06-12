// // import React, { useContext, useEffect, useRef, useState } from "react";
// // import { ErrorMessage, Formik, useField, useFormikContext } from "formik";
// // import { useDispatch, useSelector } from "react-redux";
// // import * as Yup from "yup";
// // import { ConcreteComponentNode } from "../ConcreteComponentNode";
// // import { StepBase } from "../StepBase";
// // import "./AddDeviceStep.css";
// // import { updateAppDataDevice } from "./AppDataDeviceSlice";
// // import { updateField } from "./AddDeviceSlice";
// // // import { useGetDevicesQuery } from "../../api/AddDeviceAPI";
// // import { useGetAvailabilityTaxQuery, useGetClinicalApplicationsTaxQuery, useGetPhysicalLocationTaxQuery, useGetPurposeUseTaxQuery, useGetShippingTaxQuery, useGetStatusConditionTaxQuery, useGetTransactionTypeTaxQuery, useGetUnitOfMeasureDeviceSpareTaxQuery, useGetWarrantyTaxQuery, useGetYearOfManufactureTaxQuery, useGetYourRoleTaxQuery } from "../../api/TaxonomyFormAPI";
// // import AddDeviceFormContext from "../../screens/Device/AddDevice/AddDeviceContext";


// export const MyTextInput = ({ label, ...props }) => {
//   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//   // which we can spread on <input>. We can use field meta to show an error
//   // message if the field is invalid and it has been touched (i.e. visited)
//   const [field, meta] = useField(props);

//   const inputStyle = meta.touched && meta.error ? { borderColor: 'red' } : {};     //New code for border colour
//   const message = "Required Field"
//   return (
//     <>

//       <label className="label" htmlFor={props.id || props.name}>
//         {label} <span className="text-wrapper-3">*</span>

//       </label>
//       <input
//         className="text-input text-25 content-15 myinputfield"
//         style={inputStyle}  //New code for border colour
//         {...field}
//         {...props}

//       />


//       {(meta.touched && meta.error) ? (
//         <div className="error">{meta.error}</div>
//       ) : null}

//     </>
//   );
// };


// const imageUploadSchema = Yup.object({

//           modelName:Yup.string().required("This is a required field").max(30,'Must be 30 characters or less'),

         
// });

// const AddDeviceStep1 = () => {


//   const dispatch = useDispatch();
//   //Get form field data from redux state
//   const formData = useSelector((state) => state.addDevice);
//   const appData = useSelector((state) => state.appDataAddDevice);
//   const formikContext = useFormikContext()

//   //This method used to increment current step of form and update state in appData reducer
//   const next = async () => {
//     try {
//       await imageUploadSchema.validate({ formData });
//       setShowErrors(false);
//       console.log(formikContext.values);

//       dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: (appData.currentStep + 1) }));
//     } catch (error) {
//       console.log(formikContext);
//       console.log(error.message);
//       setShowErrors(true);
//       // console.log(error.inner.reduce((acc, error) => ({ ...acc, [error.path]: error.message }), {}));
//     }
//   };

//   //This handle method used to capture input entered text and save them into redux state
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     dispatch(updateField({ field: name, value }));
//   };


//   return (

//     <>
     
//      <MyTextInput
//                   label="Model Name"
//                   name="modelName"
//                   id="modelName"
//                   type="text"
//                   onChange={handleChange} value={formData.modelName}
//                   placeholder="Enter Model Name without OEM Brand - max. 30 characters"
//                 />

               
//     </>
//   );

// }
// // export default AddDeviceStep1;
// // // export { MyTextInput, MyCheckbox, MySelect };


