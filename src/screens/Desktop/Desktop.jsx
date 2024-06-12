import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Avatar } from "../../components/Avatar";
import { ButtonsButton } from "../../components/ButtonsButton";
import { ChevronLeftWrapper } from "../../components/ChevronLeftWrapper";
import { ChevronRightWrapper } from "../../components/ChevronRightWrapper";
import "./style.css";

export const Desktop = () => {
  const screenWidth = useWindowWidth();

  return (
    <>
    <div
      className="desktop"
      style={{
        alignItems: screenWidth >= 1440 || screenWidth < 744 ? "center" : undefined,
        backgroundColor:
          screenWidth >= 1440 || screenWidth < 744
            ? "var(--1-color-modes-colors-background-bg-primary-duplicate)"
            : screenWidth >= 744 && screenWidth < 1440
            ? "#ffffff"
            : undefined,
        flexDirection: screenWidth < 744 ? "column" : screenWidth >= 744 && screenWidth < 1440 ? "row" : undefined,
        justifyContent: screenWidth >= 744 && screenWidth < 1440 ? "center" : undefined,
        minHeight: screenWidth >= 1440 ? "100vh" : undefined,
        minWidth: screenWidth < 744 ? "375px" : screenWidth >= 1440 ? "1440px" : undefined,
        position: screenWidth >= 1440 || screenWidth < 744 ? "relative" : undefined,
        width: screenWidth >= 744 && screenWidth < 1440 ? "100%" : undefined,
      }}
    >
      {((screenWidth >= 744 && screenWidth < 1440) || screenWidth < 744) && (
        <div
          className="sign-up"
          style={{
            alignItems: screenWidth < 744 ? "center" : undefined,
            backgroundColor:
              screenWidth < 744
                ? "var(--1-color-modes-colors-background-bg-primary-duplicate)"
                : screenWidth >= 744 && screenWidth < 1440
                ? "#ffffff"
                : undefined,
            display: screenWidth < 744 ? "flex" : undefined,
            flexDirection: screenWidth < 744 ? "column" : undefined,
            gap: screenWidth < 744 ? "var(--3-spacing-spacing-4xl-duplicate)" : undefined,
            height: screenWidth < 744 ? "812px" : screenWidth >= 744 && screenWidth < 1440 ? "1133px" : undefined,
            overflow: screenWidth >= 744 && screenWidth < 1440 ? "hidden" : undefined,
            padding:
              screenWidth < 744
                ? "var(--3-spacing-spacing-6xl-duplicate) 0px var(--3-spacing-spacing-6xl-duplicate) 0px"
                : undefined,
            width: screenWidth < 744 ? "375px" : screenWidth >= 744 && screenWidth < 1440 ? "744px" : undefined,
          }}
        >
          {screenWidth < 744 && (
            <div className="container-4">
              <header className="header">
                <div className="logomark-2">
                  <div className="logomark-2">
                    <img className="gerator-3" alt="Gerator" src="/img/gerator-10-2.png" />
                  </div>
                </div>
                <div className="text-and-supporting-8">
                  <div className="text-34">Sign up</div>
                  <p className="supporting-text-13">Start your 30-day free trial.</p>
                </div>
              </header>
              <div className="content-24">
                <div className="form-2">
                  <div className="div-6">
                    <div className="div-6">
                      <input className="label-2" htmlFor="input-1" placeholder="Name*" type="text" />
                      <div className="input-7">
                        <input className="content-25" id="input-1" placeholder="Enter your name" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="div-6">
                    <div className="div-6">
                      <input className="label-2" htmlFor="input-2" placeholder="Email*" type="email" />
                      <div className="input-7">
                        <input className="content-25" id="input-2" placeholder="Enter your email" type="email" />
                      </div>
                    </div>
                  </div>
                  <div className="div-6">
                    <div className="div-6">
                      <div className="label-3">Password*</div>
                      <div className="input-7">
                        <div className="content-26">
                          <div className="text-35">Create a password</div>
                        </div>
                      </div>
                    </div>
                    <p className="hint-text-2">Must be at least 8 characters.</p>
                  </div>
                </div>
                <div className="actions-2">
                  <ButtonsButton
                    className="buttons-button-6"
                    hierarchy="primary"
                    icon="default"
                    iconLeading={false}
                    iconTrailing={false}
                    size="lg"
                    stateProp="default"
                    text="Get started"
                  />
                  <div className="social-button-groups">
                    <div className="social-button">
                      <img className="social-icon" alt="Social icon" src="/img/social-icon-94.png" />
                      <div className="text-36">Sign up with Google</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="text-wrapper-9">Already have an account?</div>
                <ButtonsButton
                  className="buttons-button-7"
                  hierarchy="link-color"
                  icon="default"
                  iconLeading={false}
                  iconTrailing={false}
                  size="md"
                  stateProp="default"
                  text="Log in"
                />
              </div>
            </div>
          )}

          {screenWidth >= 744 && screenWidth < 1440 && (
            <>
              <div className="section">
                <div className="container-5">
                  <div className="content-27">
                    <div className="stars">
                      <div className="star-icon">
                        <div className="overlap-group-5">
                          <img className="star" alt="Star background" src="/img/star-background-27.png" />
                          <div className="star-wrapper">
                            <img className="star" alt="Star" src="/img/star-27.png" />
                          </div>
                        </div>
                      </div>
                      <div className="star-icon">
                        <div className="overlap-group-5">
                          <img className="star" alt="Star background" src="/img/star-background-27.png" />
                          <div className="star-wrapper">
                            <img className="star" alt="Star" src="/img/star-27.png" />
                          </div>
                        </div>
                      </div>
                      <div className="star-icon">
                        <div className="overlap-group-5">
                          <img className="star" alt="Star background" src="/img/star-background-27.png" />
                          <div className="star-wrapper">
                            <img className="star" alt="Star" src="/img/star-27.png" />
                          </div>
                        </div>
                      </div>
                      <div className="star-icon">
                        <div className="overlap-group-5">
                          <img className="star" alt="Star background" src="/img/star-background-27.png" />
                          <div className="star-wrapper">
                            <img className="star" alt="Star" src="/img/star-27.png" />
                          </div>
                        </div>
                      </div>
                      <div className="star-icon">
                        <div className="overlap-group-5">
                          <img className="star" alt="Star background" src="/img/star-background-27.png" />
                          <div className="star-wrapper">
                            <img className="star" alt="Star" src="/img/star-27.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-37">
                      Untitled has saved us thousands of hours of work. We’re able to spin up projects and features much
                      faster.
                    </p>
                    <div className="quote-attribution">
                      <Avatar
                        className="avatar-instance"
                        placeholder={false}
                        size="two-xl"
                        stateProp="default"
                        statusIcon="company"
                        text={false}
                      />
                      <div className="text-and-supporting-9">
                        <div className="text-38">Lori Bryson</div>
                        <div className="supporting-text-14">Product Designer, Sisyphus</div>
                      </div>
                    </div>
                    <div className="pagination">
                      <ButtonsButton
                        className="buttons-button-7"
                        hierarchy="tertiary-gray"
                        icon="only"
                        override={<ChevronLeftWrapper />}
                        size="sm"
                        stateProp="default"
                      />
                      <div className="pagination-dot-group">
                        <div className="pagination-dot" />
                        <div className="pagination-dot-2" />
                        <div className="pagination-dot-2" />
                        <div className="pagination-dot-2" />
                      </div>
                      <ButtonsButton
                        className="buttons-button-7"
                        hierarchy="tertiary-gray"
                        icon="only"
                        override={<ChevronRightWrapper />}
                        size="sm"
                        stateProp="default"
                      />
                    </div>
                  </div>
                </div>
                <div className="gerator-wrapper">
                  <img className="gerator-4" alt="Gerator" src="/img/gerator-04-1.png" />
                </div>
                <p className="text-39">© Gerator Asia LLP and/or its partners</p>
                <div className="icon-and-text">
                  <img className="mail" alt="Mail" src="/img/mail-01-15.png" />
                  <div className="text-wrapper-9">helpcenter@gerator.com</div>
                </div>
              </div>
              <div className="section-2">
                <div className="container-6">
                  <div className="content-28">
                    <div className="text-and-supporting-10">
                      <div className="text-40">Sign up</div>
                      <p className="supporting-text-13">Start your 30-day free trial.</p>
                    </div>
                    <div className="content-24">
                      <div className="form-2">
                        <div className="div-6">
                          <div className="div-6">
                            <input className="label-2" htmlFor="input-3" placeholder="Name*" type="text" />
                            <div className="input-7">
                              <input className="content-25" id="input-3" placeholder="Enter your name" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="div-6">
                          <div className="div-6">
                            <input className="label-2" htmlFor="input-4" placeholder="Email*" type="email" />
                            <div className="input-7">
                              <input className="content-25" id="input-4" placeholder="Enter your email" type="email" />
                            </div>
                          </div>
                        </div>
                        <div className="div-6">
                          <div className="div-6">
                            <div className="label-3">Password*</div>
                            <div className="input-7">
                              <div className="content-26">
                                <div className="text-35">Create a password</div>
                              </div>
                            </div>
                          </div>
                          <p className="hint-text-2">Must be at least 8 characters.</p>
                        </div>
                      </div>
                      <div className="actions-2">
                        <ButtonsButton
                          className="buttons-button-6"
                          hierarchy="primary"
                          icon="default"
                          iconLeading={false}
                          iconTrailing={false}
                          size="lg"
                          stateProp="default"
                          text="Get started"
                        />
                        <div className="social-button-groups">
                          <div className="social-button">
                            <img className="social-icon" alt="Social icon" src="/img/social-icon-128.png" />
                            <div className="text-36">Sign up with Google</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="text-wrapper-9">Already have an account?</div>
                      <ButtonsButton
                        className="buttons-button-7"
                        hierarchy="link-color"
                        icon="default"
                        iconLeading={false}
                        iconTrailing={false}
                        size="md"
                        stateProp="default"
                        text="Log in"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {screenWidth >= 1440 && (
        <>
          <div className="section-3">
            <div className="container-5">
              <div className="content-27">
                <div className="stars">
                  <div className="star-icon-2">
                    <div className="overlap-group-5">
                      <img className="img-2" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-2" alt="Star" src="/img/star-20.png" />
                      </div>
                    </div>
                  </div>
                  <div className="star-icon-2">
                    <div className="overlap-group-5">
                      <img className="img-2" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-2" alt="Star" src="/img/star-20.png" />
                      </div>
                    </div>
                  </div>
                  <div className="star-icon-2">
                    <div className="overlap-group-5">
                      <img className="img-2" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-2" alt="Star" src="/img/star-20.png" />
                      </div>
                    </div>
                  </div>
                  <div className="star-icon-2">
                    <div className="overlap-group-5">
                      <img className="img-2" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-2" alt="Star" src="/img/star-20.png" />
                      </div>
                    </div>
                  </div>
                  <div className="star-icon-2">
                    <div className="overlap-group-5">
                      <img className="img-2" alt="Star background" src="/img/star-background.png" />
                      <div className="star">
                        <img className="img-2" alt="Star" src="/img/star-20.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-37">
                  Untitled has saved us thousands of hours of work. We’re able to spin up projects and features much
                  faster.
                </p>
                <div className="quote-attribution">
                  <Avatar
                    className="avatar-2"
                    placeholder={false}
                    size="two-xl"
                    stateProp="default"
                    statusIcon="company"
                    text={false}
                  />
                  <div className="text-and-supporting-9">
                    <div className="text-38">Lori Bryson</div>
                    <div className="supporting-text-14">Product Designer, Sisyphus</div>
                  </div>
                </div>
                <div className="pagination">
                  <ButtonsButton
                    className="buttons-button-7"
                    hierarchy="tertiary-gray"
                    icon="only"
                    override={<ChevronLeftWrapper />}
                    size="sm"
                    stateProp="default"
                  />
                  <div className="pagination-dot-group">
                    <div className="pagination-dot" />
                    <div className="pagination-dot-2" />
                    <div className="pagination-dot-2" />
                    <div className="pagination-dot-2" />
                  </div>
                  <ButtonsButton
                    className="buttons-button-7"
                    hierarchy="tertiary-gray"
                    icon="only"
                    override={<ChevronRightWrapper />}
                    size="sm"
                    stateProp="default"
                  />
                </div>
              </div>
            </div>
            <div className="gerator-wrapper">
              <img className="gerator-4" alt="Gerator" src="/img/gerator-04-1.png" />
            </div>
            <p className="text-39">© Gerator Asia LLP and/or its partners</p>
            <div className="icon-and-text">
              <img className="mail" alt="Mail" src="/img/mail-01-15.png" />
              <div className="text-wrapper-9">helpcenter@gerator.com</div>
            </div>
          </div>
          <div className="section-4">
            <div className="container-7">
              <div className="content-29">
                <div className="text-and-supporting-10">
                  <div className="text-40">Sign up</div>
                  <p className="supporting-text-13">Start your 30-day free trial.</p>
                </div>
                <div className="content-24">
                  <div className="form-2">
                    <div className="div-6">
                      <div className="div-6">
                        <input className="label-2" htmlFor="input-5" placeholder="Name*" type="text" />
                        <div className="input-7">
                          <input className="content-25" id="input-5" placeholder="Enter your name" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="div-6">
                      <div className="div-6">
                        <input className="label-2" htmlFor="input-6" placeholder="Email*" type="email" />
                        <div className="input-7">
                          <input className="content-25" id="input-6" placeholder="Enter your email" type="email" />
                        </div>
                      </div>
                    </div>
                    <div className="div-6">
                      <div className="div-6">
                        <div className="label-3">Password*</div>
                        <div className="input-7">
                          <div className="content-26">
                            <div className="text-35">Create a password</div>
                          </div>
                        </div>
                      </div>
                      <p className="hint-text-2">Must be at least 8 characters.</p>
                    </div>
                  </div>
                  <div className="actions-2">
                    <ButtonsButton
                      className="buttons-button-6"
                      hierarchy="primary"
                      icon="default"
                      iconLeading={false}
                      iconTrailing={false}
                      size="lg"
                      stateProp="default"
                      text="Get started"
                    />
                    <div className="social-button-groups">
                      <div className="social-button">
                        <img className="social-icon" alt="Social icon" src="/img/social-icon-92.png" />
                        <div className="text-36">Sign up with Google</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="text-wrapper-9">Already have an account?</div>
                  <ButtonsButton
                    className="buttons-button-7"
                    hierarchy="link-color"
                    icon="default"
                    iconLeading={false}
                    iconTrailing={false}
                    size="md"
                    stateProp="default"
                    text="Log in"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
    </>
  );
};
