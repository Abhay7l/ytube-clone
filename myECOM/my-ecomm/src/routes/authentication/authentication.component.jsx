// import { sign } from "crypto";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./sign.scss"
import Button from "../../components/button/button.component";
import { Fragment } from "react";
const Authentication=()=>{

    return (
        <div className="container">
    {/* <button onClick={logGoogleUser}>SIGN IN</button> */}
    {/* <button onClick={logGoogleUser}buttonType="google">Sign In With Google</button> */}
    {/* <div className="sign"> */}
    <SignInForm className="sign"/>
    <SignUpForm className="sisgn"/>
        </div>
    )
}
export default Authentication;