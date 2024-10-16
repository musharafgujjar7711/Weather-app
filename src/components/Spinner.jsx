// Spinner.js
import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 border-solid"></div>
        </div>
    );
};

export default Spinner;
