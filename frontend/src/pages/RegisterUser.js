import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alamat, setAlamat] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await axios.post("http://localhost:5000/register", {
                email,
                nama,
                username,
                alamat,
                password,
                confPassword: confirmPassword // pass confirmPassword as confPassword
            });
            navigate("/login");
        } catch (error) {
            console.log(error);
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
                        <h2 className="is-size-3">Register</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">username</label>
                                <div className="control">
                                    <input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nama" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Confirm Password</label>
                                <div className="control">
                                    <input type="password" className="input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button className="button is-primary" type="submit">Register</button>
                                </div>
                            </div>
                            <div className="has-text-centered mt-3">
                                <p>Already have an account? <Link to="/login">Login here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );






    // return (
    //     <div className="container is-fullhd">
    //         <div className="has-text-centered mt-6">
    //         <img src="/logo_gallery2.jpg" alt="Gallery Logo" /> 
    //         </div>
    //         <div className="columns is-centered mt-6">
    //             <div className="column is-one-third">
    //                 <div className="box">
    //                     <h2 className="is-size-3">Register</h2>
    //                     <form onSubmit={handleSubmit}>
    //                         <div className="field">
    //                             <label className="label">Email</label>
    //                             <div className="control">
    //                                 <input className="input" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //                             </div>
    //                         </div>
    //                         <div className="field">
    //                             <label className="label">nama</label>
    //                             <div className="control">
    //                                 <input type="text" className="input" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" />
    //                             </div>
    //                         </div>
    //                         <div className="field">
    //                             <label className="label">username</label>
    //                             <div className="control">
    //                                 <input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nama" />
    //                             </div>
    //                         </div>
    //                         <div className="field">
    //                             <label className="label">alamat</label>
    //                             <div className="control">
    //                                 <input type="text" className="input" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat" />
    //                             </div>
    //                         </div>
    //                         <div className="field">
    //                             <label className="label">Password</label>
    //                             <div className="control">
    //                                 <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    //                             </div>
    //                         </div>
    //                         <div className="field">
    //                             <label className="label">Confirm Password</label>
    //                             <div className="control">
    //                                 <input type="password" className="input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
    //                             </div>
    //                         </div>
    //                         <div className="field">
    //                             <div className="control">
    //                                 <button className="button is-primary" type="submit">Register</button>
    //                             </div>
    //                         </div>
    //                         <div className="has-text-centered mt-3">
    //                             <p>Already have an account? <Link to="/login">Login here</Link></p>
    //                         </div>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default RegisterPage;
