import React from 'react'
import styles from './FormsControls.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...props} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...props} /></FormControl>
}

export const createField = (placeholder, validators, name, component, props = {}, text = "") => {
    return (
        <div>
            <Field placeholder={placeholder}
                   validate={validators}
                   name={name}
                   component={component}
                   {...props}/> {text}
        </div>)
}