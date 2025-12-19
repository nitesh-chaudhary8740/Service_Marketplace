import React from 'react';

const CategoryCard = ({ category }) => {
    return (
        <button className="category-card" onClick={() => console.log(`Filter by: ${category.name}`)}>
            <img src={category.icon_url} alt={category.name} className="category-icon" />
            <span className="category-name">{category.name}</span>
        </button>
    );
};

const CategoryCarousel = ({ categories }) => {
    return (
        <div className="category-carousel-container">
            {categories.map(cat => (
                <CategoryCard key={cat.id} category={cat} />
            ))}
        </div>
    );
};

export default CategoryCarousel;