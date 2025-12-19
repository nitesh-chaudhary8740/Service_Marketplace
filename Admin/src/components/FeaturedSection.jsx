import React from 'react';
import ServiceCard from './ServiceCard';

const FeaturedSection = ({ title, services, link }) => {
    return (
        <section className="featured-section">
            <div className="section-header">
                <h3>{title}</h3>
                <a href={link} className="see-all-link">See All &gt;</a>
            </div>

            <div className="service-carousel">
                {services.length > 0 ? (
                    services.map(service => (
                        <ServiceCard key={service.id} data={service} />
                    ))
                ) : (
                    <p>No services found in this section.</p>
                )}
            </div>
        </section>
    );
};

export default FeaturedSection;