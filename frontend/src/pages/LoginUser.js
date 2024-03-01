import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/login", {
                email,
                password
            });

            if (response.status === 200) {
                navigate('/home');
            } else {
                alert("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (   
        <div className="container is-fullhd">
            <div className="has-text-centered mt-6">
            <img src="/logo_gallery2.jpg" alt="Gallery Logo" />
            </div>
            <div className="columns is-centered mt-6">
                <div className="column is-one-third">
                    <div className="box">
                        <h2 className="is-size-3">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button className="button is-primary" type="submit">Login</button>
                                </div>
                            </div>
                            <div className="has-text-centered mt-3">
                                <p>Don't have an account? <Link to="/register">Register here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
