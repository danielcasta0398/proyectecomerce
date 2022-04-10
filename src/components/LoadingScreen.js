import React from 'react';
import '../styles/loading.css'

const LoadingPage = () => {
    return (
        <div className='modal-loading'>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    );
};

export default LoadingPage;