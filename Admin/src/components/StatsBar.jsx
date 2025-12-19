import React from 'react';

const StatsBar = ({ overallRating, totalCustomers }) => {
    return (
        <div className="stats-bar">
            <div className="stat-item">
                <span className="icon">⭐</span>
                <span className="value">{overallRating} / 5.0</span>
                <span className="label">Overall Rating</span>
            </div>

            <div className="stat-item">
                <span className="icon">🤝</span>
                <span className="value">{totalCustomers}</span>
                <span className="label">Happy Customers</span>
            </div>
        </div>
    );
};

export default StatsBar;