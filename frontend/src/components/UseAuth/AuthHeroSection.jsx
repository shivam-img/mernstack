import React from "react";
import { loginImage } from "../../assets/images/Imageindex";

const AuthModalHeroBanner = () => {
    return (
        <div className="col-lg-6 px-0 order-lg-2 order-1">
            <div className="loginImg h-100 pb-lg-4">
                <div className="row h-100 align-items-center innerimages mx-0 py-lg-0 pb-4">
                    <div className="col-12 mx-auto">
                        {/* <div className={`shadowImg position-absolute mx-5 ${activeTab ? 'login' : 'register'}`}>
                            <img
                                src="assets/img/loginDropShap.png"
                                className="w-100"
                                alt=""
                            />
                        </div> */}
                        {/* <div className="officialPartnerBox">
                            <div className="heading">Official partners</div>
                            <div className="d-flex nameParent">
                                <div className="name">Jonathan Haggerty</div>
                                <div className="name">rodtang jimungnon</div>
                            </div>
                        </div> */}
                        <div className="main-right-paraaa">
                            <div className="userImg ">
                                <img
                                    src={`https://www.ipermart.com/images/slided1.png`}
                                    className="image-banner-login"
                                    alt=""
                                />
                            </div>
                            <div className="text-center imageaftertext">
                                <div className="mainHeading">
                                    WELCOME TO Mart
                                </div>
                                <div className="subheading mt-1">your gaming JOURNEY starts NOW!</div>
                                <div
                                    className="logo mt-3 d-lg-block d-none">
                                    <img
                                        src="https://www.ipermart.com/images/logoiper.png"
                                        className="h-100"
                                        alt="logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModalHeroBanner;
