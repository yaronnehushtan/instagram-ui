import React from 'react';
import './Spinner.scss';
import instagramLogo from '../images/instagram-logo.png';

function Spinner(props) {

    return (
        <div className="Spinner">
            <div className="App__loading">
                <img src={instagramLogo} className="m-3 logo" alt="instagram-logo"/>
                <div className="spinner-container">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </div>

    );
}

export default Spinner;
