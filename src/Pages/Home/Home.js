import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';



const Home = () => {
    return (
        <div className='container mx-auto'>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;