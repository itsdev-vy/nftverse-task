import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Discover</a>
                <div className="d-flex">
                    <span className="badge rounded-pill text-bg-primary "><i className="fa-solid fa-plus px-3 py-1"></i></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar