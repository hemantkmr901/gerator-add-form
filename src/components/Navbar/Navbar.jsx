// import React from 'react'
import { ChevronDown1 } from "../../icons/ChevronDown1";
import { SearchLg1 } from "../../icons/SearchLg1";
// import  "../../screens/AddDevice/style.css";


export const Navbar = () => {
  return (
    <div className="group">
    <div className="logo">
      <img className="gerator" alt="Gerator" src="/img/gerator-04-1.png" />
    </div>
    <div className="navigation">
      <div className="nav-item-base">
        <div className="div-4">
          <div className="text-16">Buy</div>
        </div>
        <ChevronDown1 className="icon-instance-node" color="#667085" />
      </div>
      <div className="nav-item-base-2">
        <div className="div-4">
          <div className="text-17">Sell</div>
        </div>
      </div>
      <div className="nav-item-base">
        <div className="div-4">
          <div className="text-16">Jobs</div>
        </div>
      </div>
    </div>
    <div className="input-with-label-wrapper">
      <div className="input-with-label">
        <div className="input-2">
          <div className="content-9">
            <SearchLg1 className="icon-instance-node" />
            <input className="text-18" placeholder="Search" type="text" name="search" />
          </div>
        </div>
      </div>
    </div>
    <div className="group-2">
      <img className="nav-item-button-2" alt="Nav item button" src="/img/nav-item-button.svg" />
      <div className="group-wrapper">
        <div className="group-3">
          <div className="overlap-group-4">
            <img className="icon" alt="Icon" src="/img/icon.svg" />
            <div className="ellipse" />
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown-wrapper">
      <div className="dropdown">
        <div className="contrast-border-wrapper">
          <div className="contrast-border-3" />
        </div>
      </div>
    </div>
  </div>
  )
}
