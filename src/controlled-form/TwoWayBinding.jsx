import { useState } from "react";
import "./TwoWayBinding.css";

const TwoWayBinding = () => {
    const [formData, setFormData] = useState({
        name: "shub",
        email: "shub@gmail.com",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);
    };

    {/* State to UI (One-way binding): The value attribute of a form element is bound to a component's state variable. This means that if the state changes, the input field's displayed value automatically updates.
    //UI to State (Event handling): An onChange event handler is attached to the input element. When the user types or makes a change, this handler is triggered */}
    return (
        <div className="page">
            <div className="card">
                <h2>User Profile</h2>
                <p>State ↔ UI synced in real-time</p>

                {/* Live state preview — watch it update as you type */}
                <div className="live-preview">
                    <div className="live-preview-title">📡 Live State (formData)</div>
                    <div className="live-preview-row">
                        <span>name</span>
                        <span>"{formData.name}"</span>
                    </div>
                    <div className="live-preview-row">
                        <span>email</span>
                        <span>"{formData.email}"</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>

                    {/* NAME */}
                    <div className="field-group">
                        <label>Name</label>
                        <div className="input-wrapper">
                            <span>👤</span>
                            <input
                                type="text"
                                placeholder="Enter name"
                                value={formData.name}                           // State → UI
                                onChange={(e) =>                                // UI → State
                                    setFormData({ ...formData, name: e.target.value })
                                } // Keeps email & number intact and Only overwrites `name`.
                            />
                        </div>
                    </div>

                    {/* EMAIL */}
                    <div className="field-group">
                        <label>Email</label>
                        <div className="input-wrapper">
                            <span>✉️</span>
                            <input
                                type="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </div>
                    </div>
                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
export default TwoWayBinding;