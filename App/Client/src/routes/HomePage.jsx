import React, {useState} from 'react';
import Navbar from '../Navbar';
import MainSection from '../MainSection';
import FeaturedFreelancers from '../FeaturedFreelancers';
import FeaturedCustomers from '../FeaturedCustomers';
import SignupSection from '../SignupSection';

function HomePage() {
    return (
        <div>
        <body>
        <Navbar />
        <MainSection />
        <FeaturedFreelancers />
        <FeaturedCustomers />
        <SignupSection />
        </body>
        
        </div>
        

    );
}

export default HomePage;