import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope } from "react-icons/fa";
import { auth } from "../firebase";

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const handleRegister = async (event) => {
        event.preventDefault();

        // Form validation
        if (!role) {
            toast.error("Please select a role.");
            return;
        }
        if (!mobileNumber.match(/^[0-9]{10,15}$/)) {
            toast.error("Please enter a valid mobile number.");
            return;
        }

        try {
            // Firebase user registration
            await createUserWithEmailAndPassword(auth, email, password);
            // Log the request payload before sending it
            const requestData = {
                tenantName: "bluboy", // Tenant name is hardcoded, modify if dynamic
                user_name: username,
                email: email,
                password: password,
                role: role,
                mobile_number: mobileNumber,
            };
            console.log("Request data:", requestData);  // Log the data to the console

            // Save user details in the database
            await axios.post("http://localhost:8081/api/v1/auth/register", requestData);
            toast.success("Registration successful!");
            setEmail("");
            setPassword("");
            setUsername("");
            setRole("");
            setMobileNumber("");

            // Optional: Redirect or refresh
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.error("Error during registration:", error);

            // Handle Firebase-specific errors
            if (error.code) {
                toast.error(`Firebase error: ${error.message}`);
            } else if (error.response) {
                // Handle API errors
                toast.error(error.response.data.message || "Registration failed.");
            } else {
                toast.error("An unexpected error occurred.");
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleRegister} className="register-form">
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Role:</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="payee">Payee</option>
                        <option value="F-admin">F-Admin</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Mobile Number:</label>
                    <input
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        pattern="[0-9]{10,15}"
                        required
                    />
                </div>
                <button type="submit" className="social-button email">
                    <FaEnvelope /> Register with Email
                </button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default RegisterForm;
