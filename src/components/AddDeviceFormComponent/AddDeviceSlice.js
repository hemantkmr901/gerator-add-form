import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  transactionType: '',
  yourRole: '',
  deviceCategory: '',
  oem: '',
  modelName: '',
  statusCondition: '',
  yearofManufacture: '',
  availability: '',
  modelNumber: '',
  serialNumber: '',
  price: '',
  unitofMeasure: '',
  availableQuantity: '',
  warranty: '',
  shipping: '',
  clinicalApplications: '',
  purposeUse: '',
  physicalLocation: '',
  hardwareHighlights: '',
  softwareUpgradesOsApplicationsworklistHighlights: '',
  accessoriesHighlights: '',
  featureImage: '',
  featureImageLink: '',
  gallery: [null],
  galleryImageLinks: '',
  videoType: '',
  linkVideo: '',
  location: '',
  document: '',
  documentLink: '',
  hardware:'',
  softwareUpgraadesOsApplicationsWorklist:'',
  accessories:'',
  serviceHistory:'',
  packingList:'',
  additionalInformation:'',
}


// const devicesState = {
//   transactionType: '',
//   yourRole: '',
//   deviceCategory: '',
//   oem: '',
//   modelName: '',
//   status: '',
//   yearofManufacture: '',
//   availability: '',
//   modelNumber: '',
//   serialNumber: '',
//   price: '',
//   unitofMeasure: '',
//   availableQuantity: '',
//   warranty: '',
//   shipping: '',
//   clinicalApplications: '',
//   deviceUse: '',
//   physicalLocation: '',
//   hardwareHighlights: '',
//   softwareHighlights: '',
//   accessoriesHighlights: '',
//   featureImageLink:'',
//   galleryImageLinks:'',
//   videoType: '',
//   linkVideo: '',
//   location: '',
//   documentLink: '',
//   hardware:'',
//   software:'',
//   accessories:'',
//   warranty:'',
//   history:'',
//   packingList:'',
//   additionalInformation:'',
// }





const addDeviceSlice = createSlice({
  name: "addDevice",
  initialState,
  reducers: {
    updateField(state, action) {
      const {field, value} = action.payload
      if (value !== undefined) { 
        state[field] = value; 
      }
    },
    clearForm() {
      return initialState;
    }
  },
});

export const { updateField,clearForm } = addDeviceSlice.actions

export default addDeviceSlice.reducer

