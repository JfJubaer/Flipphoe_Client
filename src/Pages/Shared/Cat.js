import React from 'react';

const Cat = () => {
    return (
        <div>
            <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                <li className="menu-title">
                    <span>Category</span>
                </li>
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    );
};

export default Cat;