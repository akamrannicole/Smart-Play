import React from 'react';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/SignUp');
    };

    return (
        <div className="welcome-container">
            <div className="left-section">
                <div className="welcome-message">
                    <p>Welcome.</p>
                </div>
                <div className="login">
                    <p>Please enter your name</p>
                    <input className='name-input' type="text" placeholder="Your Name" />
                    <div className="btn-container">
                        <button onClick={handleNextClick} className="next-btn">NEXT</button>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <img src="https://demo.bravisthemes.com/hadkaur/wp-content/uploads/2023/09/Image1.png" alt="IdImage" />
            </div>
        </div>
    );
}

export default WelcomePage;
