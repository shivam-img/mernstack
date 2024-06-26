import React, { useState } from 'react'
import { IoStar } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

function Cards({ data }) {
    // console.log("indexindex", data);
    const [count, setCount] = useState(0);
    // console.log("count", count);
    return (
        <>
            <div className="products header">
                <div className="header-top-area">
                    <span>{`${data?.discountPriceOff}% off`}</span>
                    <div className="product-img">
                        <img src={data?.image} alt="" />
                    </div>
                </div>
                <div className="product-main-bottom-data">
                    <div className="product-bottom-section">
                        <div className="product-heading">
                            <h3>{data?.heading}</h3>
                        </div>

                        <div className="product-paragraph">
                            <p>{data?.description}</p>
                        </div>

                        <div className="product-rating">
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>
                        <div className="product-pricting">
                            <div className="product-actual-price">
                                <p>${data?.actualPrice}</p>
                            </div>
                            <div className="product-disconted-price">
                                <del>${data?.discountedPrice}</del>
                            </div>
                        </div>
                    </div>
                    <div className="adding-to-cards">
                        <div className="card-quantity-counts">
                            {
                                count > 0 ? <>
                                    <div className="decrease-icon" onClick={() => {

                                        setCount(count === 0 ? count : count - 1)
                                    }}>
                                        <FiMinus />
                                    </div>
                                    <div className="decrease-text">
                                        {count}
                                    </div>
                                </> : <></>
                            }
                            <div className="decrease-icon" onClick={() => {

                                setCount(count + 1)
                            }}>
                                <IoMdAdd />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards