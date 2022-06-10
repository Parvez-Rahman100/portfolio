import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [project,setProject] = useState({})
    const {img,Name} = project;
    const {id} = useParams()

    useEffect(()=>{
        const url = `https://parvezportfolio.herokuapp.com/projects/${id}`;
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data => setProject(data))
    },[id])

    return (
        <div>
            <h1>This is project no : {id}</h1>
            <img src={img} alt="" />
            <h1>{Name}</h1>
        </div>
    );
};

export default ProjectDetails;