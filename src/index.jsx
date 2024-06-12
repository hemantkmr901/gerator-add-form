import React from "react";
import ReactDOMClient from "react-dom/client";
import { Provider } from 'react-redux';
import { persistStore } from "redux-persist";
import { App } from "./App";
import { store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
// import "./index.css";
const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
// const persistedStore = persistStore(store);

// export const purgeStorage = async() => { await persistedStore.flush() }
export const purgeStorage = async() => {  }

// purgeStorage()

root.render(
    <Provider store={store}>
        {/* <PersistGate   persistor={persistedStore}> */}
            <App />
        {/* </PersistGate> */}
    </Provider>
);
