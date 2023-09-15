import { useState } from "react";


export default function Register() {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        dob: '',
        email: '',
        gender: '',
        phone: '',
        adhar_pan: '',
        password: '',
        cpassword: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { fname, lname, dob, gender, phone, adhar_pan, email, password, cpassword } = formData;

        if (password == confirmPassword || password.length >= 8 || adhar_pan.length == 10 || adhar_pan.length == 12 || phone.length == 10) {

            let postReq = await fetch("/api/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        fname, lname, dob, gender, phone, adhar_pan, email, password
                    }
                    )
                })

            console.log("hiiii")

            let res = await postReq.json()

            console.log('Form data submitted:', formData);
        }
    };
    return (

        <div className="main-div">

            <form action="" className="form-div">

                <h2>Register</h2>
                <div className="sub-div">

                    <div className="mini-div">
                        <label>First Name *</label>
                        <input name="fname" className="user-inputs" type="text" onChange={handleInputChange}
                            required />

                    </div>
                    <div className="mini-div">
                        <label>Last Name *</label>
                        <input name="lname" className="user-inputs" type="text" onChange={handleInputChange}
                            required />
                    </div>
                </div>
                <label>Adhar Number / PAN Number *</label>
                <input name="adhar_pan" className="big-input " type="number" onChange={handleInputChange}
                    required />
                <div className="sub-div">
                    <div className="mini-div">
                        <label>Email *</label>
                        <input name="email" className="user-inputs" type="email" onChange={handleInputChange}
                            required />
                    </div>
                    <div className="mini-div">
                        <label>Phone *</label>
                        <input name="phone" className="user-inputs" type="number" onChange={handleInputChange}
                            required />
                    </div>
                </div>
                <div className="sub-div">

                    <div className="mini-div">
                        <label>Gender *</label>
                        <input name="gender" className="user-inputs" type="text" onChange={handleInputChange}
                            required />
                    </div>
                    <div className="mini-div">

                        <label>DOB *</label>
                        <input name="dob" className="user-inputs" type="date" onChange={handleInputChange}
                            required />

                    </div>
                </div>

                <div className="sub-div">

                    <div className="mini-div">
                        <label>Password *</label>
                        <input name="password" className="user-inputs" type="text" onChange={handleInputChange}
                            required />

                    </div>

                    <div className="mini-div">

                        <label>Confirm Password *</label>
                        <input name="cpassword" className="user-inputs" type="text" onChange={handleInputChange}
                            required />

                    </div>

                </div>
                <input className="submit-input" type="submit" onClick={handleSubmit}
                />


            </form>
        </div>

    )
}