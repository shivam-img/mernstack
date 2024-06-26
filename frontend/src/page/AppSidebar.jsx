import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ROUTES_CONST } from '../constant/routeConstant';
import { TbCardsFilled } from "react-icons/tb";
import { IoIosHome } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { MdOutlineContentPaste } from "react-icons/md";
import { MdCollections } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { getAPIAuth } from '../apiservices/ApiServies';
import { toast } from 'react-toastify';
import { TOKEN_NAME } from '../constant';
import useAuth from '../hooks/useAuth';

const accordions = [
    ["All Games", "Recents", "Favrouite", "Live Casino", "Games Show", "Table Games", "Slots", "Originals", "Pick 4 You"],
    ["providers"],
    ["Sport1", "Sport2", "Sport3"],
    ["Poker1", "Poker2", "Poker3"]
];


function AppSidebar() {
    const { token, setToken } = useAuth();
    const navigate = useNavigate()
    const [applogoutbtn, setAppLogoutButton] = useState(false);
    // console.log("applogoutbtn", applogoutbtn);
    const [toogleaddclass, setToggleAddClass] = useState(false);
    const [sportsaddclass, setSportsAddClass] = useState(false);
    const [tooltipStates, setTooltipStates] = useState([
        { show: false, text: ["Home"], icon: "IoIosHome" },
        { show: false, text: ["Liked Videos"], icon: "BiSolidLike" },
        { show: false, text: ["History"], icon: "FaHistory" },
        { show: false, text: ["My Content"], icon: "MdOutlineContentPaste" },
        { show: false, text: ["Collection"], icon: "MdCollections" },
        { show: false, text: ["Subscribers"], icon: "FaBell" },



    ]);



    const addClassHandle = () => {
        setAppLogoutButton(!applogoutbtn)
        if (!applogoutbtn) {
            document.body.classList.add("webshortSidebar");
        } else {
            document.body.classList.remove("webshortSidebar");

        }
    }

    const buttonToogleHandle = () => {
        setToggleAddClass(!toogleaddclass)

    }
    const sportsToogleHandle = () => {

        setSportsAddClass(!sportsaddclass)

    }



    const handleIconHover = (index) => {
        setTooltipStates(prevStates => {
            return prevStates.map((state, i) => {
                if (i === index) {
                    return { ...state, show: true };
                } else {
                    return state;
                }
            });
        });
    };

    const handleIconLeave = (index) => {
        setTooltipStates(prevStates => {
            return prevStates.map((state, i) => {
                if (i === index) {
                    return { ...state, show: false };
                } else {
                    return state;
                }
            });
        });
    };


    const iconMap = {
        TbCardsFilled: TbCardsFilled,
        IoIosHome: IoIosHome,
        BiSolidLike: BiSolidLike,
        FaHistory: FaHistory,
        MdOutlineContentPaste: MdOutlineContentPaste,
        MdCollections: MdCollections,
        FaBell: FaBell
        // Add other icons to this map
    };

    // console.log(iconMap["TbCardsFilled"]);

    const logouthandle = async () => {

        try {

            const res = await getAPIAuth("users/logout");

            if (res.status == 200) {
                toast(res.data.message);
                localStorage.removeItem(TOKEN_NAME);
                setToken("");
                navigate('/');
            }

        } catch (error) {

        }



    }

    return (

        <>
            <aside className='aside-left-section'>

                {
                    applogoutbtn ? (
                        <>
                            {/* small size  */}
                            <div className="sidebar-main-para shortSidebar">
                                <div className="main-topbar-data">

                                    <div className="main-icon">
                                        <span
                                            onClick={addClassHandle}
                                        > <RiLogoutCircleRLine /> </span>
                                    </div>
                                </div>
                                {/* sdjfhk */}
                                <div className="inner-accordiab">
                                    {tooltipStates.map((tooltip, index) => {
                                        const IconComponent = iconMap[`${tooltip.icon}`];
                                        return (
                                            <div className="main-button-data"
                                                key={index}
                                                onMouseEnter={() => handleIconHover(index)}
                                                onMouseLeave={() => handleIconLeave(index)}>

                                                <button className='button-toogle-design'>
                                                    <span className='button-toogle-span-first'><IconComponent /></span>
                                                </button>

                                                <div className={`col-auto bsTitle px-0 ${!tooltip.show ? "dataaaaa" : "data-hidden-data"}`}>
                                                    {tooltip.text.map((item, idx) => (
                                                        <span key={idx}>{item}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                {/*  */}
                            </div>

                        </>
                    ) : (
                        <>
                            <div className="sidebar-main-para">
                                <div className="main-topbar-data">
                                    <div className="main-hreding">
                                        <h4>Main Menu</h4>
                                    </div>
                                    <div className="main-icon">
                                        <span
                                            className='screenin-screenout'
                                            onClick={addClassHandle}
                                        > {<RiLogoutCircleLine />}</span>
                                    </div>
                                </div>
                                {/* sdjfhk */}
                                <div className="inner-accordiab">
                                    <NavLink
                                        to={ROUTES_CONST.INDEX}
                                        className="d-flex text-decoration-none align-items-center sideMenuContent cursor-pointer"
                                    >
                                        <button className='button-toogle-design normal-button-without'>
                                            <span className='button-toogle-span-first'> <IoIosHome /></span>
                                            <span className='button-toogle-span-second'>Home</span>

                                        </button>

                                    </NavLink>

                                    {/*  */}
                                    <NavLink
                                        to={ROUTES_CONST.LIKED_VIDEOS}
                                        className="d-flex text-decoration-none align-items-center sideMenuContent cursor-pointer"
                                    >
                                        <button className='button-toogle-design normal-button-without'>
                                            <span className='button-toogle-span-first'> <BiSolidLike /></span>
                                            <span className='button-toogle-span-second'>Liked Videos</span>

                                        </button>
                                    </NavLink>
                                    {/*  */}
                                    <NavLink
                                        to={ROUTES_CONST.HISTORY}
                                        className="d-flex text-decoration-none align-items-center sideMenuContent cursor-pointer"
                                    >
                                        <button className='button-toogle-design normal-button-without'>
                                            <span className='button-toogle-span-first'> <FaHistory /></span>
                                            <span className='button-toogle-span-second'>History</span>

                                        </button>
                                    </NavLink>
                                    {/*  */}

                                    <NavLink
                                        to={ROUTES_CONST.MY_CONTENTS}
                                        className="d-flex text-decoration-none align-items-center sideMenuContent cursor-pointer"
                                    >

                                        <button className='button-toogle-design normal-button-without'>
                                            <span className='button-toogle-span-first'> <MdOutlineContentPaste /></span>
                                            <span className='button-toogle-span-second'>
                                                My Content
                                            </span>

                                        </button>
                                    </NavLink>

                                    {/*  */}

                                    <NavLink
                                        to={ROUTES_CONST.COLLECTION}
                                        className="d-flex text-decoration-none align-items-center sideMenuContent cursor-pointer"
                                    >

                                        <button className='button-toogle-design normal-button-without'>
                                            <span className='button-toogle-span-first'> <MdCollections /></span>
                                            <span className='button-toogle-span-second'>Collection</span>

                                        </button>
                                    </NavLink>

                                    {/*  */}
                                    <NavLink
                                        to={ROUTES_CONST.SUBSCRIBERS}
                                        className="d-flex text-decoration-none align-items-center sideMenuContent cursor-pointer"
                                    >

                                        <button className='button-toogle-design normal-button-without'>
                                            <span className='button-toogle-span-first'> <FaBell /></span>
                                            <span className='button-toogle-span-second'>Subscribers</span>

                                        </button>
                                    </NavLink>

                                    {/*  */}

                                    {
                                        token ?
                                            <NavLink
                                                className="d-flex text-decoration-none align-items-center sideMenuContent cursor-pointer">
                                                <button className='button-toogle-design normal-button-without'>
                                                    <span className='button-toogle-span-first'> <FaBell /></span>
                                                    <span className='button-toogle-span-second' onClick={logouthandle}>Logout</span>

                                                </button>
                                            </NavLink> : <></>
                                    }



                                </div>
                                {/*  */}
                            </div>
                        </>
                    )
                }

            </aside>


        </>

    )
}

export default AppSidebar