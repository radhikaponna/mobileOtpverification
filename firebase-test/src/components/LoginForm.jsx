import React, { useState } from "react";
import {
    auth,
    googleProvider,
    facebookProvider,
    githubProvider,
    twitterProvider,
} from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import axios from "axios";
const LoginForm = () => {
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSocialLogin = async (provider) => {
        if (!role) {
            toast.error("Please select a role.");
            return;
        }
        setLoading(true);
        try {
            // Firebase social login
            const userCredential = await signInWithPopup(auth, provider);
            const user = userCredential.user;
            // Map provider to friendly name
            const providerFriendlyName = {
                "google.com": "Google",
                "facebook.com": "Facebook",
                "github.com": "GitHub",
                "twitter.com": "Twitter",
            }[provider.providerId] || "Unknown";
            // Save user details to the server database
            const response = await axios.post("http://localhost:8081/api/v1/auth/socialLogin", {
                email: user.email,
                role,
                tenantName: "bluboy", // Add dynamic tenant name here if needed
                user_name: user.displayName || "Social Login User",
                firebaseUID: user.uid,
            });
            if (response.status === 200) {
                toast.success("Social login successful!");
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                throw new Error("Failed to save user to the server database.");
            }
        } catch (error) {
            console.error("Error during social login:", error);
            toast.error(
                error.response?.data?.message ||
                "Social login failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <div>
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
            <button
                className="social-button google"
                onClick={() => handleSocialLogin(googleProvider)}
                disabled={loading}
            >
                <FaGoogle className="icon" /> Login with Google
            </button>
            <button
                className="social-button facebook"
                onClick={() => handleSocialLogin(facebookProvider)}
                disabled={loading}
            >
                <FaFacebook className="icon" /> Login with Facebook
            </button>
            <button
                className="social-button github"
                onClick={() => handleSocialLogin(githubProvider)}
                disabled={loading}
            >
                <FaGithub className="icon" /> Login with GitHub
            </button>
            <button
                className="social-button twitter"
                onClick={() => handleSocialLogin(twitterProvider)}
                disabled={loading}
            >
                <FaTwitter className="icon" /> Login with Twitter
            </button>
            <ToastContainer />
        </div>
    );
};

export default LoginForm;
