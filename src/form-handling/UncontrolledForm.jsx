import React, { useState } from 'react'

const UncontrolledForm = () => {

    const [data, setData] = useState({ name: "", email: "", mobile: "" })
    const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("users")));
    // console.log("data", data);

    let handleFormSubmit = (e) => {
        e.preventDefault();
        let arr = [...formData, data]
        setFormData(arr)
        localStorage.setItem("users", JSON.stringify(arr));
    }
    console.log("formdata", formData); //formData is a asyncronous task so it takes time to render.

    let handleSubmit = (e) => { // ek hi function se hum handle karenge sari events ko.
        setData({ ...data, [e.target.name]: e.target.value }) //update object, then har ek event ko jo target user kar raha hay uska "name" keyword me ja k value update karenga.
        // let { name, value } = e.target; //it's distructuring of e.target object jo uper line me likha hay.
        // setData({ ...data, [name]: value })
    }

    return (
        <>

            <div>UncontrolledForm</div>
            <form onSubmit={handleFormSubmit}>

                <input
                    name='name'  // attribute be type kare   to ye attribute pehachanleta hay ki ye input isi ka hay.
                    type='text'
                    placeholder='name'
                    value={data.name}
                    onChange={(e) => {
                        handleSubmit(e)
                        // let data1 = { ...data } //make copy 
                        // data1.name = e.target.value // add inputvalue 
                        // setData(data1)  // update the state

                    }}
                ></input>
                <input name='email'
                    type='email' placeholder='email' value={data.email}
                    onChange={(e) => {
                        handleSubmit(e)
                        // let data1 = { ...data }
                        // data1.email = e.target.value
                        // setData(data1)
                    }}
                ></input>
                <input name='mobile'
                    type='mobile'
                    placeholder='mobile'
                    value={data.mobile}
                    onChange={(e) => {
                        handleSubmit(e)
                        // let data1 = { ...data }
                        // data1.mobile = e.target.value
                        // setData(data1)
                    }}
                ></input>
                <button>Submit </button>

            </form >
            {
                formData?.map((i) => {
                    <div>
                        <h1>{i.name}</h1>
                        <h1>{i.email}</h1>
                    </div>
                })
            }

        </>
    )
}

export default UncontrolledForm

//map() null value pe work nahi karta to hum use work karne k lliye optional chaining use karte hay while map.
// useRef() - its hook jo elements ko directly dom element access karta hay without rerendering.
// to jab bhi bina rerendering kiye bina value lena hay to humm useref use karenge.