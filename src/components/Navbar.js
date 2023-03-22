import React from 'react';
import imgsvg from './box-arrow-right.svg';
function Navbar(){
    return (
    <nav className="navbar bg-primary">
        <div className="container-fluid">
        <div>
            <h1 className="pb-0 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="pb-2 bi bi-person-lines-fill" viewBox="0 0 16 16">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
            </svg>
            Cloud Contact
            </h1>
        </div>
        <div className="d-flex">
            <h5 className="text-white mt-2">Hello Sultans Dine</h5>
            <button className="btn btn-primary">
                <img src={imgsvg}/>
                Logout
            </button>
        </div>
        </div>
    </nav>
    )
}
export default Navbar;