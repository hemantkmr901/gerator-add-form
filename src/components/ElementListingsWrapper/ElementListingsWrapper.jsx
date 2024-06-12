import React from "react";
import "./style.css";
import { useGetDevicesQuery } from "../../api/AddDeviceAPI";
import {Loader} from '../Loader'
import { Link } from "react-router-dom";




export const ElementListingsWrapper = () => {


const { data,
  isLoading,
  isSuccess,
  isError,
  error } = useGetDevicesQuery()

  let content;
  let emptyContent;
  //  const points= useSelector(state=>state.Admin.points);


  const getCustomizedDate = (sqlDate) => { 
    // const date = ; 
    const formattedDate = new Date(sqlDate).toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });

  return formattedDate;
   }

  if (isLoading) {
    content = <Loader/>
  } else if (isSuccess) {
    if(data.length > 0){
      content =  data.map(device => 
        (
        <div className="overlap-22"key={device.id}>
        <img className="rectangle-25" alt="Rectangle" src="/img/rectangle-41.png" />
        <img className="divider-60" alt="Divider" src="/img/divider-4.svg" />
        <p className="text-124">{device.title}</p>
        <div className="group-280">
          <div className="frame-59">
            <div className="frame-60">
              <div className="supporting-text-27">ID# {device.id}</div>
              <div className="group-281">
                <div className="div-13">
                  <img className="img-26" alt="Marker pin" src="/img/marker-pin-02.svg" />
                  <div className="text-wrapper-18">India, New Delhi</div>
                </div>
              </div>
              <div className="group-282">
                <div className="div-13">
                  <img className="img-26" alt="Calendar" src="/img/calendar.svg" />
                  <div className="text-wrapper-18">{getCustomizedDate(device.createdAt)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-283">
          <div className="frame-61">
            <div className="group-284">
              <div className="badge-9">
                <div className="text-125">{device.deviceCategory}</div>
              </div>
            </div>
            <div className="group-285">
              <div className="badge-9">
                <div className="text-125">{device.oem}</div>
              </div>
            </div>
            <div className="group-286">
              <div className="badge-9">
                <div className="text-125">{device.clinicalApplications}</div>
              </div>
            </div>
            <div className="group-287">
              <div className="badge-9">
                <div className="text-125">{device.deviceUse}</div>
              </div>
            </div>
            <div className="group-288">
              <div className="badge-9">
                <div className="text-125">Accounting</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-289">
          <div className="group-290">
            <div className="avatar-18">
              <div className="contrast-border-14" />
            </div>
          </div>
          <div className="group-291">
            <div className="div-10">
              <div className="name-4">Olivia Rhye</div>
              <div className="role-6">Business Name</div>
            </div>
          </div>
        </div>
       
        <img className="img-30" alt="Arrow square up" src="/img/arrow-square-up-right.svg" />
        
      
        <img className="dropdown-4" alt="Dropdown" src="/img/dropdown-5.svg" />
        <div className="group-296">
          <div className="group-297">
            <div className="frame-63">
              <div className="price-3">${device.price}</div>
              <div className="text-127">USD - Per {device.unitofMeasure}</div>
            </div>
          </div>
          <div className="group-298">
            <div className="frame-61">
              <img className="img-31" alt="Radar" src="/img/radar-1-1.png" />
              <img className="img-31" alt="Deal" src="/img/deal-2-1.png" />
              <img className="img-31" alt="Magnifier" src="/img/magnifier-1.png" />
            </div>
          </div>
        </div>
        <div className="group-299">
          <div className="div-13">
          <div className="group-300">
                  <div className="frame-64">
                    <div className="text-129">4.9/5</div>
                  </div>
                </div>
            <div className="supporting-text-28">99,999 reviews</div>
          </div>
        </div>
      </div>
      
    )) 
    }
    else {content = ( <div className="empty-state-wrapper">
    <div className="empty-state">
      <div className="empty-state-2">
        <div className="content-44">
          <img
            className="bifocal-optometry-2"
            alt="Bifocal optometry"
            src="/img/bifocal-optometry-measurement-device-2.png"
          />
          <div className="text-and-supporting-16">
            <div className="text-157">No listings found</div>
            <p className="supporting-text-36">
              Your search “Landing page design” did not match any projects. Please try again.
            </p>
          </div>
        </div>
        <div className="actions-10">
          <div className="buttons-button-37">
            <div className="text-padding-18">
              <div className="text-158">Clear search</div>
            </div>
          </div>
          <div className="buttons-button-38">
            <img className="img-26" alt="Plus" src="/img/plus.svg" />
            <div className="text-padding-18">
              <Link to={"/"}>
              <div className="text-159">Add Listing</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)}
  // content = <Loader/>
  }
  
  else if (isError) {
    content = <div style={{color:"white"}}>{error.originalStatus+" "+error.data}</div>
  }

  return (
    <div className="element-listings-wrapper">
      <div className="rectangle-24" />
      <div className="group-270">
        <div className="logo-4">
          <img className="gerator-5" alt="Gerator" src="/img/gerator-04-1.png" />
        </div>
        <div className="navigation-3">
          <div className="nav-item-base-5">
            <div className="div-9">
              <div className="text-116">Buy</div>
            </div>
            <img className="img-26" alt="Chevron down" src="/img/chevron-down.svg" />
          </div>
          <div className="nav-item-base-6">
            <div className="div-9">
              <div className="text-117">Sell</div>
            </div>
          </div>
          <div className="nav-item-base-5">
            <div className="div-9">
              <div className="text-116">Jobs</div>
            </div>
          </div>
        </div>
        <div className="group-271">
          <div className="input-with-label-17">
            <div className="input-13">
              <div className="content-37">
                <img className="img-26" alt="Search lg" src="/img/search-lg.svg" />
                <input className="text-118" placeholder="Search" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="group-272">
          <img className="nav-item-button-5" alt="Nav item button" src="/img/nav-item-button.svg" />
          <div className="nav-item-button-6">
            <div className="group-273">
              <div className="overlap-group-18">
                <img className="icon-6" alt="Icon" src="/img/icon.svg" />
                <div className="ellipse-7" />
              </div>
            </div>
          </div>
        </div>
        <div className="group-274">
          <div className="div-10">
            <div className="avatar-17">
              <div className="contrast-border-13" />
            </div>
          </div>
        </div>
      </div>
      <div className="main-wrapper">
        <div className="main">
          <div className="header-section-2">
            <div className="container-6">
              <div className="div-11">
                <div className="breadcrumbs-2">
                  <div className="div-12">
                    <img className="img-27" alt="Breadcrumb button" src="/img/breadcrumb-button-base.svg" />
                    <img className="img-28" alt="Chevron right" src="/img/chevron-right.svg" />
                    <div className="breadcrumb-button-6">
                      <div className="text-119">Dashboard</div>
                    </div>
                    <img className="img-28" alt="Chevron right" src="/img/chevron-right.svg" />
                    <div className="breadcrumb-button-7">
                      <div className="text-120">Category</div>
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
      <div className="group-275">
        <div className="page-header-2">
          <div className="content-38">
            <div className="text-and-supporting-13">
              <div className="text-121">314 Listings Found</div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-group-4">
        <div className="button-group-base-10">
          <div className="text-122">View all</div>
        </div>
        <div className="button-group-base-11">
          <div className="text-122">Monitored</div>
        </div>
        <div className="button-group-base-12">
          <div className="text-122">Unmonitored</div>
        </div>
      </div>
      <div className="input-dropdown-4">
        <div className="buttons-button-33">
          <img className="img-26" alt="Sliders" src="/img/sliders-02.svg" />
          <div className="text-padding-17">
            <div className="text-120">Sort By : Relevance</div>
            <img className="img-26" alt="Chevron down" src="/img/chevron-down.svg" />
          </div>
        </div>
      </div>
      <img className="divider-56" alt="Divider" src="/img/divider.svg" />
      <img className="divider-57" alt="Divider" src="/img/divider-1.svg" />
      <img className="divider-58" alt="Divider" src="/img/divider-1.svg" />
      <img className="divider-59" alt="Divider" src="/img/divider.svg" />
      <div className="group-276">
        <div className="footer-5">
          <div className="container-7">
            <div className="content-39">
              <p className="footer-text-5">© Gerator Asia LLP. All rights reserved.</p>
              <div className="logo-5">
                <div className="frame-57">
                  <div className="frame-58">
                    <p className="footer-text-6">All prices are in USD</p>
                  </div>
                  <div className="logomark-3">
                    <div className="logomark-3">
                      <img className="gerator-6" alt="Gerator" src="/img/gerator-10-2.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="supporting-text-26">You searched based on the following criteria.</p>
   



      {/* {content} */}
      {/* listing layout */}
      {/* {data && (
        <div className="group-279" >
          {content}
    </div>
      )}
      {emptyContent && (
        emptyContent
      )} */}

{(data?.length !== 0)?(<div className="group-279" >
          {content}
    </div>):content}

      {/* <div className="group-301">
        <div className="overlap-22">
          <img className="rectangle-25" alt="Rectangle" src="/img/rectangle-41.png" />
          <img className="divider-60" alt="Divider" src="/img/divider-4.svg" />
          <p className="text-124">New / Surplus 2021 Philips Healthcare HD11 XE (P/N:23A10) for abalatio...</p>
          <div className="group-283">
            <div className="frame-61">
              <div className="group-284">
                <div className="badge-9">
                  <div className="text-125">3D Image Workstations</div>
                </div>
              </div>
              <div className="group-285">
                <div className="badge-9">
                  <div className="text-125">11 Health</div>
                </div>
              </div>
              <div className="group-286">
                <div className="badge-9">
                  <div className="text-125">Anatomy</div>
                </div>
              </div>
              <div className="group-287">
                <div className="badge-9">
                  <div className="text-125">Patient / Rehabititatiin</div>
                </div>
              </div>
              <div className="group-288">
                <div className="badge-9">
                  <div className="text-125">Accounting</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-302">
            <div className="group-290">
              <div className="avatar-19">
                <div className="contrast-border-14" />
              </div>
            </div>
            <div className="group-303">
              <div className="div-10">
                <div className="name-4">Olivia Rhye</div>
                <div className="role-7">Business Name</div>
              </div>
            </div>
          </div>
          <div className="group-292">
            <div className="frame-62">
              <div className="group-293">
                <div className="buttons-button-35">
                  <img className="img-29" alt="Eye" src="/img/eye.svg" />
                  <div className="text-padding-18">
                    <div className="text-123">View</div>
                  </div>
                </div>
              </div>
              <div className="group-294">
                <div className="buttons-button-35">
                  <img className="icon-7" alt="Icon" src="/img/icon-1.svg" />
                  <div className="text-padding-18">
                    <div className="text-123">Sales IQ</div>
                  </div>
                  <img className="img-29" alt="Lock" src="/img/lock-04.svg" />
                </div>
              </div>
              <div className="group-294">
                <div className="buttons-button-35">
                  <img className="icon-7" alt="Icon" src="/img/icon-2.svg" />
                  <div className="text-padding-18">
                    <div className="text-123">Sales IQ</div>
                  </div>
                  <img className="img-29" alt="Lock unlocked" src="/img/lock-unlocked-04.svg" />
                </div>
              </div>
            </div>
          </div>
          <img className="img-30" alt="Group" src="/img/group-252.png" />
          <img className="dropdown-4" alt="Dropdown" src="/img/dropdown-6.svg" />
          <div className="group-296">
            <div className="group-297">
              <div className="frame-63">
                <div className="price-3">$9,999,999.99</div>
                <div className="text-127">USD - Per Unit</div>
              </div>
            </div>
            <div className="group-298">
              <div className="frame-61">
                <img className="img-31" alt="Radar" src="/img/radar-1-1.png" />
                <img className="img-31" alt="Deal" src="/img/deal-2-1.png" />
                <img className="img-31" alt="Magnifier" src="/img/magnifier-1.png" />
              </div>
            </div>
          </div>
          <div className="rating-wrapper">
            <div className="div-13">
              <div className="group-304">
                <div className="div-13">
                  <div className="group-300">
                    <div className="frame-64">
                      <div className="text-129">4.9/5</div>
                    </div>
                  </div>
                  <div className="supporting-text-28">99,999 reviews</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-305">
            <div className="group-306">
              <div className="frame-59">
                <div className="frame-60">
                  <div className="supporting-text-27">ID# AXJYN</div>
                  <div className="group-281">
                    <div className="div-13">
                      <img className="img-26" alt="Marker pin" src="/img/marker-pin-02-1.svg" />
                      <div className="text-wrapper-18">India, New Delhi</div>
                    </div>
                  </div>
                  <div className="group-282">
                    <div className="div-13">
                      <img className="img-26" alt="Calendar" src="/img/calendar-1.svg" />
                      <div className="text-wrapper-18">April 09, 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-307">
              <div className="badge-11">
                <div className="text-130">Pending</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
     
     {/* Listing data empty layout */}
     
      
      <div className="group-376">
        <div className="overlap-25">
      <img className="divider-65" alt="Divider" src="/img/divider-7.svg" />
          <div className="rectangle-35" />
          <div className="rectangle-36" />
          <img className="divider-66" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-67" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-68" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-69" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-70" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-71" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-72" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-73" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-74" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-75" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-76" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-77" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-78" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-79" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-80" alt="Divider" src="/img/divider-13.svg" />
          <div className="group-377">
            <div className="slide-out-menu-2">
              <div className="content-48">
                <div className="text-and-supporting-18">
                  <div className="text-164">Filters</div>
                  <p className="supporting-text-39">Apply filters to table data.</p>
                </div>
              </div>
              <img className="button-close-x-2" alt="Button close x" src="/img/button-close-x.svg" />
            </div>
          </div>
          <div className="group-378">
            <div className="section-4">
              <div className="frame-69">
                <div className="content-49">
                  <div className="text-165">Seller Role</div>
                </div>
                <img className="img-26" alt="Chevron down" src="/img/chevron-down.svg" />
              </div>
              <div className="checkboxes-3">
                <div className="checkbox-4">
                  <div className="input-15">
                    <div className="checkbox-base-4" />
                  </div>
                  <div className="div-14">
                    <div className="text-166">Dealer/Distributor</div>
                  </div>
                </div>
                <div className="checkbox-4">
                  <div className="input-15">
                    <div className="checkbox-base-4" />
                  </div>
                  <div className="div-14">
                    <div className="text-166">Manufacturer</div>
                  </div>
                </div>
                <div className="checkbox-4">
                  <div className="input-15">
                    <div className="checkbox-base-4" />
                  </div>
                  <div className="div-14">
                    <div className="text-166">Owner/Employee</div>
                  </div>
                </div>
                <div className="checkbox-4">
                  <div className="input-15">
                    <div className="checkbox-base-4" />
                  </div>
                  <div className="div-14">
                    <div className="text-166">Third Party/Agent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-379">
            <div className="section-4">
              <div className="frame-69">
                <div className="content-49">
                  <div className="text-165">Date Posted</div>
                </div>
                <img className="img-26" alt="Chevron down" src="/img/chevron-down.svg" />
              </div>
            </div>
          </div>
          <div className="group-380">
            <div className="section-4">
              <div className="frame-69">
                <div className="content-49">
                  <div className="text-165">Status</div>
                </div>
                <img className="img-26" alt="Chevron down" src="/img/chevron-down.svg" />
              </div>
            </div>
          </div>
          <div className="group-381">
            <div className="section-4">
              <div className="frame-69">
                <div className="content-49">
                  <div className="text-165">Warranty</div>
                </div>
                <img className="img-26" alt="Chevron down" src="/img/chevron-down.svg" />
              </div>
            </div>
          </div>
          <div className="group-382">
            <div className="section-4">
              <div className="frame-69">
                <div className="content-49">
                  <div className="text-165">Shipping</div>
                </div>
                <img className="img-26" alt="Chevron down" src="/img/chevron-down.svg" />
              </div>
            </div>
          </div>
          <img className="divider-81" alt="Divider" src="/img/divider-29.svg" />
          <img className="divider-82" alt="Divider" src="/img/divider-29.svg" />
          <img className="divider-83" alt="Divider" src="/img/divider-29.svg" />
          <div className="group-383">
            <div className="frame-70">
              <div className="content-49">
                <img className="img-26" alt="Search lg" src="/img/search-lg.svg" />
                <div className="text-165">Country</div>
              </div>
            </div>
          </div>
          <div className="group-384">
            <div className="frame-70">
              <div className="content-49">
                <img className="img-26" alt="Search lg" src="/img/search-lg.svg" />
                <div className="text-165">Device Category</div>
              </div>
            </div>
          </div>
          <div className="group-385">
            <div className="frame-70">
              <div className="content-49">
                <img className="img-26" alt="Search lg" src="/img/search-lg.svg" />
                <div className="text-165">OEM Brand</div>
              </div>
            </div>
          </div>
          <img className="divider-84" alt="Divider" src="/img/divider-29.svg" />
          <div className="group-386">
            <div className="frame-70">
              <div className="content-49">
                <img className="img-26" alt="Search lg" src="/img/search-lg.svg" />
                <div className="text-165">Year of Manufacture</div>
              </div>
            </div>
          </div>
          <img className="divider-85" alt="Divider" src="/img/divider-29.svg" />
          <div className="group-387">
            <div className="frame-70">
              <div className="content-49">
                <img className="img-26" alt="Search lg" src="/img/search-lg.svg" />
                <div className="text-165">Clinical Applications</div>
              </div>
            </div>
          </div>
          <img className="divider-86" alt="Divider" src="/img/divider-29.svg" />
          <div className="group-388">
            <div className="frame-70">
              <div className="content-49">
                <img className="img-26" alt="Search lg" src="/img/search-lg.svg" />
                <div className="text-165">Device Use</div>
              </div>
            </div>
          </div>
          <div className="group-389">
            <div className="frame-70">
              <div className="content-49">
                <img className="img-26" alt="Search lg" src="/img/search-lg.svg" />
                <div className="text-165">Physical Location</div>
              </div>
            </div>
          </div>
          <div className="group-390">
            <div className="section-4">
              <div className="frame-69">
                <div className="content-49">
                  <div className="text-165">Transaction Type</div>
                </div>
                <img className="img-26" alt="Chevron down" src="/img/chevron-down.svg" />
              </div>
              <div className="checkboxes-3">
                <div className="checkbox-4">
                  <div className="input-15">
                    <div className="checkbox-base-4" />
                  </div>
                  <div className="div-14">
                    <div className="text-166">Exchange</div>
                  </div>
                </div>
                <div className="checkbox-4">
                  <div className="input-15">
                    <div className="checkbox-base-4" />
                  </div>
                  <div className="div-14">
                    <div className="text-166">Rent/Lease</div>
                  </div>
                </div>
                <div className="checkbox-4">
                  <div className="input-15">
                    <div className="checkbox-base-4" />
                  </div>
                  <div className="div-14">
                    <div className="text-166">Sale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-391">
            <div className="footer-6">
              <div className="content-50">
                <div className="actions-11">
                  <div className="buttons-button-39">
                    <div className="text-167">Save filter</div>
                  </div>
                </div>
                <div className="actions-12">
                  <button className="button-12">
                    <div className="text-padding-17">
                      <div className="text-120">Cancel</div>
                    </div>
                  </button>
                  <button className="button-13">
                    <div className="text-padding-17">
                      <div className="text-161">Apply</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="group-392">
            <div className="input-fields-2">
              <div className="input-field-11">
                <div className="input-with-label-18">
                  <div className="input-16">
                    <div className="content-37">
                      <div className="text-168">Jan 6, 2024</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-169">–</div>
              <div className="input-field-11">
                <div className="input-with-label-18">
                  <div className="input-16">
                    <div className="content-37">
                      <div className="text-168">Jan 12, 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-393">
            <div className="input-fields-2">
              <div className="input-field-11">
                <div className="input-with-label-18">
                  <div className="input-16">
                    <input className="content-51" placeholder="Search" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-37" />
          <div className="group-394">
            <div className="frame-71">
              <div className="content-49">
                <div className="text-165">Price</div>
              </div>
              <img className="img-26" alt="Chevron down" src="/img/chevron-down.svg" />
            </div>
            <div className="group-395">
              <div className="input-fields-2">
                <div className="input-field-12">
                  <div className="input-with-label-18">
                    <div className="input-17">
                      <div className="content-52">
                        <div className="text-168">Min Value</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-169">–</div>
                <div className="input-field-12">
                  <div className="input-with-label-18">
                    <div className="input-17">
                      <div className="content-52">
                        <div className="text-168">Max Value</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-396">
              <div className="checkboxes-4">
                <div className="checkbox-4">
                  <div className="input-15">
                    <div className="checkbox-base-4" />
                  </div>
                  <div className="div-14">
                    <div className="text-166">US$ 0 — US$ 1,000</div>
                  </div>
                </div>
                <div className="checkbox-4">
                  <div className="input-15">
                    <div className="checkbox-base-4" />
                  </div>
                  <div className="div-14">
                    <div className="text-166">US$ 1,001 — US$ 5,000</div>
                  </div>
                </div>
                <div className="checkbox-4">
                  <div className="input-15">
                    <div className="checkbox-base-4" />
                  </div>
                  <div className="div-14">
                    <div className="text-166">US$ 5,001 — US$ 15,000</div>
                  </div>
                </div>
                <div className="checkbox-4">
                  <div className="input-15">
                    <div className="checkbox-base-4" />
                  </div>
                  <div className="div-14">
                    <div className="text-166">US$ 15,001 — US$ 9,999,999</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-397">
              <div className="div-wrapper-2">
                <div className="overlap-group-22">
                  <div className="progress-2">
                    <div className="control-handle-2">
                      <div className="tooltip-5">
                        <div className="content-53">
                          <div className="text-170">0</div>
                        </div>
                      </div>
                    </div>
                    <div className="control-handle-3">
                      <div className="tooltip-6">
                        <div className="content-53">
                          <div className="text-170">9,999,999,99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-26">
          <img className="divider-87" alt="Divider" src="/img/divider-13.svg" />
          <img className="divider-88" alt="Divider" src="/img/divider-29.svg" />
        </div>
      </div>
      <div className="buttons-button-40">
        <div className="text-padding-17">
          <div className="text-120">All time</div>
        </div>
        <img className="img-26" alt="X close" src="/img/x-close.svg" />
      </div>
      <div className="buttons-button-41">
        <div className="text-padding-17">
          <div className="text-120">Clinical Applications</div>
        </div>
        <img className="img-26" alt="X close" src="/img/x-close.svg" />
      </div>
      <div className="buttons-button-42">
        <div className="text-padding-17">
          <div className="text-120">US, AU, +4</div>
        </div>
        <img className="img-26" alt="X close" src="/img/x-close.svg" />
      </div>
      <div className="buttons-button-43">
        <div className="text-padding-17">
          <div className="text-120">All/Employee</div>
        </div>
        <img className="img-26" alt="X close" src="/img/x-close.svg" />
      </div>
      <div className="buttons-button-44">
        <div className="text-padding-17">
          <div className="text-120">Clinical Applications</div>
        </div>
        <img className="img-26" alt="X close" src="/img/x-close.svg" />
      </div>
      <div className="buttons-button-45">
        <div className="text-padding-17">
          <div className="text-120">Year of Manufacture</div>
        </div>
        <img className="img-26" alt="X close" src="/img/x-close.svg" />
      </div>
      <div className="buttons-button-46">
        <div className="text-padding-17">
          <div className="text-120">Warrenty</div>
        </div>
        <img className="img-26" alt="X close" src="/img/x-close.svg" />
      </div>
      <div className="buttons-button-47">
        <div className="text-padding-17">
          <div className="text-120">Manufacturer</div>
        </div>
        <img className="img-26" alt="X close" src="/img/x-close.svg" />
      </div>
      <div className="buttons-button-48">
        <div className="text-padding-17">
          <div className="text-120">All Applications</div>
        </div>
        <img className="img-26" alt="X close" src="/img/x-close.svg" />
      </div>
      <div className="buttons-button-49">
        <div className="text-padding-17">
          <div className="text-120">Rent/Lease</div>
        </div>
        <img className="img-26" alt="X close" src="/img/x-close.svg" />
      </div>
      <div className="buttons-button-50">
        <img className="img-26" alt="Filter lines" src="/img/filter-lines.svg" />
        <div className="text-padding-17">
          <div className="text-120">More filters</div>
        </div>
      </div>
      <div className="buttons-button-51">
        <img className="img-26" alt="Filter funnel" src="/img/filter-funnel-01.svg" />
        <div className="text-padding-17">
          <div className="text-171">Clear Filter</div>
        </div>
      </div>
      <div className="actions-13">
        <button className="button-15">
          <img className="img-26" alt="Filter lines" src="/img/filter-lines.svg" />
          <div className="text-padding-18">
            <div className="text-120">Save Filter</div>
          </div>
        </button>
      </div>
    </div>
  );
};
