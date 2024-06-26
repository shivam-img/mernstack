import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { getAPIAuth } from '../../../apiservices/ApiServies'





function ProductCards() {
    const [data, setData] = useState([]);
    // console.log("data", data);
    const getallProducts = async () => {
        try {
            const res = await getAPIAuth("product/getAllProducts");
            console.log("res", res);
            if (res.status == 200) {
                setData(res.data.data);
            }
        } catch (error) {

            console.log("errror", error);
        }
    }

    useEffect(() => {
        getallProducts();
    }, []);
    return (
        <>

            <div className="container">
                <div className="section-header">

                    <h1>Flash Deals</h1>
                </div>
                <div className="row">
                    {
                        data.map((item, index) => {

                            return (
                                <>
                                    <div className="col-lg-3" key={index}>
                                        <Cards data={item} />
                                    </div>
                                </>
                            )

                        })
                    }

                </div>
            </div>

        </>
    )
}

export default ProductCards