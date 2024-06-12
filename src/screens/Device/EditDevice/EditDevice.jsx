import React, { useState } from "react";
import { Steps } from "antd";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { ButtonsButton } from "../../../components/ButtonsButton";
import { LogOut014 } from "../../../icons/LogOut014";
import { PlusCircle1 } from "../../../icons/PlusCircle1";
import { Upload041 } from "../../../icons/Upload041";
import { useDispatch, useSelector } from "react-redux";
import EditDeviceStep1 from "../../../components/EditDeviceFormComponent/EditDeviceStep1";
import EditDeviceStep2 from "../../../components/EditDeviceFormComponent/EditDeviceStep2";
import EditDeviceStep3 from "../../../components/EditDeviceFormComponent/EditDeviceStep3";
import { Navbar } from "../../../components/Navbar/Navbar";
import { SideNav } from "../../../components/SideNav/SideNav";
import { Provider } from "../../Device/EditDevice/EditDeviceContext";
import "./style.css";
import { Link } from "react-router-dom";
import { clearEditDeviceForm, updateEditDeviceField } from "../../../components/EditDeviceFormComponent/EditDeviceSlice";
import { updateAppDataEditDevice, clearAppDataEditDevice } from "../../../components/EditDeviceFormComponent/AppDataEditDeviceSlice";
import { useGetAvailabilityTaxQuery, useGetClinicalApplicationsTaxQuery, useGetPhysicalLocationTaxQuery, useGetPurposeUseTaxQuery, useGetShippingTaxQuery, useGetStatusConditionTaxQuery, useGetTransactionTypeTaxQuery, useGetUnitOfMeasureDeviceSpareTaxQuery, useGetWarrantyTaxQuery, useGetYearOfManufactureTaxQuery, useGetYourRoleTaxQuery } from "../../../api/TaxonomyFormAPI";
// import { purgeStorage } from "../..";

const { Step } = Steps;



const renderStep = (step) => {
  switch (step) {
    case 0:
      return <EditDeviceStep1 />;
    case 1:
      return <EditDeviceStep2 />;
    case 2:
      return <EditDeviceStep3 />;
    default:
      return null;
  }
};

// const resetForm = (e) => {
//   setSelectedImageFile("")
//   setSelectedMultiImageFile([])
//   setSelectedDocumentFile("")
//   dispatch(clearForm())
//   dispatch(clearAppData());
//   // purgeStorage()
// }


export const EditDevice = () => {
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
  const statusConditionTax =  useGetStatusConditionTaxQuery();


  const [allTaxonomy, setAllTaxonomy] = useState({statusCondition:statusConditionTax, physicalLocation : physicalLocationTax, purposeUse:purposeUseTax, clinicalApplications:clinicalApplicationsTax, shipping:shippingTax, warranty:warrantyTax, unitOfMeasure:unitOfMeasureTax, availability:availabilityTax, yearOfManufacture:yearofManufactureTax, yourRole:yourRoleTax, transactionType:transactionTypeTax,})

  useEffect(() => {

    const allSuccess = [statusConditionTax.isSuccess,physicalLocationTax.isSuccess,purposeUseTax.isSuccess,clinicalApplicationsTax.isSuccess,shippingTax.isSuccess,warrantyTax.isSuccess,unitOfMeasureTax.isSuccess,availabilityTax.isSuccess,yearofManufactureTax.isSuccess,yourRoleTax.isSuccess,transactionTypeTax.isSuccess].every(Boolean);


    if (allSuccess) {
      setAllTaxonomy({
        statusCondition:statusConditionTax, physicalLocation : physicalLocationTax, purposeUse:purposeUseTax, clinicalApplications:clinicalApplicationsTax, shipping:shippingTax, warranty:warrantyTax, unitOfMeasure:unitOfMeasureTax, availability:availabilityTax, yearOfManufacture:yearofManufactureTax, yourRole:yourRoleTax, transactionType:transactionTypeTax
      });
    }}, [
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
  const appData = useSelector((state) => state.appDataEditDevice);
  const [selectedImageFile, setSelectedImageFile] = useState("");
  const [selectedMultiImageFile, setSelectedMultiImageFile] = useState([]);
  const [selectedDocumentFile, setSelectedDocumentFile] = useState("");
  const [cropedImageFile, setCropedImageFile] = useState("");
  //Form dropdown data(taxonomy) from db and storing it into useState 
  const [transactionType, setTransactionType] = useState(transactionTypeTax.data)
  const [yourRole, setYourRole] = useState(yourRoleTax.data)

  //This snippet used to reset form and applied on reset form button
  const resetForm = (e) => {
    setSelectedImageFile("")
    setSelectedMultiImageFile([])
    setSelectedDocumentFile("")
    dispatch(clearEditDeviceForm())
    dispatch(clearAppDataEditDevice());
    // purgeStorage()
  }



  return (

    <Provider value={{ allTaxonomy, cropedImageFile, setCropedImageFile, selectedMultiImageFile, setSelectedMultiImageFile, selectedDocumentFile, setSelectedDocumentFile, selectedImageFile, setSelectedImageFile }}>


      <div className="element-dashboard">
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <Navbar />
            <SideNav />

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
                        breadcrumbButtonText1="Edit Device"
                        breakpoint="desktop"
                        className="design-component-instance-node-2"
                        divider="chevron"
                        type="button-gray"
                        visible={false}
                        visible1={false}
                      />
                      <div className="content-12">
                        <div className="text-and-supporting-4">
                          <div className="text-22">Edit Device Listing</div>
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

                            {/* <Link to="/EditSpare">
                            <button className="button" >
                              <PlusCircle1 className="icon-instance-node" />
                              <div className="text-padding-2">
                              
                                <div className="text-23">Edit listing</div>
                              </div>
                              <img className="icon-instance-node" alt="Chevron down" src="/img/chevron-down-3.svg" />
                            </button>
                          </Link> */}
                            <button className="button" onClick={resetForm
                            }>
                              <PlusCircle1 className="icon-instance-node" />
                              <div className="text-padding-2">

                                <div className="text-23">Reset Form</div>
                              </div>
                              <img className="icon-instance-node" alt="Chevron down" src="/img/chevron-down-3.svg" />
                            </button>
                            {/* <Route path="/EditSpare" component={EditSpare} /> */}
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
            {/* <EditDeviceStep1/>
         <EditDeviceStep2/>
         <EditDeviceStep3/> */}



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
