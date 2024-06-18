import React, { useEffect, useState } from "react";
import { Provider } from "../../screens/Device/AddDevice/AddDeviceContext";
import { Link, useNavigate } from "react-router-dom";
import { clearForm, updateField } from "../../components/AddDeviceFormComponent/AddDeviceSlice";
import { updateAppDataDevice, clearAppData } from "../../components/AddDeviceFormComponent/AppDataDeviceSlice";
import { useGetAvailabilityTaxQuery, useGetClinicalApplicationsTaxQuery, useGetPhysicalLocationTaxQuery, useGetPurposeUseTaxQuery, useGetShippingTaxQuery, useGetStatusConditionTaxQuery, useGetTransactionTypeTaxQuery, useGetUnitOfMeasureDeviceSpareTaxQuery, useGetWarrantyTaxQuery, useGetYearOfManufactureTaxQuery, useGetYourRoleTaxQuery } from "../../api/TaxonomyFormAPI";
import { getAllTaxonomyData } from "../../helper/AddDeviceHelper";
import AddDeviceStep1 from "./AddDeviceStep1";
import AddDeviceStep2 from "./AddDeviceStep2";
import AddDeviceStep3 from "./AddDeviceStep3";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ButtonsButton } from "../../components/ButtonsButton";
import { LogOut014 } from "../../icons/LogOut014";
import { PlusCircle1 } from "../../icons/PlusCircle1";
import { Upload041 } from "../../icons/Upload041";
import { useAddDeviceMutation } from "../../api/AddDeviceAPI";
import { objectToFormData } from "../../helper/AddDeviceHelper";



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

const AddDeviceParent = () => {

  //For Validation message navidating to steps. Used only when backend validation will be trigger
  const step1FormKey = ["transactionType", "yourRole", "deviceCategory", "oem", "modelName", "statusCondition", "yearofManufacture","availability","modelNumber","serialNumber","price","unitofMeasure","availableQuantity","warranty","shipping","clinicalApplications","purposeUse","physicalLocation",];
  const step2FormKey = ["hardwareHighlights","softwareUpgradesOsApplicationsworklistHighlights","accessoriesHighlights","featureImageObject","galleryImageObject","linkVideo","location",]
  const step3FormKey = ["documentFileObject","documentLink","hardware","softwareUpgraadesOsApplicationsWorklist","accessories","serviceHistory","packingList","additionalInformation",]

  const [addDevice, { isLoading, isError, error }] = useAddDeviceMutation();
  const navigate = useNavigate();
  const transactionTypeTax = useGetTransactionTypeTaxQuery();
  const yourRoleTax = useGetYourRoleTaxQuery();
  const yearofManufactureTax = useGetYearOfManufactureTaxQuery()
  const availabilityTax = useGetAvailabilityTaxQuery()
  const unitOfMeasureTax = useGetUnitOfMeasureDeviceSpareTaxQuery();
  const warrantyTax = useGetWarrantyTaxQuery();
  const shippingTax = useGetShippingTaxQuery();
  const clinicalApplicationsTax = useGetClinicalApplicationsTaxQuery()
  const purposeUseTax = useGetPurposeUseTaxQuery()
  const physicalLocationTax = useGetPhysicalLocationTaxQuery()
  const statusConditionTax = useGetStatusConditionTaxQuery();


  const [allTaxonomy, setAllTaxonomy] = useState({ statusCondition: statusConditionTax, physicalLocation: physicalLocationTax, purposeUse: purposeUseTax, clinicalApplications: clinicalApplicationsTax, shipping: shippingTax, warranty: warrantyTax, unitOfMeasure: unitOfMeasureTax, availability: availabilityTax, yearOfManufacture: yearofManufactureTax, yourRole: yourRoleTax, transactionType: transactionTypeTax, })

  useEffect(() => {

    const allSuccess = [statusConditionTax.isSuccess, physicalLocationTax.isSuccess, purposeUseTax.isSuccess, clinicalApplicationsTax.isSuccess, shippingTax.isSuccess, warrantyTax.isSuccess, unitOfMeasureTax.isSuccess, availabilityTax.isSuccess, yearofManufactureTax.isSuccess, yourRoleTax.isSuccess, transactionTypeTax.isSuccess].every(Boolean);


    if (allSuccess) {
      setAllTaxonomy({
        statusCondition: statusConditionTax, physicalLocation: physicalLocationTax, purposeUse: purposeUseTax, clinicalApplications: clinicalApplicationsTax, shipping: shippingTax, warranty: warrantyTax, unitOfMeasure: unitOfMeasureTax, availability: availabilityTax, yearOfManufacture: yearofManufactureTax, yourRole: yourRoleTax, transactionType: transactionTypeTax
      });
    }
  }, [
    transactionTypeTax.isSuccess, transactionTypeTax.data,
    yourRoleTax.isSuccess, yourRoleTax.data,
    yearofManufactureTax.isSuccess, yearofManufactureTax.data,
    availabilityTax.isSuccess, availabilityTax.data,
    unitOfMeasureTax.isSuccess, unitOfMeasureTax.data,
    warrantyTax.isSuccess, warrantyTax.data,
    shippingTax.isSuccess, shippingTax.data,
    clinicalApplicationsTax.isSuccess, clinicalApplicationsTax.data,
    purposeUseTax.isSuccess, purposeUseTax.data,
    physicalLocationTax.isSuccess, physicalLocationTax.data,
    statusConditionTax.isSuccess, statusConditionTax.data,
  ]);


  const dispatch = useDispatch();
  const formData = useSelector((state) => state.addDevice);
  // const formikContext =  useFormikContext();

  const appData = useSelector((state) => state.appDataAddDevice);
  const [selectedImageFile, setSelectedImageFile] = useState("");
  const [selectedMultiImageFile, setSelectedMultiImageFile] = useState([]);
  const [selectedDocumentFile, setSelectedDocumentFile] = useState("");
  const [cropedImageFile, setCropedImageFile] = useState("");
  const [isImageSelected, setIsImageSelected] = useState(false)
  const [documentCheckboxError, setDocumentCheckboxError] = useState("")
  const [backendValidation, setBackendValidation] = useState([])



  //This snippet used to reset form and applied on reset form button
  const resetForm = () => {
    setSelectedImageFile("")
    setSelectedMultiImageFile([])
    setSelectedDocumentFile("")
    dispatch(clearForm())
    dispatch(clearAppData());
    // purgeStorage()
  }

  const step1Schema = Yup.object({
    // transactionType: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'
    // ),
    // yourRole: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'

    // ),
    // deviceCategory: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'

    // ),
    // oem: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'
    // ),

    // modelName: Yup.string().required("This is a required field").max(30, 'Must be 30 characters or less'),

    // statusCondition: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'

    // ),
    // yearofManufacture: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'

    // ),
    // availability: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'

    // ),
    // modelNumber: Yup.string()
    //   .max(30, 'Must be 30 characters or less'),

    // serialNumber: Yup.string()
    //   .max(30, 'Must be 30 characters or less'),


    // price: Yup.number("Please enter a valid number").required("This is a required field")
    //   .test('decimal-places', 'Only two decimal places are allowed', value => {

    //     const [, decimalPart] = String(value).split('.');
    //     return decimalPart === undefined || decimalPart.length <= 2;
    //   }),

    // unitofMeasure: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'

    // ),
    // availableQuantity: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'

    // ),
    // warranty: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'

    // ),
    // shipping: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'

    // ),
    // clinicalApplications: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'

    // ),
    // purposeUse: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'

    // ),
    // physicalLocation: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'

    // ),
  })

  const step2Schema = Yup.object().shape({
    // hardwareHighlights: Yup.string().required("This is a required field").max(190, 'Must be 190 characters or less'),

    // softwareUpgradesOsApplicationsworklistHighlights: Yup.string().required("This is a required field").max(190, 'Must be 190 characters or less'),

    // accessoriesHighlights: Yup.string().required("This is a required field").max(190, 'Must be 190 characters or less'),

    // location: Yup.string().required("This is a required field").test(
    //   "OPTION", "Please select a valid option",
    //   (value) => value !== '0'
    // ),
    // featureImage: Yup.mixed()
    //   .test(
    //     'fileType',
    //     'Unsupported File Format (only jpeg and png)',
    //     value => {
    //       if (!value) return true
    //       return ['image/jpeg', 'image/png'].includes(value.type)
    //     }
    //   )
    //   .test(
    //     'fileSize',
    //     'File too large (max size 1MB)',
    //     value => !value || (value && value.size <= 1024 * 1024)
    //   )
    //   .required('A file is required'),
    gallery: Yup.array()
      // .min(3, 'Please select atleast three image') 
      .of(
        Yup.mixed()
          .test(
            'fileType',
            'Unsupported File Format (only jpeg and png)',
            value => {
              // if (!value)return true
              return ['image/jpeg', 'image/png'].includes(value.file.type)
            }
          )
          .test(
            'fileSize',
            'File too large (max size 1MB)',
            value => !value.file || (value.file && value.file.size <= 1024 * 1024)
          )

      )
  }
  )

  const step3Schema = Yup.object().shape({

    // hardware: Yup.string().max(1000, 'Must be 1000 characters or less'),

    // softwareUpgraadesOsApplicationsWorklist: Yup.string().max(1000, 'Must be 1000 characters or less'),

    // accessories: Yup.string().max(1000, 'Must be 1000 characters or less'),

    // serviceHistory: Yup.string().max(1000, 'Must be 1000 characters or less'),

    // packingList: Yup.string().max(1000, 'Must be 1000 characters or less'),

    // additionalInformation: Yup.string().max(2000, 'Must be 2000 characters or less'),

    // document: Yup.mixed()
    //   .test(
    //     'fileType',
    //     'Unsupported File Format (only pdf)',
    //     value => {
    //       if (!value) return true
    //       return ['application/pdf'].includes(value.type)
    //     }
    //   )
    //   .test(
    //     'fileSize',
    //     'File too large (max size 1MB)',
    //     value => !value || (value && value.size <= 512 * 512)
    //   )
  })

  const matchErrorsAgainstBackendValidationList = (backendValidationError) => { 
    if (backendValidationError?.length > 0) {

      setBackendValidation(backendValidationError);

      // for (const field of backendValidationError) {
      //   if (step1FormKey.includes(field.path)) {  // Assuming fieldErrors have a 'field' property
      //   dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: 0 }));
      //     break;
      //   }
      // }
      // for (const field of backendValidationError) {
      //   if (step2FormKey.includes(field.path)) {  // Assuming fieldErrors have a 'field' property
      //   dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: 1 }));
      //     break;
      //   }
      // }

      // for (const field of backendValidationError) {
      //   if (step3FormKey.includes(field.path)) {  // Assuming fieldErrors have a 'field' property
      //   dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: 2 }));
      //     break;
      //   }
      // }
      for (const field of backendValidationError) {
        if (step1FormKey.includes(field.path)) {
          dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: 0 }));
          console.log("step1 was true");
          break;
        } else if (step2FormKey.includes(field.path)) {
          console.log("step2 was true");
          dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: 1 }));
          break;
        } else if (step3FormKey.includes(field.path)) {
          console.log("step3 was true");
          dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: 2 }));
        } 
      }
    }
   }

  const finalSubmit = async (multiPartData) => {
    try {

      const response = await addDevice(multiPartData).unwrap();
      // console.log("Device added successfully!", response);
      //If form was submitted successfully then isCreated return with true, then reseting form
      if (response.isCreated) {
        // Reseting form
        resetForm();
        navigate('/devices');
      }
    } catch (err) {
      if (err.status === 422) {
        console.error("Validation errors:", err.data);
      } else {
        // console.error(err);
        if (err) {
          matchErrorsAgainstBackendValidationList(err.data.errors)
        }
        // dispatch(updateAppDataDevice({ case: "CURRENTSTEP", value: 1 }));
      }
    }
  };

  useEffect(() => {
    console.log(backendValidation);


  }, [backendValidation])


  return (
    <Formik
      initialValues={formData}
      // validateOnChange={false}
      // validateOnBlur={false}
      validationSchema={appData.currentStep === 0 ? step1Schema : appData.currentStep === 1 ? step2Schema : appData.currentStep === 2 ? step3Schema : Yup.object().shape({})}
      onSubmit={(values) => {
        // Getting FormData object to send multipart request
        multiPartData = objectToFormData(values, cropedImageFile, selectedMultiImageFile, selectedDocumentFile)
        // console.log(multiPartData);
        //   for (const [key, value] of multiPartData.entries()) {
        //     console.log(key, value);
        // }
        //Final submission of form
        setBackendValidation([]);
        finalSubmit(multiPartData);
        console.log(values);
      }}
    >
      {(formik) => (
        <Form>

          {/* // <Provider value={{physicalLocation, purposeUse, clinicalApplications, shipping, warranty, unitOfMeasure, availability, yearOfManufacture, statusCondition, yourRole, transactionType, cropedImageFile, setCropedImageFile, selectedMultiImageFile, setSelectedMultiImageFile, selectedDocumentFile, setSelectedDocumentFile, selectedImageFile, setSelectedImageFile }}> */}
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

          <Provider value={{ backendValidation, setBackendValidation, documentCheckboxError, setDocumentCheckboxError, isImageSelected, setIsImageSelected, allTaxonomy, cropedImageFile, setCropedImageFile, selectedMultiImageFile, setSelectedMultiImageFile, selectedDocumentFile, setSelectedDocumentFile, selectedImageFile, setSelectedImageFile }}>

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
                          <div className="text-22">Add Device Listing</div>
                          <p className="supporting-text-9">Line 1 about Device Listing</p>
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

                            {/* <Link to="/AddSpare">
                            <button className="button" >
                              <PlusCircle1 className="icon-instance-node" />
                              <div className="text-padding-2">
                              
                                <div className="text-23">Add listing</div>
                              </div>
                              <img className="icon-instance-node" alt="Chevron down" src="/img/chevron-down-3.svg" />
                            </button>
                          </Link> */}
                            <button className="button" type="button" onClick={resetForm
                            }>
                              <PlusCircle1 className="icon-instance-node" />
                              <div className="text-padding-2">

                                <div className="text-23">Reset Form</div>
                              </div>
                              <img className="icon-instance-node" alt="Chevron down" src="/img/chevron-down-3.svg" />
                            </button>
                            {/* <Route path="/AddSpare" component={AddSpare} /> */}
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




            {renderStep(appData.currentStep)}
          </Provider>
        </Form>
      )}
    </Formik>

  );
};

export default AddDeviceParent;