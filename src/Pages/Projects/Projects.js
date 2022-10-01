import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('https://parvezportfolio.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div id='projects'>
            <h1 className='text-center text-5xl text-green-600 font-bold my-7'>My Projects </h1>
            {
                projects?.length ? (
                    <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6' >
                        {
                            projects.map(project => <Project
                                key={project._id}
                                project={project}
                            ></Project>)
                        }
                    </div>
                ) : (
                    <Loading />
                )
            }
        </div>
    );
};

export default Projects;