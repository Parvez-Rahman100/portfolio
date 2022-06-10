import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({project}) => {
  const navigate = useNavigate()
    const {Name,img,_id} = project;

    const handleDetails =(id)=>{
      navigate(`/project/${id}`)
    }
    return (
        <div  className='container mx-auto'>
           <div className=' my-16'>
           <img style={{width:'500px'}} className='projectImg' src={img} alt="project" />
           <h2 className='text-center text-xl font-bold my-2'> {Name}</h2>
           <button onClick={()=>handleDetails(_id)} className='btn btn-outline w-48 block mx-auto my-2'>Details</button>
           </div>
        </div>
    );
};

export default Project;