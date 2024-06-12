import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { ButtonsButton } from "../../../components/ButtonsButton";
import { LogOut014 } from "../../../icons/LogOut014";
import { PlusCircle1 } from "../../../icons/PlusCircle1";
import { Upload041 } from "../../../icons/Upload041";
import { Navbar } from "../../../components/Navbar/Navbar";
import { SideNav } from "../../../components/SideNav/SideNav";
import "./style.css";
import AddDeviceParent from "../../../components/AddDeviceFormComponent/AddDeviceParent";


export const AddDevice = () => {
 
  return (

    <>
    
      <div className="element-dashboard">
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <Navbar />
            <SideNav />

            {/* Second side nav form */}


        <AddDeviceParent/>
        
            {/* <AddDeviceStep1/>
         <AddDeviceStep2/>
         <AddDeviceStep3/> */}



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

      </>


  );
};
