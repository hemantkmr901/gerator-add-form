import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  id:'',
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
  featureImageLink:'',
  featureImage: '',
  featureImageObject: {},
  galleryImageLinks:'',
  gallery: "",
  galleryObjectArray: [],
  videoType: '',
  linkVideo: '',
  location: '',
  document: '',
  documentFileObject: {},
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





const editDeviceSlice = createSlice({
  name: "editDevice",
  initialState,
  reducers: {
    fillEditDeviceForm(state, action) {
     return action.payload;
    },
    updateEditDeviceField(state, action) {
      const {field, value} = action.payload
      if (value !== undefined) { 
        state[field] = value; 
      }
    },
    clearEditDeviceForm() {
      return initialState;
    }
  },
});

export const { updateEditDeviceField,clearEditDeviceForm,fillEditDeviceForm } = editDeviceSlice.actions

export default editDeviceSlice.reducer

