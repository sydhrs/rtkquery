import React from "react";
import {useForm} from 'react-hook-form'

const Form = () => {

    const initialValues = (values = '') => ({
        name: values? values : '',
        email: 'asdsad',
        password: 'asdasd'
    })
    const {register, handleSubmit, control, formState: {errors}} = useForm({
        defaultValues: initialValues(),
        mode: 'onBlur'
    })

    const onFormSubmit = data => console.log(data)
    const onErrors = errors => console.log(errors)

    const handleRegistration = data => console.log(data)

    return (
        <form style={{marginTop: '200px', marginLeft: '500px'}} onSubmit={handleSubmit(handleRegistration, onErrors)}>

            <div style={{marginTop: '200px'}}>
                <label>Name</label>
                <input
                    name="name"
                    {...register('name', {required: 'Name is required'})}
                />

            </div>
            <div style={{color: "red", fontSize: '15px'}}>
                <p>{errors?.name && errors?.name?.message}</p>
            </div>
            <div style={{marginTop: '50px'}}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    {...register('email', {required: 'Email is required'})}
                />
            </div>
            <div style={{color: "red", fontSize: '15px'}}>
                <p>{errors?.email && errors?.email?.message}</p>
            </div>
            <div style={{marginTop: '50px'}}>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    {...register('password', {required: 'Password is required'})}
                />
            </div>
            <div style={{color: "red", fontSize: '15px'}}>
                <p>{errors?.password && errors?.password?.message}</p>
            </div>
            <button style={{marginTop: '50px'}}>Submit</button>

        </form>
    )
}

export default Form;