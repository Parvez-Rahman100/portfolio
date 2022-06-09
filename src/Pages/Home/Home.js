import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';



const Home = () => {
    return (
        <div className='container mx-auto'>
            <AboutMe></AboutMe>
            <Projects></Projects>
        </div>
    );
};

export default Home;