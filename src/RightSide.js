import React from 'react';
import Content from './Content';
import Navbar from './Navbar';

const RightSide = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />
                <Content />
            </div>
        </div>
    )
}

export default RightSide