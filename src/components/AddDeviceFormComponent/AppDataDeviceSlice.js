import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
  myfieldinsideradio: false,
  isYoutubeChecked: false,
  isVimeoChecked: false,
  // selectedImageFile: '',
  // selectedMultiImageFile: '',
  // selectedDocumentFile: '',
  currentStep: 0
}

const appDataAddDeviceSlice = createSlice({
  name: "appDataAddDevice",
  initialState,
  reducers: {
    updateAppDataDevice(state, action) {
      // state = produce(state, draft =>{
      // })
      const {field,value } = action.payload;
      switch (action.payload.case) {
        case "CURRENTSTEP":
          state.currentStep = action.payload.value;
        break;
        case "VIDEO":
          if (value !== undefined) { 
            state[field] = value; 
          }
        break;
        case "FEATUREIMAGE":
          if (value !== undefined) { 
            state[field] = value; 
          }
        break;
        default:
        break;
      }
   
    },
    clearAppData() {
      return initialState;
    }
  },
});

export const {updateAppDataDevice, clearAppData} = appDataAddDeviceSlice.actions

export default appDataAddDeviceSlice.reducer