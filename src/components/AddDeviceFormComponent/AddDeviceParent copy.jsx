// // import React, { useEffect, useState } from "react";
// // import { Provider } from "../../screens/Device/AddDevice/AddDeviceContext";
// // import { Link } from "react-router-dom";
// // import { clearForm, updateField } from "../../components/AddDeviceFormComponent/AddDeviceSlice";
// // import { updateAppDataDevice, clearAppData } from "../../components/AddDeviceFormComponent/AppDataDeviceSlice";
// // import { useGetAvailabilityTaxQuery, useGetClinicalApplicationsTaxQuery, useGetPhysicalLocationTaxQuery, useGetPurposeUseTaxQuery, useGetShippingTaxQuery, useGetStatusConditionTaxQuery, useGetTransactionTypeTaxQuery, useGetUnitOfMeasureDeviceSpareTaxQuery, useGetWarrantyTaxQuery, useGetYearOfManufactureTaxQuery, useGetYourRoleTaxQuery } from "../../api/TaxonomyFormAPI";
// // import { getAllTaxonomyData } from "../../helper/AddDeviceHelper";
// // import AddDeviceStep1 from "./AddDeviceStep1";
// // import AddDeviceStep2 from "./AddDeviceStep2";
// // import AddDeviceStep3 from "./AddDeviceStep3";
// // import { useDispatch, useSelector } from "react-redux";
// // import { Form, Formik, useFormikContext } from "formik";
// // import * as Yup from "yup";
// // import { Breadcrumbs } from "../../components/Breadcrumbs";
// // import { ButtonsButton } from "../../components/ButtonsButton";
// // import { LogOut014 } from "../../icons/LogOut014";
// // import { PlusCircle1 } from "../../icons/PlusCircle1";
// // import { Upload041 } from "../../icons/Upload041";



// const renderStep = (step) => {
//     switch (step) {
//         case 0:
//             return <AddDeviceStep1 />;
//         case 1:
//             return <AddDeviceStep2 />;
//         case 2:
//             return <AddDeviceStep3 />;
//         default:
//             return null;
//     }
// };

// const AddDeviceParent = () => {



//     const dispatch = useDispatch();
//     const formData = useSelector((state) => state.addDevice);
//     const formikContext = useFormikContext();
//     const appData = useSelector((state) => state.appDataAddDevice);

//     return (
//         <Formik
//             initialValues={formData}
//             validationSchema={Yup.object({

//             }
//             )}
//             onSubmit={(values) => {
//                 console.log(values);
//             }}
//         >
             
//             <Form>
//                 <Provider value={{ formikContext, allTaxonomy, cropedImageFile, setCropedImageFile, selectedMultiImageFile, setSelectedMultiImageFile, selectedDocumentFile, setSelectedDocumentFile, selectedImageFile, setSelectedImageFile }}>



//                     {renderStep(appData.currentStep)}
//                 </Provider>
//             </Form>

//         </Formik>


//     );
// };

// // export default AddDeviceParent;