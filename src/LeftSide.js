import React from 'react';

const LeftSide = () => {
    return (
        <div className="card mt-1" style={{ width: '13rem' }}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between"><span>SmartUp</span> <span><i className="fa-solid fa-bars"></i></span></li>
                <li className="list-group-item d-flex justify-content-between"><span><i className="fa-solid fa-user"></i> Profile </span><span>12<i className="fa-solid fa-bell text-warning"></i></span></li>
                <li className="list-group-item d-flex justify-content-between"><span><i class="fa-solid fa-braille"></i> Discover</span> <span><i className="fa-solid fa-bell text-warning"></i></span></li>
                <li className="list-group-item d-flex justify-content-between"><span><i class="fa-regular fa-circle"></i> SmartUp</span> </li>
                <li className="list-group-item d-flex justify-content-between"><span><i className="fa-solid fa-user"></i> Men Community</span></li>
                <li className="list-group-item d-flex justify-content-between"><span><i className="fa-solid fa-user"></i> Fun Community</span></li>
                <li className="list-group-item d-flex justify-content-between"><span><i className="fa-solid fa-user"></i> Tech Community</span></li>
                <li className="list-group-item d-flex justify-content-between"><span><i className="fa-solid fa-user"></i> Lead Community</span></li>
                <li className="list-group-item d-flex justify-content-between"><span><i className="fa-solid fa-user"></i> Personal</span></li>
                <li className="list-group-item d-flex justify-content-between"><span>In Progress</span> <span>180</span></li>
                <li className="list-group-item d-flex justify-content-between"><span>Completed</span> <span>48</span></li>
                <li className="list-group-item d-flex justify-content-between"><span>Read Later</span> <span>24</span></li>
                <li className="list-group-item d-flex justify-content-between mt-5 pt-5"><span><i className="fa-solid fa-user"></i></span> <span><i className="fa-solid fa-bell text-warning"></i></span></li>
                <li className="list-group-item d-flex justify-content-between"><span><i className="fa-solid fa-user"></i></span> <span><i className="fa-solid fa-bell text-warning"></i></span></li>

            </ul>
        </div>
    )
}

export default LeftSide;