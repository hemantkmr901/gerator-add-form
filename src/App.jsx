import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AddDevice } from "./screens/Device/AddDevice";
import { AddSpare } from "./screens/AddSpare/AddSpare";
import { Desktop } from "./screens/Desktop";
// import { Navbar } from "./components/Navbar/Navbar";
import { ElementListingsScreen } from "./components/ElementListingsScreen";
import { ArchiveDevice } from "./screens/Device/ArchiveDevice";
import { EditDevice } from "./screens/Device/EditDevice";
import { SinglePostDevice } from "./screens/Device/SinglePostDevice/SinglePostDevice";
import AddDeviceParent from "./components/AddDeviceFormComponent/AddDeviceParent";
import { TagCloseX } from "./components/TagCloseX";
import { Checkbox } from "./components/Checkbox";
import { XClose5 } from "./icons/XClose5";
import { XClose31 } from "./icons/XClose31";
import { CheckboxBase } from "./components/CheckboxBase";



const router = createBrowserRouter([
  {
    path: "/devices3",
    element: <ElementListingsScreen/>,
  },
  {
    path: "/devices",
    element: <ArchiveDevice/>,
  },
  {
    path: "/devices/:id/:title",
    element: <SinglePostDevice/>,
  },
  {
    path: "/",
    element: <AddDevice/>,
    // element: <AddDeviceParent/>,
    
  },
  {
    path: "/edit-device/:id/*",
    element: <EditDevice/>,
  },
  {
    path: "/5u4600u4600-dashboard-frame-layout",
    element: <TagCloseX/>,
  },
  {
    path: "/desktop",
    element: <Desktop />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
