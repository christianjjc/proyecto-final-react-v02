import React from 'react';

const ContainerAll = ({ children }) => {
    return (
        <>
            <div className='container'>
                {children}
            </div>
        </>
    );
};

export default ContainerAll;