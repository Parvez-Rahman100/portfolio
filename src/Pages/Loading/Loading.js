import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center my-3 ">
            <div className="w-40 h-40 border-t-4 border-b-4 border-orange-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;