import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [project,setProject] = useState({})
    const {img,Name,img2,img3,img4,live,client,server,description} = project;
    const {id} = useParams()

    useEffect(()=>{
        const url = `https://parvezportfolio.herokuapp.com/projects/${id}`;
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data => setProject(data))
    },[id])

    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-2xl font-bold my-5'>{Name}</h1>
            <div className='lg:flex flex-row justify-between '>
            <a target='_blank' rel="noreferrer" className='btn btn-outline mx-8  my-2 w-48' href={live}>Live</a>
            <a target='_blank' rel="noreferrer" className='btn btn-outline mx-8  my-2 w-48' href={client}>Client</a>
            <a target='_blank' rel="noreferrer" className='btn btn-outline mx-8  my-2 w-48' href={server}>Server</a>
            </div>
            <div>
                <p className='text-center my-5'>{description}</p>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4'>
            <img className=" px-2 rounded-lg projectImg" src={img} alt="" />
            <img className=" px-2 rounded-lg projectImg" src={img2} alt="" />
            <img className=" px-2 rounded-lg projectImg" src={img3} alt="" />
            <img className=" px-2 rounded-lg projectImg" src={img4} alt="" />
            </div>
        </div>
    );
};

export default ProjectDetails;