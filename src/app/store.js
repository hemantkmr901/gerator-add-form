import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";
import addDeviceReducer from '../components/AddDeviceFormComponent/AddDeviceSlice';
import editDeviceReducer from '../components/EditDeviceFormComponent/EditDeviceSlice'
import appDataAddDeviceReducer from '../components/AddDeviceFormComponent/AppDataDeviceSlice';
import appDataEditDeviceReducer from '../components/EditDeviceFormComponent/AppDataEditDeviceSlice';

import { AddDeviceAPI } from '../api/AddDeviceAPI';
import { TaxonomyFormAPI } from '../api/TaxonomyFormAPI';

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
//   blacklist:['devices']
// }

const reducer = combineReducers({
  addDevice: addDeviceReducer,
  editDevice: editDeviceReducer,
  appDataAddDevice: appDataAddDeviceReducer,
  appDataEditDevice: appDataEditDeviceReducer,
  [AddDeviceAPI.reducerPath]: AddDeviceAPI.reducer,
  [TaxonomyFormAPI.reducerPath]: TaxonomyFormAPI.reducer,
})

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(AddDeviceAPI.middleware,TaxonomyFormAPI.middleware),
// });


export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(AddDeviceAPI.middleware,TaxonomyFormAPI.middleware),
});