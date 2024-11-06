import React, { useState } from 'react'
import { useAuthModal } from '../../hooks/UseAuthModal'
import AuthModalHeroBanner from './AuthHeroSection';
import LoginTab from './LoginIn/Index';
import SignUpTab from './SignIn/Index';
import { AUTH_MODAL_TABS } from '../../constant';

function AuthModal() {
    const { authModalObject, setAuthModalObject } = useAuthModal();
    const [track, setTrack] = useState({ login: false, register: false })
    return (
        <div
            className={`modal fade loginModal ${authModalObject.isAuthOpen ? "show" : " "}`}
            id="loginregister"
            tabIndex={-1}
            style={{
                display: authModalObject.isAuthOpen ? "block" : "none",
            }}
        >
            <div className="modal-dialog logindialog modal-xl modal-dialog-centered modal-dialog-scrollable ">
                <div className="modal-content loginContent h100 overflow-hidden border-0">
                    <div className="modal-header header border-0 d-none bg-transparent">
                        <div className="modal-title logoimg"
                            id="exampleModalLabel"
                        >
                            <img src="assets/img/newIcon/logo2.svg" className="h-100" alt="" />
                        </div>
                        <button
                            type="button"
                            className="btn-close shadow-none border-0 btnClose smbtnClose  d-flex align-items-center justify-content-center "
                            // data-bs-dismiss="modal"
                            // aria-label="Close"
                            onClick={() => {
                                setTrack({ login: false, register: false })
                                setAuthModalObject((pre => ({
                                    ...pre,
                                    isAuthOpen: false,
                                })))
                            }}
                        >
                            <img
                                src="https://bholaexchange.com/assets/img/sidebar/close.png"
                                alt="close"
                                className="h-100 w-100 img-fluid"
                            />
                        </button>
                    </div>
                    <div
                        className="modal-body p-0 position-relative"
                    >
                        <button
                            type="button"
                            className="btn-close shadow-none border-0 btnClose position-absolute d-flex align-items-center justify-content-center"
                            // data-bs-dismiss="modal"
                            // aria-label="Close"
                            onClick={() => {
                                setTrack({ login: false, register: false })
                                setAuthModalObject((pre => ({
                                    ...pre,
                                    isAuthOpen: false,
                                })))
                            }}

                        >
                            <img
                                src="https://bholaexchange.com/assets/img/sidebar/close.png"
                                alt="close"
                                className="h-100 w-100 img-fluid"
                            />
                        </button>
                        <div
                            className="row h-100 mx-0"
                        >
                            <div className="col-lg-6 loginformMain order-2 order-lg-1">
                                <div className="logindata row">
                                    {/* tabs button section */}
                                    <div className="col-12 mb-4">
                                        <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className={`nav-link loginBtn border-0 ${authModalObject.selectedTab === AUTH_MODAL_TABS.LOG_IN ? "active" : ""}`}
                                                    onClick={() => {
                                                        if (authModalObject.selectedTab === AUTH_MODAL_TABS.LOG_IN) {
                                                            setTrack(pre => ({ login: true, register: false }))
                                                        }
                                                        setAuthModalObject(pre => ({
                                                            ...pre,
                                                            selectedTab: AUTH_MODAL_TABS.LOG_IN
                                                        }))
                                                    }}
                                                >
                                                    LOGIN
                                                </button>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className={`nav-link loginBtn border-0 cursor-pointer ${authModalObject.selectedTab === AUTH_MODAL_TABS.SIGN_UP ? "active" : ""}`}
                                                    onClick={() => {
                                                        if (authModalObject.selectedTab === AUTH_MODAL_TABS.SIGN_UP) {
                                                            setTrack(pre => ({ login: false, register: true }))
                                                        }
                                                        setAuthModalObject(pre => ({
                                                            ...pre,
                                                            selectedTab: AUTH_MODAL_TABS.SIGN_UP
                                                        }))
                                                    }}
                                                >
                                                    REGISTER
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content col-12 tabdata" id="myTabContent">
                                        {
                                            authModalObject.selectedTab === AUTH_MODAL_TABS.LOG_IN ? (
                                                <LoginTab track={track} />
                                            ) : (
                                                <SignUpTab track={track} />
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <AuthModalHeroBanner activeTab={authModalObject.selectedTab === AUTH_MODAL_TABS.LOG_IN ? true : false} />
                        </div>
                    </div>
                    {/* <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
                </div>
            </div>
        </div>
    )
}

export default AuthModal