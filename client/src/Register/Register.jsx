import React, { useState } from "react";
import "./Register.css"; 

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [skills, setSkills] = useState('');
    const [biography, setBiography] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
                
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                
                <label htmlFor="skills">Skills</label>
                <input value={skills} onChange={(e) => setSkills(e.target.value)} type="text" placeholder="Add your skills" id="skills" name="skills" />
                
                <div className="biography">
                    <label htmlFor="biography">Biography</label>
                    <textarea
                        value={biography}
                        onChange={(e) => setBiography(e.target.value)}
                        placeholder="Add Bio"
                        id="biography"
                        name="biography"
                        style={{ width: "100%", height: "150px" }} // Adjust the width and height as needed
                    />
                </div>
                
                <label htmlFor="phone">Phone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Your Phone Number" id="phone" name="phone" />
                
                <label htmlFor="linkedin">LinkedIn</label>
                <input value={linkedin} onChange={(e) => setLinkedin(e.target.value)} type="text" placeholder="LinkedIn Profile URL" id="linkedin" name="linkedin" />
                
                <button type="submit">Join Us and Be the Change!</button>
            </form>
        </div>
    )
}