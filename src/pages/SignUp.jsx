import React from 'react';
import './SignUp.css';

const Signup = () => {
    return (
        <div className="form-container">
            <form>
                <h1>Create Account</h1>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button>Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
