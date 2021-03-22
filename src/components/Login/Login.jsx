import React from "react";
import {reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {createField} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import style from '../Common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", [required], "email", Input)}
            {createField("Password", [required], "password", Input, {type: "password"})}
            {createField(null, null, "rememberMe", Input, {type: "checkbox"}, "remember me")}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>;
}
const mapStateToProps1 = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps1, {login})(Login)

