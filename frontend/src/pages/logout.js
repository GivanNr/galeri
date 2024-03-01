import React, { useState } from "react";

const Logout = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleLogout = () => {
        // Lakukan proses logout di sini, seperti menghapus token dari local storage, dll.
        // Misalnya:
        // localStorage.removeItem('token');
        
        // Redirect ke halaman login setelah logout
        window.location.href = "/login";
    };

    return (
        <div>
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
                        <section className="modal-card-body">
                            Apakah Anda yakin ingin logout?
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-danger" onClick={handleLogout}>Ya, Logout</button>
                            <button className="button" onClick={() => setShowConfirmation(false)}>Batal</button>
                        </footer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Logout;
