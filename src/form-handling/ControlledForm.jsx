import React, { useState } from 'react'
import './ControlledForm.css'
const ControlledForm = () => {

    const [FormData, setFormData] = useState({ name: "", email: "", number: "" })
    // console.log("formdata", FormData);

    let handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("submit....");

    }
    let handleOnChange = (e) => {
        // let obj = { ...FormData };  // 1st way of writing code.
        // obj.name = e.target.value;
        // setFormData(obj)

        setFormData({ ...FormData, [e.target.name]: e.target.value }) // 2nd way to write code efficiaent practice

    }

    return (
        <>
            <div className='container'>
                <form onSubmit={handleFormSubmit} className='form'>

                    <input
                        name='name'
                        type='text'
                        placeholder='name'
                        onChange={(e) => { handleOnChange(e) }}
                    ></input>
                    <input
                        name='email'
                        type='eamil'
                        placeholder='Email'
                        onChange={(e) => { handleOnChange(e) }}

                    ></input >
                    <input
                        name='number'
                        type='number'
                        placeholder='Number'
                        onChange={(e) => { handleOnChange(e) }}
                    ></input>
                    <button>Submit</button>
                </form >

                <br />

                <div>
                    <h1>{FormData.name}</h1>
                    <h1>{FormData.email}</h1>
                </div>
            </div >
        </>
    )
}

export default ControlledForm