import { useState } from "react";

export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        adhar_pan: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {

        event.preventDefault()

        console.log("in submit")
        const { email, adhar_pan, password } = formData;

        if (adhar_pan.length == 10 || adhar_pan.length == 12 || password.length>=8) {

            const params = new URLSearchParams();
            params.append('email', email);
            params.append('adhar_pan', adhar_pan);
            params.append('password', password);

            const url = `/api/login?${params}`;

            let getReq = await fetch(url)
            console.log("hiiii")
            let res = await getReq.json()
            console.log('Logged in with', res.body);

        }else{
            alert("wrong Input")
        }

    };




    return (

        <div className="main-div">

            <form action="" className="form-div">

                <h2>Login</h2>
                <label>Email ID *</label>
                <input name="email" className="big-input " type="email"
                    onChange={handleInputChange}
                    required />
                <label>Adhar Number / PAN Number *</label>
                <input name="adhar_pan" className="big-input " type="number"
                    onChange={handleInputChange}
                    required />
                <label>Password *</label>
                <input name="password" className="big-input " type="password"
                    onChange={handleInputChange}
                    required />

                <input className="submit-input" type="submit" onSubmit={handleSubmit} />


            </form>
        </div>
    )
}