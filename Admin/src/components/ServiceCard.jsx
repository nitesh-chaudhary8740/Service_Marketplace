import React from 'react';

const ServiceCard = ({ data }) => {
    const { name, base_price, vendor_name, average_rating, image_url } = data;

    return (
        <div className="service-card" onClick={() => console.log(`Navigating to ${name}`)}>
            <img src={image_url} alt={name} className="service-image" />
            <div className="service-details">
                <h4 className="service-title">{name}</h4>
                <p className="vendor-name">by {vendor_name}</p>

                <div className="rating-price">
                    <span className="rating">⭐ {average_rating}</span>
                    <span className="price">Starting from ${base_price}</span>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;