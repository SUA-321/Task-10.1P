import React from 'react';
import './FeaturedFreelancers.css';

import JoshuaJohnson from './images/JoshuaJohnson.jpg';
import JaneDoe from './images/JaneDoe.jpg';
import PatrickNell from './images/PatrickNell.jpg';

const featuredFreelancersData = [
  {
    id: 1,
    name: 'Joshua Johnson',
    job: 'Web Developer',
    rating: 4,
    image: JoshuaJohnson,
  },
  {
    id: 2,
    name: 'Jane Doe',
    job: 'Graphic Designer',
    rating: 5,
    image: JaneDoe,
  },
  {
    id: 3,
    name: 'Patrick Nell',
    job: 'UI/UX Designer',
    rating: 4,
    image: PatrickNell,
  },
];

const FeaturedFreelancers = () => {
  return (

<div>
<h2 className="main-title">Featured Freelancers</h2>

    <div className="featured-freelancers">
      {featuredFreelancersData.map((freelancer) => (
        <div className="freelancer-card" key={freelancer.id}>
          <img src={freelancer.image} alt={`Profile of ${freelancer.name}`} />
          <h3>{freelancer.name}</h3>
          <p>{freelancer.job}</p>
          <div className="star-rating">
            {Array.from({ length: freelancer.rating }).map((_, index) => (
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

export default FeaturedFreelancers;
