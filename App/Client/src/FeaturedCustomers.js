import React from 'react';
import './FeaturedCustomers.css';

import AlexMahoney from './images/AlexMahoney.jpg';
import AidanDawson from './images/AidanDawson.jpg';
import MasonFeltham from './images/MasonFeltham.jpg';

const featuredCustomersData = [
  {
    id: 1,
    name: 'Alex OMahoney',
    job: 'Loves Shopping',
    rating: 4,
    image: AlexMahoney,
  },
  {
    id: 2,
    name: 'Aidan Dawson',
    job: 'Avid Media Consumer',
    rating: 5,
    image: AidanDawson,
  },
  {
    id: 3,
    name: 'Mason Feltham',
    job: 'Regular Fitness Lover',
    rating: 4,
    image: MasonFeltham,
  },
];

const FeaturedCustomers = () => {
  return (

<div>
<h2 className="main-title">Featured Customers</h2>

    <div className="featured-customers">
      {featuredCustomersData.map((customer) => (
        <div className="customer-card" key={customer.id}>
          <img src={customer.image} alt={`Profile of ${customer.name}`} />
          <h3>{customer.name}</h3>
          <p>{customer.job}</p>
          <div className="star-rating">
            {Array.from({ length: customer.rating }).map((_, index) => (
              <span key={index} className="star">
                &#9733;
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="see-more-container">
        <button className="see-more-button">See More</button>
      </div>
</div>

  );
};

export default FeaturedCustomers;
