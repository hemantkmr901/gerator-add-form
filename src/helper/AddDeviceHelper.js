import { useEffect, useState } from "react";
import { useGetAvailabilityTaxQuery, useGetClinicalApplicationsTaxQuery, useGetPhysicalLocationTaxQuery, useGetPurposeUseTaxQuery, useGetShippingTaxQuery, useGetStatusConditionTaxQuery, useGetTransactionTypeTaxQuery, useGetUnitOfMeasureDeviceSpareTaxQuery, useGetWarrantyTaxQuery, useGetYearOfManufactureTaxQuery, useGetYourRoleTaxQuery } from "../api/TaxonomyFormAPI";


export function objectToFormData(obj, featureImage,galleryImage,document) {
    const formData = new FormData();
    const values = {...obj};
    values.featureImage = "";
    values.gallery = ""
    values.document = "";
    for (const key in values) {
      formData.append(key, values[key]);
    }

    // Appending featureImage to formData
    formData.append("featureImageObject", featureImage);
    //  Appending galleryImage to formData
        for (let i = 0; i < galleryImage.length; i++) {
            const file = galleryImage[i].file;
            formData.append('galleryImageObject', file);
          }
     //Appending documentFile to formData also checking if user has uploaded document or not
        if (document !== "" || document.length !== 0) {
          formData.append("documentFileObject", document);
        }

    return formData;
  }


  export function getCustomizedDate(sqlDate){ 
    // const date = ; 
    const formattedDate = new Date(sqlDate).toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });

  return formattedDate;
   }

  export function getAllTaxonomyData() {
   

    return allTaxonomy;
   }