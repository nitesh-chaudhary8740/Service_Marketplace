import React from 'react';

const Header = ({ appName }) => {
    const handleSearch = (event) => {
        // DFD Process 3.0: Search initiation logic
        console.log("Searching for:", event.target.value);
    };

    return (
        <header className="app-header">
            <div className="logo">{appName}</div>

            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Search for services..."
                    onChange={handleSearch}
                    className="search-input"
                />
            </div>

            <div className="nav-icons">
                <button aria-label="Cart">🛒</button>
                <button aria-label="Profile">👤</button>
            </div>
        </header>
    );
};

export default Header;