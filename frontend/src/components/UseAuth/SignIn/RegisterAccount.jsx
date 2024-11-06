import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postAPI, postAPIFormData } from '../../../apiservices/ApiServies';

function RegisterAccount({ logon }) {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!logon) {
            setIsLoading(false);
        }
    }, [logon]);

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required*'),
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required*'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required*'),
        password: Yup.string()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .required('Required*'),
        coverImage: Yup.mixed()
            .required('Cover image is required*'),
        avatar: Yup.mixed()
            .required('Avatar is required*'),
    });

    const signupHandle = async (values, { resetForm }) => {

        // console.log("function value", values);
        if (!values.terms) {
            toast("You must accept the terms and conditions");
        }
        if (values.terms) {

            try {
                const formData = new FormData();
                formData.append('username', values.username);
                formData.append('email', values.email);
                formData.append('fullName', values.firstName);
                formData.append('password', values.password);
                formData.append('avatar', values.avatar);
                formData.append('coverImage', values.coverImage);



                const res = await postAPIFormData("users/register", formData);
                // console.log(res.response.data.status, "erroeraaa---------");
                console.log("--------------------a", res);

                if (res?.status == 200) {
                    toast(res?.data?.message);
                    resetForm();
                }

                // if (res.data) {
                //     toast(res?.data?.message);
                //     resetForm();
                // }
                // else {
                //     toast(res?.data?.message);
                // }


            } catch (error) {
                toast(error.response.data.message);
            }

        }

    }

    return (
        <div className="login section-main">
            <Formik
                initialValues={{
                    firstName: '',
                    username: '',
                    email: '',
                    password: '',
                    coverImage: null,
                    avatar: null,
                    terms: false,
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {
                    signupHandle(values, actions);
                }}
            >
                {({ setFieldValue, errors, touched }) => (
                    <Form>
                        <div className="login-seection-paraa">
                            <div className="register-row-gap row">
                                <div className="col-lg-6">
                                    <div className="login-username">
                                        <Field
                                            className="custom-input"
                                            name="firstName"
                                            placeholder="First Name"
                                            type="text"
                                        />
                                        {errors.firstName && touched.firstName ? (
                                            <div className="error-validation"><span>{errors.firstName}</span></div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="login-username">
                                        <Field
                                            className="custom-input"
                                            name="username"
                                            placeholder="Username"
                                            type="text"
                                        />
                                        {errors.username && touched.username ? (
                                            <div className="error-validation"><span>{errors.username}</span></div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="login-emai">
                                        <Field
                                            className="custom-input"
                                            name="email"
                                            placeholder="Enter Email"
                                            type="email"
                                        />
                                        {errors.email && touched.email ? <div className="error-validation"><span>{errors.email}</span></div> : null}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="login-password">
                                        <Field
                                            className="custom-input"
                                            name="password"
                                            placeholder="Enter Password"
                                            type="password"
                                        />
                                        {errors.password && touched.password ? (
                                            <div className="error-validation"><span>{errors.password}</span></div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="login-emai">
                                        <input
                                            className="custom-input file-design coverimages-file"
                                            name="coverImage"
                                            type="file"
                                            onChange={(event) => {
                                                setFieldValue("coverImage", event.currentTarget.files[0]);
                                            }}
                                        />
                                        {errors.coverImage && touched.coverImage ? (
                                            <div className="error-validation"><span>
                                                {errors.coverImage}</span></div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="login-emai">
                                        <input
                                            className="custom-input file-design"
                                            name="avatar"
                                            type="file"
                                            onChange={(event) => {
                                                setFieldValue("avatar", event.currentTarget.files[0]);
                                            }}
                                        />
                                        {errors.avatar && touched.avatar ? (
                                            <div className="error-validation"><span>{errors.avatar}</span></div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="login-emai">
                                        <div className="form-check">
                                            <Field
                                                className="checkbox-data custom-input"
                                                name="terms"
                                                type="checkbox"
                                            />
                                            <label htmlFor="terms">
                                                I agree with Privacy Policy and Terms of Use, Gambling isn't forbidden by my local authorities and I'm at least 18 years old.
                                            </label>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="login-submin-btn">
                                <button type="submit" className="login-btn">Submit</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegisterAccount;
