import React, { useRef } from "react";
import "./style.css";
import { Formik, useField } from "formik";
import * as Yup from "yup";
import { title } from "process";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useFindGetDeviceQuery } from "../../../api/AddDeviceAPI";
import { Loader } from "../../../components/Loader";
import { getCustomizedDate } from "../../../helper/AddDeviceHelper";

// const MyTextInput_not_mandatory = ({ label, ...props }) => {
//   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//   // which we can spread on <input>. We can use field meta to show an error
//   // message if the field is invalid and it has been touched (i.e. visited)
//   const [field, meta] = useField(props);
//   return (
//     <>
//       {/* <label className="label">Model Number</label> */}

//       <label className="label" htmlFor={props.id || props.name}>
//         {label}

//       </label>
//       <input
//         className="myinputfield_not_mandatory "
//         {...field}
//         {...props}

//       />



//       {/* <input className="text-input" {...field} {...props} /> */}
//       {meta.touched && meta.error ? (

//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };


export const SinglePostDevice = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
 
  const { data,
    isLoading,
    isSuccess,
    isError,
    error } = useFindGetDeviceQuery(id);
    let content;

console.log(isSuccess);
console.log(isError);

if (isLoading) {
  content = <Loader/>
} else if (isSuccess) {
  return (
    <>
      <div className="element-listings">
      <div className="group">
        <div className="overlap">
          <div className="rectangle" />
          <div className="group-2">
            <div className="logo">
              <img className="gerator" alt="Gerator" src="/img/gerator-04-1.png" />
            </div>
            <div className="navigation">
              <div className="nav-item-base">
                <div className="div-3">
                  <div className="text-5">Buy</div>
                </div>
                <img className="overlap-group-wrapper" alt="Chevron down" src="/img/chevron-down.png" />
              </div>
              <div className="nav-item-base-2">
                <div className="div-3">
                  <div className="text-6">Sell</div>
                </div>
              </div>
              <div className="nav-item-base">
                <div className="div-3">
                  <div className="text-5">Jobs</div>
                </div>
              </div>
            </div>
            <div className="input-with-label-wrapper">
              <div className="input-with-label">
                <div className="content-wrapper">
                  <div className="content-4">
                    <img className="overlap-group-wrapper" alt="Search lg" src="/img/search-lg.png" />
                    <input className="text-7" placeholder="Search" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group-3">
              <img className="nav-item-button" alt="Nav item button" src="/img/nav-item-button.png" />
              <div className="group-wrapper">
                <div className="div-wrapper">
                  <div className="overlap-group">
                    <img className="icon" alt="Icon" src="/img/icon-2x.png" />
                    <div className="ellipse" />
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown-wrapper">
              <div className="div-4">
                <div className="avatar">
                  <div className="contrast-border" />
                </div>
              </div>
            </div>
          </div>
          <img className="img" alt="Divider" src="/img/divider.png" />
          <div className="tabs-wrapper">
            <div className="tabs">
              <div className="breadcrumb-button">
                <div className="text-8">Dashboard</div>
              </div>
              <img className="img-2" alt="Chevron right" src="/img/chevron-right.png" />
              <div className="breadcrumb-button-2">
                <div className="text-9">Device</div>
              </div>
            </div>
          </div>
          {data.galleryImageLinks.map((link,index,array) => (
            <img className={"rectangle-"+(index+2)} alt="Rectangle" src={link} />
          ))}
          {/* <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-6.png" />
          <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-7.png" />
          <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-8.png" />
          <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-9.png" /> */}
          <div className="section-wrapper">
            <div className="section-2">
              <div className="heading">Hardware</div>
              <p className="p">
                Biparietal diameter - (BPD) used to determine fetal age and normal development (small/large/abnormal)
                parameters. Measured as the diameter between the 2 sides of the head, measurements after 13 weeks (2.4
                cm) to term (9.5 cm).
              </p>
            </div>
          </div>
          <div className="group-4">
            <div className="section-2">
              <p className="heading">Software / Upgrade / OS / Applications / Worklist - Highlights</p>
              <p className="p">Biopsies of abdominal organs can be performed under ultrasound guidance</p>
            </div>
          </div>
          <div className="group-5a">
            <div className="section-2">
              <div className="heading">Accessories - Highlights</div>
              <p className="p">fracture risk, metabolic health, pediatric development or scrcopenia</p>
            </div>
          </div>
          <div className="group-6a">
            <div className="section-2">
              <div className="heading">Location</div>
              <p className="p">500N Eastern Blvd, Montgomery, Alabama, USA 36117</p>
            </div>
          </div>
          <img className="divider-2" alt="Divider" src="/img/image.png" />
          <div className="heading-2">Highlights</div>
          <div className="frame-wrapper">
            <div className="frame">
              <p className="paragraph">
                Anti-Hyaluronidase (AHT) Streptococcus A Antibody Detection, Identification Reagents
              </p>
              <div className="paragraph-2">Device Category</div>
            </div>
          </div>
          <div className="group-7">
            <div className="frame">
              <div className="paragraph">March 1, 2021</div>
              <div className="paragraph-2">Available From</div>
            </div>
          </div>
          <div className="group-8a">
            <div className="frame">
              <div className="paragraph">Anatomy, Physiology</div>
              <div className="paragraph-2">Clinical Applications</div>
            </div>
          </div>
          <br />
          <div className="group-9a">
            <div className="frame">
              <div className="paragraph">Fittydent-Altwirth &amp; Schmitt</div>
              <div className="paragraph-2">OEM Brand</div>
            </div>
          </div>
          <div className="group-10">
            <div className="frame">
              <div className="paragraph">AB9887727</div>
              <div className="paragraph-2">Model Number</div>
            </div>
          </div>
          <div className="group-11">
            <div className="frame">
              <div className="paragraph">Patient, Condition, Disease, Diagnosis</div>
              <div className="paragraph-2">Device Use</div>
            </div>
          </div>
          <div className="group-12">
            <div className="frame">
              <div className="paragraph">EchoStar</div>
              <div className="paragraph-2">Model Name</div>
            </div>
          </div>
          <div className="group-13">
            <div className="frame">
              <div className="paragraph">234356546</div>
              <div className="paragraph-2">Serial Number</div>
            </div>
          </div>
          <div className="group-14">
            <div className="frame">
              <div className="paragraph">Administrative Office, Accounting</div>
              <div className="paragraph-2">Physical Location</div>
            </div>
          </div>
          <div className="group-15">
            <div className="frame-2">
              <div className="paragraph">New</div>
              <div className="paragraph-2">Status</div>
            </div>
            <div className="frame-3">
              <p className="paragraph">Seller does not offer warranty</p>
              <div className="paragraph-2">Warranty</div>
            </div>
            <div className="frame-4">
              <div className="paragraph">1980</div>
              <div className="paragraph-2">Year of Manufacture</div>
            </div>
          </div>
          <div className="group-16">
            <div className="frame">
              <div className="paragraph">Buyer to organize shipping</div>
              <div className="paragraph-2">Shipping</div>
            </div>
          </div>
          <p className="text-10">
            <span className="span">
              {data.title}
            </span>
          </p>

          <img className="dropdown" alt="Dropdown" src="/img/dropdown.png" />
          <div className="overlap-2">
            <div className="group-17">
              <div className="group-18">
                <div className="frame-5">
                  <button className="buttons-button-2">
                    <img className="radar" alt="Radar" src="/img/radar-1-1.png" />
                    <div className="text-padding-2">
                      <div className="text-11">Add To Radar</div>
                    </div>
                  </button>
                  <button className="buttons-button-3">
                    <img className="img-3" alt="Deal" src="/img/deal-2-1.png" />
                  </button>
                  <button className="buttons-button-3">
                    <img className="img-3" alt="Magnifier" src="/img/magnifier-1.png" />
                  </button>
                  <button className="buttons-button-3">
                    <img className="img-3" alt="Share" src="/img/share-1.png" />
                  </button>
                </div>
              </div>
              <div className="group-19">
                <div className="frame-6">
                  <div className="frame-7">
                    <img className="overlap-group-wrapper" alt="Marker pin" src="/img/marker-pin-02.png" />
                    <div className="supporting-text-2">{data.location}</div>
                  </div>
                  <div className="frame-7">
                    <img className="overlap-group-wrapper" alt="Calendar" src="/img/calendar.png" />
                    <div className="supporting-text-2">{getCustomizedDate(data.createdAt)}</div>
                  </div>
                </div>
              </div>
              <div className="group-20">
                <div className="group-21">
                  <div className="frame-5">
                    <div className="group-22">
                      <div className="frame-8">
                        <div className="text-12">4.9/5</div>
                      </div>
                    </div>
                    <div className="supporting-text-3">99,999 reviews</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-3">
                <img className="group-23" alt="Group" src="/img/group-1010.png" />
                <div className="group-24">
                  <div className="group-25">
                    <div className="frame-9">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <div className="ellipse-2" />
                          <img className="img-4" alt="Facebook" src="/img/facebook-1-1.png" />
                        </div>
                      </div>
                      <div className="group-26" />
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <div className="ellipse-3" />
                          <img className="img-4" alt="Whatsapp" src="/img/whatsapp-1.png" />
                        </div>
                      </div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <div className="ellipse-2" />
                          <img className="img-4" alt="Twitter" src="/img/twitter-1.png" />
                        </div>
                      </div>
                      <div className="group-27" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons-button-wrapper">
            <div className="buttons-button-4">
              <img className="maximize" alt="Maximize" src="/img/maximize-01.png" />
              <div className="text-padding-3">
                <div className="text-13">See all Photos</div>
              </div>
            </div>
          </div>
          <div className="group-28">
            <div className="heading-3">Documents</div>
            <div className="group-29">
              <div className="group-30">
                <div className="frame-10">
                  <div className="file-upload-item-wrapper">
                    <div className="file-upload-item">
                      <div className="overlap-4">
                        <div className="content-5">
                          <div className="file-type-icon">
                            <div className="file-type-wrapper">
                              <div className="file-type">PDF</div>
                            </div>
                          </div>
                          <div className="text-and-supporting-wrapper">
                            <div className="text-and-supporting-2">
                              <div className="text-14">Tech design requirements.pdf</div>
                              <div className="supporting-text-4">200 KB</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-31">
                <div className="frame-10">
                  <div className="file-upload-item-wrapper">
                    <div className="file-upload-item">
                      <div className="overlap-4">
                        <div className="content-5">
                          <div className="file-type-icon">
                            <div className="file-type-wrapper">
                              <div className="file-type">PDF</div>
                            </div>
                          </div>
                          <div className="text-and-supporting-wrapper">
                            <div className="text-and-supporting-2">
                              <div className="text-14">Tech design requirements.pdf</div>
                              <div className="supporting-text-4">200 KB</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-32">
                <div className="frame-10">
                  <div className="file-upload-item-wrapper">
                    <div className="file-upload-item">
                      <div className="overlap-4">
                        <div className="content-5">
                          <div className="file-type-icon">
                            <div className="file-type-wrapper">
                              <div className="file-type">PDF</div>
                            </div>
                          </div>
                          <div className="text-and-supporting-wrapper">
                            <div className="text-and-supporting-2">
                              <div className="text-14">Tech design requirements.pdf</div>
                              <div className="supporting-text-4">200 KB</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-33">
                <div className="frame-10">
                  <div className="file-upload-item-wrapper">
                    <div className="file-upload-item">
                      <div className="overlap-4">
                        <div className="content-5">
                          <div className="file-type-icon">
                            <div className="file-type-wrapper">
                              <div className="file-type">PDF</div>
                            </div>
                          </div>
                          <div className="text-and-supporting-wrapper">
                            <div className="text-and-supporting-2">
                              <div className="text-14">Tech design requirements.pdf</div>
                              <div className="supporting-text-4">200 KB</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-34">
                <div className="frame-10">
                  <div className="file-upload-item-wrapper">
                    <div className="file-upload-item">
                      <div className="overlap-4">
                        <div className="content-5">
                          <div className="file-type-icon">
                            <div className="file-type-wrapper">
                              <div className="file-type">PDF</div>
                            </div>
                          </div>
                          <div className="text-and-supporting-wrapper">
                            <div className="text-and-supporting-2">
                              <div className="text-14">Tech design requirements.pdf</div>
                              <div className="supporting-text-4">200 KB</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-35">
                <div className="frame-10">
                  <div className="file-upload-item-wrapper">
                    <div className="file-upload-item">
                      <div className="overlap-4">
                        <div className="content-5">
                          <div className="file-type-icon">
                            <div className="file-type-wrapper">
                              <div className="file-type">PDF</div>
                            </div>
                          </div>
                          <div className="text-and-supporting-wrapper">
                            <div className="text-and-supporting-2">
                              <div className="text-14">Tech design requirements.pdf</div>
                              <div className="supporting-text-4">200 KB</div>
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
          <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-43.png" />
          <img className="divider-3" alt="Divider" src="/img/image.png" />
          <div className="rectangle-8" />
          <div className="group-36">
            <div className="price">$9,999,999.99</div>
            <div className="text-15">USD - Per Unit</div>
            <div className="text-16">Posted By Manufacturer</div>
            <div className="badge-wrapper">
              <div className="badge">
                <div className="text-17">Sale</div>
              </div>
            </div>
          </div>
          <img className="dropdown-2" alt="Dropdown" src="/img/dropdown.png" />
          <div className="group-37">
            <div className="group-38">
              <button className="buttons-button-5">
                <img className="overlap-group-wrapper" alt="Message chat circle" src="/img/message-chat-circle.png" />
                <div className="text-padding-4">
                  <div className="text-18">Private Message</div>
                </div>
              </button>
            </div>
            <img className="group-39" alt="Group" src="/img/group-995.png" />
          </div>
          <div className="group-40">
            <div className="group-41">
              <div className="frame-11">
                <div className="group-42">
                  <div className="frame-12">
                    <img className="overlap-group-wrapper" alt="Bookmark check" src="/img/bookmark-check.png" />
                    <div className="supporting-text-5">Verified by Gerätor</div>
                  </div>
                </div>
                <p className="supporting-text-6">
                  Adani Health conforms to Gerätor&#39;s requirements for verification
                </p>
              </div>
            </div>
            <div className="group-43">
              <div className="name-and-role-wrapper">
                <div className="name-and-role">
                  <div className="am-lie-laurent">Olivia Rhye</div>
                  <div className="role">Adani Health</div>
                </div>
              </div>
              <div className="avatar-wrapper">
                <div className="contrast-border-wrapper">
                  <div className="contrast-border-2" />
                </div>
              </div>
            </div>
          </div>
          <img className="divider-4" alt="Divider" src="/img/divider-3.png" />
          <div className="group-44">
            <div className="group-45">
              <div className="section-2">
                <div className="group-46">
                  <div className="heading-3">Service History</div>
                  <p className="paragraph-3">
                    FDA Clears First 7T MRI System. In October 2017, the FDA cleared the first 7T MRI system, more than
                    doubling the static magnetic field strength available for use in the United States. The Magnetom
                    Terra from Siemens Healthineers is the first 7T MRI system cleared for clinical use in the United
                    States. The first approved indications for the system are The system’s neurological and
                    musculoskeletal (MSK). Read the article. Hitachi Expands Apps for MRI.
                  </p>
                </div>
              </div>
            </div>
            <div className="group-47">
              <div className="section-2">
                <div className="frame-13">
                  <div className="frame-14">
                    <div className="heading-4">Description</div>
                    <div className="frame-13">
                      <div className="heading">Hardware</div>
                      <p className="p">
                        Magnetic Resonance Imaging (MRI) is a non-invasive imaging technology that produces three
                        dimensional detailed anatomical images. It is often used for disease detection, diagnosis, and
                        treatment monitoring. It is based on sophisticated technology that excites and detects the
                        change in the direction of the rotational axis of protons found in the water that makes up
                        living tissues. MRIs employ powerful magnets which produce a strong magnetic field that forces
                        protons in the body to align with that field. When a radiofrequency current is then pulsed
                        through the patient, the protons are stimulated, and spin out of equilibrium, straining against
                        the pull of the magnetic field. When the radiofrequency field is turned off, the MRI sensors are
                        able to detect the energy released as the protons realign with the magnetic field. The time it
                        takes for the protons to realign with the magnetic field, as well as the amount of energy
                        released, changes depending on the environment and the chemical nature of the molecules.
                        Physicians are able to tell the difference between various types of tissues based on these
                        magnetic properties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-48">
              <div className="section-2">
                <p className="heading">Software / Upgrade / OS / Applications / Worklist</p>
                <p className="p">
                  Current Data Releases, S1200 Extensively Processed fMRI Data, Released on 07/21/2017, High-level
                  extensively processed data for the 1200 Subjects release including group average structural and tfMRI
                  data, group average functional connectivity, and Group ICA-based parcellation + timeseries + netmats
                  datasets.
                </p>
              </div>
            </div>
            <div className="group-49">
              <div className="section-2">
                <div className="heading">Accessories</div>
                <p className="p">
                  The most recent advances in magnetic resonance imaging (MRI) technology have been on the software
                  side, enabling faster contrast scans, greatly simplified cardiac imaging workflows, and allowing MR
                  scans of the lungs. In addition, a few new MRI scanners have entered the market in the past year.
                  Watch the video “MRI Technology Report at RSNA 2015.” Contributing Editor Greg Freiherr offers an
                  overview of MRI advances at the Radiological Society of North America (RSNA) 2015 annual meeting.
                </p>
              </div>
            </div>
            <div className="group-50">
              <div className="section-2">
                <div className="heading">Warranty Inclusions &amp; Exclusions</div>
                <p className="p">
                  Warranties products can include a broad range of products and services. From manufacturer or OEM
                  warranty productswarranties on products, to extended warranties, service contracts, accidental damage
                  from handling (ADH) to loss and insurance, warranty products cover at minimum the repair of a failed
                  covered product.
                </p>
              </div>
            </div>
            <div className="group-51">
              <div className="section-2">
                <div className="heading">Packing List</div>
                <p className="p">
                  Magnetic Resonance Imaging (MRI) is a non-invasive imaging technology that produces three dimensional
                  detailed anatomical images. It is often used for disease detection, diagnosis, and treatment
                  monitoring. It is based on sophisticated technology that excites and detects the change in the
                  direction of the rotational axis of protons found in the water that makes up living tissues. MRIs
                  employ powerful magnets which produce a strong magnetic field that forces protons in the body to align
                  with that field. When a radiofrequency current is then pulsed through the patient, the protons are
                  stimulated, and spin out of equilibrium, straining against the pull of the magnetic field. When the
                  radiofrequency field is turned off, the MRI sensors are able to detect the energy released as the
                  protons realign with the magnetic field. The time it takes for the protons to realign with the
                  magnetic field, as well as the amount of energy released, changes depending on the environment and the
                  chemical nature of the molecules. Physicians are able to tell the difference between various types of
                  tissues based on these magnetic properties.
                </p>
              </div>
            </div>
            <div className="group-52">
              <div className="section-2">
                <div className="heading">Additional Information</div>
                <p className="p">
                  Summary: The MGH-USC HCP team has acquired and shared diffusion imaging data from 35 healthy adults,
                  between the ages of 20 and 59, scanned on the customized Siemens 3T Connectom scanner. This scanner is
                  a modified 3T Skyra system (MAGNETOM Skyra Siemens Healthcare), housed at the MGH/HST Athinoula A.
                  Martinos Center for Biomedical Imaging (see Setsompop et al., 2013 for details of the scanner design
                  and implementation). A 64-channel, tight-fitting brain array coil (Keil et al., 2013) was used for
                  data acquisition.
                </p>
              </div>
            </div>
          </div>
          <div className="heading-5">Video</div>
          <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-43-1.png" />
          <img className="group-53" alt="Group" src="/img/group-351.png" />
          <img className="rectangle-10" alt="Rectangle" src="/img/rectangle-196.png" />
          <img className="group-54" alt="Group" src="/img/group-351.png" />
          <div className="heading-6">Reviews (2)</div>
          <div className="group-55">
            <div className="frame-15">
              <div className="group-56">
                <div className="group-57">
                  <div className="frame-16">
                    <div className="stars-wrapper">
                      <div className="div-5">
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star.png" />
                            </div>
                          </div>
                        </div>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star.png" />
                            </div>
                          </div>
                        </div>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star.png" />
                            </div>
                          </div>
                        </div>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star.png" />
                            </div>
                          </div>
                        </div>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="heading-7">Accuracy (5.0)</div>
                  </div>
                </div>
              </div>
              <div className="group-56">
                <div className="group-57">
                  <div className="frame-16">
                    <div className="stars-wrapper">
                      <div className="div-5">
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star.png" />
                            </div>
                          </div>
                        </div>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star.png" />
                            </div>
                          </div>
                        </div>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star.png" />
                            </div>
                          </div>
                        </div>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star.png" />
                            </div>
                          </div>
                        </div>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="heading-8">Relevance (5.0)</div>
                  </div>
                </div>
              </div>
              <div className="group-56">
                <div className="group-58">
                  <div className="frame-16">
                    <div className="stars-wrapper">
                      <div className="div-5">
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background-10.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star-10.png" />
                            </div>
                          </div>
                        </div>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background-10.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star-10.png" />
                            </div>
                          </div>
                        </div>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background-10.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star-10.png" />
                            </div>
                          </div>
                        </div>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background-10.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star-10.png" />
                            </div>
                          </div>
                        </div>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="img-5" alt="Star background" src="/img/star-background-10.png" />
                            <div className="star">
                              <img className="img-5" alt="Star" src="/img/star-10.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="heading-9">Value for Money (5.0)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-59">
              <div className="group-60">
                <div className="heading-wrapper">
                  <div className="heading-10">/5</div>
                </div>
                <div className="group-61">
                  <div className="text-wrapper-2">5.0</div>
                </div>
              </div>
              <div className="group-62">
                <div className="frame-17">
                  <img className="star-background" alt="Star background" src="/img/star-background-15.png" />
                  <img className="star-background" alt="Star background" src="/img/star-background-15.png" />
                  <img className="star-background" alt="Star background" src="/img/star-background-15.png" />
                  <img className="star-background" alt="Star background" src="/img/star-background-15.png" />
                  <img className="star-background" alt="Star background" src="/img/star-background-15.png" />
                </div>
              </div>
            </div>
          </div>
          <img className="divider-5" alt="Divider" src="/img/image.png" />
          <div className="group-63">
            <div className="group-64">
              <p className="paragraph-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <p className="paragraph-5">One of the best offers I found in the market</p>
            </div>
            <div className="group-65">
              <div className="group-66">
                <div className="avatar-2">
                  <div className="contrast-border-3" />
                </div>
              </div>
              <div className="group-67">
                <p className="heading-11">
                  <span className="text-wrapper-3">Marketing Communications at</span>
                  <span className="text-wrapper-4"> Alvo Medical</span>
                </p>
                <div className="heading-12">1 month ago</div>
                <div className="group-68">
                  <div className="heading-13">Chloe Tammy</div>
                  <div className="group-69">
                    <div className="div-5">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <img className="img-5" alt="Star background" src="/img/star-background.png" />
                          <div className="star">
                            <img className="img-5" alt="Star" src="/img/star.png" />
                          </div>
                        </div>
                      </div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <img className="img-5" alt="Star background" src="/img/star-background.png" />
                          <div className="star">
                            <img className="img-5" alt="Star" src="/img/star.png" />
                          </div>
                        </div>
                      </div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <img className="img-5" alt="Star background" src="/img/star-background.png" />
                          <div className="star">
                            <img className="img-5" alt="Star" src="/img/star.png" />
                          </div>
                        </div>
                      </div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <img className="img-5" alt="Star background" src="/img/star-background.png" />
                          <div className="star">
                            <img className="img-5" alt="Star" src="/img/star.png" />
                          </div>
                        </div>
                      </div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <img className="img-5" alt="Star background" src="/img/star-background.png" />
                          <div className="star">
                            <img className="img-5" alt="Star" src="/img/star.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-70">
              <div className="buttons-button-5">
                <img className="overlap-group-wrapper" alt="Message dots circle" src="/img/message-dots-circle.png" />
                <div className="text-padding-4">
                  <div className="text-18">Reply</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-71">
            <div className="group-64">
              <p className="paragraph-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <p className="paragraph-5">One of the best offers I found in the market</p>
            </div>
            <div className="group-65">
              <div className="group-66">
                <div className="avatar-2">
                  <div className="contrast-border-3" />
                </div>
              </div>
              <div className="group-67">
                <p className="heading-11">
                  <span className="text-wrapper-3">Marketing Communications at</span>
                  <span className="text-wrapper-4"> Alvo Medical</span>
                </p>
                <div className="heading-12">1 month ago</div>
                <div className="group-68">
                  <div className="heading-13">Chloe Tammy</div>
                  <div className="group-69">
                    <div className="div-5">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <img className="img-5" alt="Star background" src="/img/star-background.png" />
                          <div className="star">
                            <img className="img-5" alt="Star" src="/img/star.png" />
                          </div>
                        </div>
                      </div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <img className="img-5" alt="Star background" src="/img/star-background.png" />
                          <div className="star">
                            <img className="img-5" alt="Star" src="/img/star.png" />
                          </div>
                        </div>
                      </div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <img className="img-5" alt="Star background" src="/img/star-background.png" />
                          <div className="star">
                            <img className="img-5" alt="Star" src="/img/star.png" />
                          </div>
                        </div>
                      </div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <img className="img-5" alt="Star background" src="/img/star-background.png" />
                          <div className="star">
                            <img className="img-5" alt="Star" src="/img/star.png" />
                          </div>
                        </div>
                      </div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <img className="img-5" alt="Star background" src="/img/star-background.png" />
                          <div className="star">
                            <img className="img-5" alt="Star" src="/img/star.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-70">
              <div className="buttons-button-5">
                <img className="overlap-group-wrapper" alt="Message dots circle" src="/img/message-dots-circle.png" />
                <div className="text-padding-4">
                  <div className="text-18">Reply</div>
                </div>
              </div>
            </div>
          </div>
          <img className="divider-6" alt="Divider" src="/img/image.png" />
          <div className="rectangle-11" />
          <div className="heading-14">Write Review</div>
          <div className="group-72">
            <div className="group-73">
              <div className="group-74">
                <div className="div-5">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-15">Accuracy</div>
            </div>
            <div className="group-75">
              <div className="group-74">
                <div className="div-5">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-15">Relevance</div>
            </div>
            <div className="group-76">
              <div className="group-74">
                <div className="div-5">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img-5" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-5" alt="Star" src="/img/star.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-16">Value for Money</div>
            </div>
          </div>
          <div className="group-77">

            {/* <div className="group-78">
              <div className="input-field-2">
                <div className="input-with-label-4">
                  <div className="label-3">Title</div>
                  <div className="content-6">
                    <div className="textarea-input-field-2">
                      <div className="input-with-label-5">
                        <div className="input-2">
                          <div className="text-20">70 characters</div>
                        </div>
                      </div>
                      <div className="hint-text-2">10 characters left</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* NEW CODE */}

            {/* <div className="group-78">
              <div className="label-3">Title</div>
              <div className="content-6">
                <MyTextInput_not_mandatory

                  name="title"
                  id="title"
                  type="text"
                  placeholder="70 characters"
                />
              </div>
            </div> */}

            {/* <div className="input-field-wrapper">
              <div className="input-field">
                <div className="input-with-label-2">
                  <div className="label-3">Review</div>
                  <div className="textarea-input-field-wrapper">
                    <div className="textarea-input-field">
                      <div className="input-with-label-3">
                        <div className="input-2">
                          <div className="text-19">1000 characters</div>
                        </div>
                      </div>
                      <div className="hint-text">40 characters left</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* NEW CODE */}

            <div className="input-field-wrapper">

              <div className="label-3">Review</div>
              <div className="textarea-input-field-wrapper">
                <div className="textarea-input-field">
                  <div className="input-with-label-3">
                    <div className="input-2">
                      <div className="text-19">1000 characters</div>
                    </div>
                  </div>

                </div>

              </div>
              {/* <div className="hint-text">40 characters left</div> */}

            </div>

          </div>
          <div className="button-wrapper">
            <button className="button-2">
              <img className="log-in" alt="Log in" src="/img/log-in-04.png" />
              <div className="text-padding-5">
                <div className="text-21">Submit</div>
              </div>
            </button>
          </div>
          <img className="divider-7" alt="Divider" src="/img/divider-6.png" />
          <div className="heading-17">Related Devices</div>
          <div className="text-22">View All</div>
          <div className="group-79">
            <div className="frame-18">
              <div className="group-80">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-80">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-80">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-93">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="heading-18">Related Spares</div>
          <div className="text-28">View All</div>
          <div className="group-94">
            <div className="frame-18">
              <div className="group-80">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-80">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-80">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-93">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="heading-19">Related&nbsp;&nbsp;Services</div>
          <div className="text-29">View All</div>
          <div className="group-95">
            <div className="frame-18">
              <div className="group-80">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-80">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-80">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-93">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="heading-20">Related Software</div>
          <div className="text-30">View All</div>
          <div className="group-96">
            <div className="frame-18">
              <div className="group-80">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-80">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-80">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-93">
                <div className="overlap-group-3">
                  <div className="overlap-group-4">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-95.png" />
                    <div className="group-81" />
                    <div className="group-82">
                      <div className="badge-2">
                        <div className="text-23">ID# AXJYN</div>
                      </div>
                    </div>
                    <div className="group-83">
                      <div className="radar-wrapper">
                        <img className="radar-2" alt="Radar" src="/img/radar-1-1.png" />
                      </div>
                    </div>
                    <div className="group-84">
                      <div className="badge-2">
                        <div className="text-24">Assured</div>
                      </div>
                    </div>
                  </div>
                  <img className="divider-8" alt="Divider" src="/img/divider-7-2x.png" />
                  <div className="group-85">
                    <div className="group-86">
                      <div className="group-87">
                        <div className="avatar-3">
                          <div className="contrast-border-4" />
                        </div>
                      </div>
                      <div className="group-88">
                        <div className="div-4">
                          <div className="name">Olivia Rhye</div>
                          <div className="role-2">Business Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="icon-2" alt="Icon" src="/img/icon-1.png" />
                  <div className="group-89">
                    <div className="text-and-supporting-3">
                      <div className="text-25">$9,999,999.99</div>
                      <div className="text-wrap">
                        <div className="supporting-text-7">USD-Per Unit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-26">New / Surplus 2021 Philips Health-care HD11 XE (P/N:23A...</p>
                  <div className="group-90">
                    <div className="frame-18">
                      <div className="frame-19">
                        <img className="img-2" alt="Marker pin" src="/img/marker-pin-02-1.png" />
                        <div className="text-wrapper-5">India, New Delhi</div>
                      </div>
                      <div className="group-91">
                        <div className="div-5">
                          <img className="img-2" alt="Calendar" src="/img/calendar-1.png" />
                          <div className="text-wrapper-5">April 09, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-92">
                    <div className="frame-5">
                      <div className="group-22">
                        <div className="frame-8">
                          <div className="text-27">4.9/5</div>
                        </div>
                      </div>
                      <div className="supporting-text-8">99,999 reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-97">
            <div className="overlap-5">
              <div className="heading-21">Jobs</div>
              <div className="text-31">View All</div>
              <img className="divider-9" alt="Divider" src="/img/divider-3.png" />
              <img className="divider-10" alt="Divider" src="/img/divider-3.png" />
              <div className="group-98">
                <div className="img-wrapper">
                  <img className="img-6" alt="Img" src="/img/8595f4b711e503bc72fe396e5043e0c2-1.png" />
                </div>
                <div className="group-99">
                  <p className="text-32">Whi Program Assistant / Undergraduate Researcher</p>
                  <div className="heading-22">Marketing Fusion SARL</div>
                </div>
              </div>
              <img className="divider-11" alt="Divider" src="/img/divider-3.png" />
              <div className="group-100">
                <div className="img-wrapper">
                  <img className="img-6" alt="Img" src="/img/8595f4b711e503bc72fe396e5043e0c2-1.png" />
                </div>
                <div className="group-99">
                  <p className="text-32">Whi Program Assistant / Undergraduate Researcher</p>
                  <div className="heading-22">Marketing Fusion SARL</div>
                </div>
              </div>
              <img className="divider-12" alt="Divider" src="/img/divider-3.png" />
              <div className="group-101">
                <div className="img-wrapper">
                  <img className="img-6" alt="Img" src="/img/8595f4b711e503bc72fe396e5043e0c2-1.png" />
                </div>
                <div className="group-99">
                  <p className="text-32">Whi Program Assistant / Undergraduate Researcher</p>
                  <div className="heading-22">Marketing Fusion SARL</div>
                </div>
              </div>
              <img className="divider-13" alt="Divider" src="/img/divider-3.png" />
              <div className="group-102">
                <div className="img-wrapper">
                  <img className="img-6" alt="Img" src="/img/8595f4b711e503bc72fe396e5043e0c2-1.png" />
                </div>
                <div className="group-99">
                  <p className="text-32">Whi Program Assistant / Undergraduate Researcher</p>
                  <div className="heading-22">Marketing Fusion SARL</div>
                </div>
              </div>
              <div className="group-103">
                <div className="img-wrapper">
                  <img className="img-6" alt="Img" src="/img/8595f4b711e503bc72fe396e5043e0c2-1.png" />
                </div>
                <div className="group-99">
                  <p className="text-32">Whi Program Assistant / Undergraduate Researcher</p>
                  <div className="heading-22">Marketing Fusion SARL</div>
                </div>
              </div>
            </div>
          </div>
          <img className="group-104" alt="Group" src="/img/group-1073.png" />
          <img className="group-105" alt="Group" src="/img/group-1074.png" />
          <div className="group-106">
            <div className="overlap-6">
              <div className="footer-wrapper">
                <div className="container-wrapper">
                  <div className="container">
                    <div className="content-7">
                      <p className="footer-text">© Gerator Asia LLP. All rights reserved.</p>
                      <div className="logo-2">
                        <div className="frame-20">
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
              <img className="divider-14" alt="Divider" src="/img/divider.png" />
            </div>
            <div className="footer-2">
              <div className="container-2">
                <div className="content-8">
                  <div className="frame-21">
                    <div className="logo-and-supporting">
                      <div className="logo-2">
                        <img className="gerator" alt="Gerator" src="/img/gerator-04-1.png" />
                      </div>
                      <p className="p">
                        Buy, sell, lease or exchange medical devices, spares, services and software with ease.
                      </p>
                    </div>
                    <div className="group-107">
                      <div className="frame-22">
                        <img className="img-7" alt="Facebook" src="/img/facebook-1-1.png" />
                        <img className="img-7" alt="Linkedin logo" src="/img/linkedin-logo-1.png" />
                        <img className="img-7" alt="Instagram" src="/img/instagram-1-1.png" />
                        <img className="img-7" alt="Youtube" src="/img/youtube-1-1.png" />
                        <img className="img-7" alt="Vimeo" src="/img/vimeo-1-2.png" />
                      </div>
                    </div>
                  </div>
                  <div className="links-and-newsletter">
                    <div className="links">
                      <div className="footer-links-column">
                        <div className="heading-23">Buy &amp; Sell</div>
                        <div className="footer-links">
                          <div className="footer-link">
                            <div className="buttons-button-6">
                              <div className="text-33">Devices</div>
                            </div>
                          </div>
                          <div className="footer-link">
                            <div className="buttons-button-6">
                              <div className="text-33">Spares</div>
                            </div>
                          </div>
                          <div className="footer-link">
                            <div className="buttons-button-6">
                              <div className="text-33">Services</div>
                            </div>
                            <div className="badge-3">
                              <div className="text-34">New</div>
                            </div>
                          </div>
                          <div className="footer-link">
                            <div className="buttons-button-6">
                              <div className="text-33">Software</div>
                            </div>
                          </div>
                          <div className="footer-link">
                            <div className="buttons-button-6">
                              <div className="text-33">Add Listings</div>
                            </div>
                          </div>
                          <div className="footer-link">
                            <div className="buttons-button-6">
                              <div className="text-33">Post a Job</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="footer-links-column">
                        <div className="heading-23">Quick Links</div>
                        <div className="footer-links">
                          <div className="footer-link">
                            <div className="buttons-button-6">
                              <div className="text-33">Terms of use</div>
                            </div>
                          </div>
                          <div className="footer-link">
                            <div className="buttons-button-6">
                              <div className="text-33">Privacy</div>
                            </div>
                          </div>
                          <div className="footer-link">
                            <div className="buttons-button-6">
                              <div className="text-33">Security</div>
                            </div>
                          </div>
                          <div className="footer-link">
                            <div className="buttons-button-6">
                              <div className="text-33">Verification</div>
                            </div>
                          </div>
                          <div className="footer-link">
                            <div className="buttons-button-6">
                              <div className="text-33">Pricing</div>
                            </div>
                          </div>
                          <div className="footer-link">
                            <div className="buttons-button-6">
                              <div className="text-33">Support</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="newsletter">
                      <div className="heading-23">Stay up to date</div>
                      <div className="email-capture">
                        <div className="input-field-3">
                          <div className="input-with-label-6">
                            <div className="input-3">
                              <input className="content-9" placeholder="Enter your email" type="email" />
                            </div>
                          </div>
                        </div>
                        <button className="buttons-button-7">
                          <div className="text-padding-5">
                            <div className="text-35">Subscribe</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-wrapper">
            <div className="pagination">
              <div className="button-wrap">
                <button className="buttons-button-8">
                  <div className="text-padding-4">
                    <div className="text-36">Previous</div>
                  </div>
                </button>
              </div>
              <div className="details">1 of 10</div>
              <div className="button-wrap-2">
                <button className="buttons-button-8">
                  <div className="text-padding-4">
                    <div className="text-36">Next</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="filters-bar-wrapper">
            <div className="filters-bar">
              <div className="content-10">
                <div className="button-group">
                  <button className="button-group-base">
                    <div className="text-37">Newest</div>
                  </button>
                  <button className="button-group-base-2">
                    <div className="text-37">Highest</div>
                  </button>
                  <button className="button-group-base-3">
                    <div className="text-37">Lowest</div>
                  </button>
                </div>
                <div className="div-3">
                  <div className="input-dropdown">
                    <div className="input-with-label-6">
                      <div className="input-4">
                        <div className="content-4">
                          <img className="overlap-group-wrapper" alt="Search lg" src="/img/search-lg.png" />
                          <div className="text-38">Thomson Medical</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="button-3">
                    <img className="overlap-group-wrapper" alt="Filter lines" src="/img/filter-lines.png" />
                    <div className="text-padding-5">
                      <div className="text-39">Filters</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img className="group-108" alt="Group" src="/img/group-1073.png" />
          <img className="group-109" alt="Group" src="/img/group-1074.png" />
          <img className="group-110" alt="Group" src="/img/group-1073.png" />
          <img className="group-111" alt="Group" src="/img/group-1074.png" />
          <img className="group-112" alt="Group" src="/img/group-1073.png" />
          <img className="group-113" alt="Group" src="/img/group-1074.png" />
          <img className="group-114" alt="Group" src="/img/group-1073.png" />
          <img className="group-115" alt="Group" src="/img/group-1074.png" />
        </div>
      </div>
    </div>
    </>
  );
// content = <Loader/>
}

else if (isError) {
  return (<>
   <div style={{color:"white"}}>{error.originalStatus+" "+error.data}</div>
  </>)
}
  
};
