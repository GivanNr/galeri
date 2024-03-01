import { Link } from "react-router-dom";

import React, { useState } from "react";

const PrimaryButton = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleLogout = () => {
        // Lakukan proses logout di sini
        // Contoh: menghapus token dari local storage
        // localStorage.removeItem('token');

        // Redirect ke halaman login setelah logout
        window.location.href = "/login";
    };

    return (
        <nav className="navbar is-dark">
            <div className="navbar-brand">
                <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>


            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item has-text-weight-bold" to="/home">
                        Home
                    </Link>
                    <Link className="navbar-item has-text-weight-bold" to="/album">
                        Album
                    </Link>
                    <Link className="navbar-item has-text-weight-bold" to="/profile">
                        Profile
                    </Link>
                    <Link className="navbar-item has-text-weight-bold" onClick={() => setShowConfirmation(true)}>
                        Logout
                    </Link>
                </div>
            </div>

            {showConfirmation && (
                <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Konfirmasi Logout</p>
                            <button
                                className="delete"
                                aria-label="close"
                                onClick={() => setShowConfirmation(false)}
                            ></button>
                        </header>
                        <section className="modal-card-body has-text-black">
                            Apakah Anda yakin ingin logout?
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-danger " onClick={handleLogout}>Ya, Logout</button>
                            <button className="button" onClick={() => setShowConfirmation(false)}>Batal</button>
                        </footer>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default PrimaryButton;
