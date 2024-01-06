import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function ForgetPassword() {

    let [authMode, setAuthMode] = useState("otp");

    const changeAuthMode = () => {

        setAuthMode(authMode === "otp" ? "c_otp" : "otp");
        
        if (authMode === "c_otp") {
            setAuthMode(authMode === "c_otp" ? "otpp" : "otp")

        }     
    }


    console.log(authMode);


    // if (authMode === "otp") {

    // }

    if (authMode === "c_otp") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Enter OTP</h3>
                        <div className="text-center">
                            <span className="link-primary" >
                                Confirm OTP
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Enter OTP</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter OTP"
                            />
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onClick={changeAuthMode}>
                                Submit
                            </button>
                        </div>

                    </div>
                </form>
            </div>

        );
    }

    if (authMode === "otpp") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Forget Password</h3>
                        <div className="form-group mt-3">
                            <label>Enter New Password</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter Password"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Re-peat Password</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter Password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onClick={changeAuthMode}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Forget Password</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onClick={changeAuthMode}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );

}

export default ForgetPassword;
