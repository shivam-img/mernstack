import React, { useEffect, useState } from 'react'
import { Spinner } from "react-bootstrap";
import { useFormik } from 'formik';
import { postAPI } from '../../../apiservices/ApiServies';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../hooks/useAuth';
import useMyProvider from '../../../hooks/useMyProvider';


const initialValues = {
    email: "",
    username: "",
    password: "",
};

function LoginEmail({ logon }) {
    const { setToken } = useAuth();
    const { setUserCredentials } = useMyProvider();
    const [isloading, setIsLoading] = useState(false);
    useEffect(() => {
        if (!logon) {
            setIsLoading(false)
        }
    }, [logon]);
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        onSubmit: (values, action) => {
            console.log("Form Values:", values);
            signInHandle(values, action);
        },

    })


    const signInHandle = async (value, { resetForm }) => {
        if (value) {
            try {
                const param = {
                    email: value.email,
                    username: value.username,
                    password: value.password
                }
                const res = await postAPI("users/login", param);
                console.log("loginnnres", res);
                if (res.status == 200) {
                    toast(res.data.message);
                    resetForm();
                    setToken(res?.data?.accessToken);
                    setUserCredentials(res?.data?.user);
                }
            } catch (error) {
                console.log("error");
            }
        }

    }
    return (
        <>
            <div className="login section-main">
                <form action="" onSubmit={handleSubmit}>
                    <div className="login-seection-paraa">
                        <div className="login-username">
                            <input
                                class="custom-input"
                                name="email"
                                placeholder="Enter Email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="login-emai">
                            <input
                                class="custom-input"
                                name="username"
                                placeholder="Enter Username"
                                type="text"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />


                        </div>
                        <div className="login-password">
                            <input
                                class="custom-input"
                                name="password"
                                placeholder="Enter Password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                        </div>
                        <div className="login-submin-btn">
                            <button className='login-btn' type='submit'>Login</button>
                        </div>

                    </div>
                </form>
            </div>
        </>

    )
}

export default LoginEmail