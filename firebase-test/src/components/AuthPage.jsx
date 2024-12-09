import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
// Import the CSS file for the role modal



const AuthPage = () => {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div>
            <h1>{isRegistering ? 'Register' : 'Login'}</h1>
            {isRegistering ? <RegisterForm /> : <LoginForm />}
            <button onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
            </button>
        </div>
    );
};

export default AuthPage;
