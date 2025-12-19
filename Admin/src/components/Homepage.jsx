// src/pages/HomePage.js

import React, { useState, useEffect } from 'react';
import "./Homepage.css"
import Header from './Header';
import CategoryCarousel from './CategoryCarousel';
import FeaturedSection from './FeaturedSection';
import StatsBar from './StatsBar';
import Footer from './Footer';


function HomePage() {
    // Mock data for demonstration (will be replaced by API calls based on DFD)
    const [categories, setCategories] = useState([
        { id: 1, name: 'Cleaning', icon_url: '/icons/clean.png' },
        { id: 2, name: 'Repair', icon_url: '/icons/repair.png' },
        { id: 3, name: 'Health', icon_url: '/icons/health.png' },
        { id: 4, name: 'Beauty', icon_url: '/icons/beauty.png' },
    ]);

    const [mostBookedServices, setMostBookedServices] = useState([
        { id: 's1', name: 'Deep Home Clean', base_price: 120, vendor_name: 'ProClean', average_rating: 4.9, image_url: '/img/deep-clean.jpg' },
        { id: 's2', name: 'AC Repair', base_price: 80, vendor_name: 'FixIt', average_rating: 4.7, image_url: '/img/ac-repair.jpg' },
        { id: 's3', name: 'Plumbing Fix', base_price: 65, vendor_name: 'WaterPros', average_rating: 4.8, image_url: '/img/plumbing.jpg' },
    ]);

    // This is where your DFD logic will be implemented for real data fetching
    useEffect(() => {
        // fetchInitialData(location); // This call will map to DFD Process 1.0 & 2.0
    }, []);

    return (
        <div className="home-page-container">
            <Header appName="Service Marketplace" />

            <main>
                {/* Location Picker (Below Header) */}
                <div className="location-bar">
                    <button className="location-picker">
                        📍 Select Current Location
                    </button>
                </div>

                {/* Social Proof/Stats (Below Location, Above Categories) */}
                <StatsBar
                    overallRating={4.8}
                    totalCustomers="12K+"
                />

                {/* Service Categories (Line 2) */}
                <CategoryCarousel categories={categories} />

                {/* Most Booked Services (Line 3) */}
                <FeaturedSection
                    title="🔥 Most Booked Services"
                    services={mostBookedServices}
                    link="/services/most-booked"
                />

                {/* Curated Services (Cleaning Essentials) */}
                <FeaturedSection
                    title="✨ Cleaning Essentials"
                    services={mostBookedServices.slice(0, 2)}
                    link="/categories/cleaning"
                />

                {/* Full Width Feed (Nearby Vendors/Services) */}
                <div className="full-width-feed">
                    <h2 style={{ paddingLeft: '15px' }}>Nearby Services</h2>
                    {/* Placeholder for vertical list of ServiceCard components */}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default HomePage;