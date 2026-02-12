import React, { useState } from 'react'
import './Form.css';
const Form = () => {

    const [formData, setformData] = useState({ name: "", email: "", age: "", gender: "", skills: [], experience: "", project: "", file: "", bio: "" });
    // console.log("formdata...", formData);


    let handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log("onsubmit");

    }
    let handleOnchange = (e) => {
        console.log("click");
        const { name, value, type, files, checked } = e.target;  //distructuring 

        if (type === 'file') {
            setformData({ ...formData, file: URL.createObjectURL(files[0]) })
            return
        }
        if (type === "checkbox") {
            setformData((prev) => ({
                ...prev, skills: checked ? [...prev.skills, value] : prev.skills.filter((skill) => skill !== value)
            }))
        } else {
            setformData({ ...formData, [name]: value })
        }
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={handleFormSubmit} className='form'>
                    <input name='name' type='text' placeholder='Name' onChange={handleOnchange} required />
                    <input name='email' type='text' placeholder='Email' onChange={(e) => { handleOnchange(e) }} required />
                    <input name='age' type='text' placeholder='Age' onChange={(e) => { handleOnchange(e) }} required />
                    <select name='gender' id="gender" onChange={(e) => { handleOnchange(e) }} required >
                        <option value="gender">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <label>
                        Skills:<br />

                        <input
                            type="checkbox"
                            name="skills"
                            value="React"
                            checked={formData.skills.includes("React")}
                            onChange={handleOnchange}
                        />React<br />

                        <input
                            type="checkbox"
                            name="skills"
                            value="Node"
                            checked={formData.skills.includes("Node")}
                            onChange={handleOnchange}
                        />Node<br />

                        <input
                            type="checkbox"
                            name="skills"
                            value="Mongo"
                            checked={formData.skills.includes("Mongo")}
                            onChange={handleOnchange}
                        />Mongo<br />

                        <input
                            type="checkbox"
                            name="skills"
                            value="Express"
                            checked={formData.skills.includes("Express")}
                            onChange={handleOnchange}
                        />Express<br />
                    </label>

                    <input name='experience' type='number' placeholder='Experiance(year)' onChange={(e) => { handleOnchange(e) }} required ></input>
                    {
                        formData.experience >= "3" && (
                            <textarea id="project" name="project" rows="5" cols="30" placeholder='Describe your major project...' onChange={(e) => { handleOnchange(e) }}></textarea>
                        )
                    }
                    <input name='file' type="file" onChange={(e) => { handleOnchange(e) }} required />
                    <textarea id="message" name="bio" rows="5" cols="30" placeholder=' Short bio (max 150 chars)...' onChange={(e) => { handleOnchange(e) }} required >
                    </textarea>
                    <button>submit</button>
                </form>

                <div className='card'>
                    <img src={formData.file} alt='image hai' />
                    <h5>Name:{formData.name}</h5>
                    <h5>Email:{formData.email}</h5>
                    <h5>Age:{formData.age}</h5>
                    <h5>Gender:{formData.gender}</h5>
                    <h5>Skills:{formData.skills}</h5>
                    <h5>Experience:{formData.experience}</h5>
                    {formData.project && <h5>Project:{formData.project}</h5>}
                    <h5>Bio:{formData.bio}</h5>
                </div>
            </div>
        </>
    )
}

export default Form