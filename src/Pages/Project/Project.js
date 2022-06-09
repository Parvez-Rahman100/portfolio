import React from 'react';

const Project = ({project}) => {
    const {Name,img,description,live,client,server} = project;
    return (
        <div  className='container mx-auto'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='projectImg' style={{width:'800px'}} src={img} alt="project" /></figure>
  <div class="card-body">
    <h2 class="card-title">{Name}</h2>
    <p>{description}</p>
    <a className='btn btn-primary' href={live} target="_blank" rel="noopener noreferrer">Live</a>
    <a className='btn btn-primary' href={client} target="_blank" rel="noopener noreferrer">Client</a>
    <a className='btn btn-primary' href={server} target="_blank" rel="noopener noreferrer">Server</a>
  </div>
</div>
        </div>
    );
};

export default Project;