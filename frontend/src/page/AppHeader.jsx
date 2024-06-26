import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import './style.css'
import { useAuthModal } from '../hooks/UseAuthModal';
import { AUTH_MODAL_TABS, TOKEN_NAME } from '../constant';
import AuthModal from '../components/UseAuth/Index';
import useMyProvider from '../hooks/useMyProvider';
import { getAPIAuth } from '../apiservices/ApiServies';
import { FaBell } from "react-icons/fa";
import { toast } from 'react-toastify';
import { IoIosLogOut } from "react-icons/io";
import { useNavigate, NavLink } from 'react-router-dom';
import { ROUTES_CONST } from '../constant/routeConstant';

function AppHeader() {
    const [data, setData] = useState([]);
    console.log("data", data);
    const [active, setActive] = useState('Home');
    const [istoggle, setIsTooggle] = useState(false);
    const { usercredentials } = useMyProvider();
    const { token } = useAuth();
    const { authModalObject, setAuthModalObject } = useAuthModal();
    const navigate = useNavigate()


    const getUserAllDetatils = async () => {
        try {
            const res = await getAPIAuth("users/getUserAllDetatils");
            console.log("getUserAllDetatilsres", res);
            if (res?.data?.status == 200) {
                setData(res?.data?.data);
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {

        if (token) {
            getUserAllDetatils();
        }

    }, [token]);
    const handleactiveclick = (data) => {

        setActive(data);

    };
    const logouthandle = async () => {

        try {
            const res = await getAPIAuth("users/logout");
            if (res.status == 200) {
                toast(res.data.message);
                localStorage.removeItem(TOKEN_NAME);
                setToken("");
                setAuthModalObject(
                    {
                        isAuthOpen: true,
                        selectedTab: AUTH_MODAL_TABS.LOG_IN
                    }

                )
            }
        } catch (error) {

        }
    }

    const handlemodaltoggle = () => {
        setIsTooggle(!istoggle)
    }
    return (
        <div className="container">
            <header className='header-top-bar'>
                <div className="row align-items-center w-100 mx-0">
                    <div className="col-lg-3 ps-0 d-md-block  d-none">
                        <div className="logo-img">
                            <img src="https://www.ipermart.com/images/logoiper.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 px-0">
                        <div className="navlink">
                            <NavLink
                                to={ROUTES_CONST.INDEX}
                                className="d-flex text-decoration-none align-items-center sideMenuContent cursor-pointer"
                            >
                                <div className={`navlinkdata ${active == "Home" ? "active" : ""}`} onClick={() => handleactiveclick("Home")}>
                                    Home
                                </div>
                            </NavLink>
                            <NavLink
                                to={ROUTES_CONST.ABOUT}
                                className="d-flex text-decoration-none align-items-center sideMenuContent cursor-pointer"
                            >
                                <div className={`navlinkdata ${active == "About" ? "active" : ""}`} onClick={() => handleactiveclick("About")}>
                                    About
                                </div>
                            </NavLink>
                            <NavLink
                                to={ROUTES_CONST.HISTORY}
                                className="d-flex text-decoration-none align-items-center sideMenuContent cursor-pointer"
                            >
                                <div className={`navlinkdata ${active == "History" ? "active" : ""}`} onClick={() => handleactiveclick("History")}>
                                    History
                                </div>
                            </NavLink>
                            <NavLink
                                to={ROUTES_CONST.CARDS}
                                className="d-flex text-decoration-none align-items-center sideMenuContent cursor-pointer"
                            >
                                <div className={`navlinkdata ${active == "Cards" ? "active" : ""}`} onClick={() => handleactiveclick("Cards")}>
                                    Cards
                                </div>
                            </NavLink>
                            <NavLink
                                to={ROUTES_CONST.CONTACT_US}
                                className="d-flex text-decoration-none align-items-center sideMenuContent cursor-pointer"
                            >
                                <div className={`navlinkdata ${active == "Contact Us" ? "active" : ""}`} onClick={() => handleactiveclick("Contact Us")}>
                                    Contact Us
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-3 px-0">
                        {
                            !token ? (
                                <>
                                    <div className="row align-items-center justify-content-end w-100">
                                        <div className="col-auto">
                                            <span className='login-btn'
                                                onClick={() => {
                                                    setAuthModalObject(
                                                        {
                                                            isAuthOpen: true,
                                                            selectedTab: AUTH_MODAL_TABS.LOG_IN
                                                        }

                                                    )
                                                }}
                                            >
                                                Login
                                            </span>

                                        </div>
                                        <div className="col-auto">
                                            <span className='register-btn'
                                                onClick={() => {
                                                    setAuthModalObject(
                                                        {
                                                            isAuthOpen: true,
                                                            selectedTab: AUTH_MODAL_TABS.SIGN_UP
                                                        }

                                                    )
                                                }}
                                            >
                                                Register
                                            </span>

                                        </div>
                                    </div>

                                    <AuthModal />

                                </>
                            ) : <>
                                <div className="row align-items-center justify-content-end w-100">

                                    {/* <div className="col-auto">
                                        <span className='register-btn'
                                            onClick={() => {
                                            }}
                                        >
                                            Logout
                                        </span>
                                    </div> */}
                                    <div className="col-auto">
                                        <div className="login-avatar" onClick={handlemodaltoggle}>
                                            <img src={data?.coverImage} alt="" />
                                        </div>
                                    </div>

                                    {
                                        istoggle ? <div className="main-proffile-samall-modal">
                                            <div className="modal-bodyy">
                                                <div className="modal-details-para">

                                                    <div className="modal-details">
                                                        <h4>Shivam Gupta</h4>
                                                        <span>Data Changed</span>
                                                    </div>
                                                </div>
                                                <div className="modal-btn-data">
                                                    <button className='button-toogle-design normal-button-without'>
                                                        <span className='button-toogle-span-first'> <IoIosLogOut /></span>
                                                        <span className='button-toogle-span-second' onClick={logouthandle}>Logout</span>

                                                    </button>
                                                </div>
                                            </div>
                                        </div> : <></>
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
            </header >
        </div >
    )
}

export default AppHeader 