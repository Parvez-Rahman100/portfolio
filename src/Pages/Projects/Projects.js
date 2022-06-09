import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects,setProjects] = useState([])
    useEffect(()=>{
        fetch('projects.json')
        .then(res=>res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div id='projects'>
            <h1 className='text-center text-4xl font-bold my-7'>My Projects </h1>
            <div>
                {
                    projects.map(project =><Project
                    key={project.id}
                    project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;