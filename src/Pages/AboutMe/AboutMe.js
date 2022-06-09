import React from 'react';

const AboutMe = () => {
    return (
        <div>
           <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/YRJv6hw/parvez-profile.jpg" class="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 class="text-5xl font-bold">Hi , I am <span className=' text-green-600'>Parvez Miah</span> </h1>
      <h2 className='text-xl font-bold'>I am a <span className=' text-green-600'>Front-end Web Developer</span> </h2>
      <p class="py-6">I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio.</p>
      <a className='btn btn-primary' target="blank" href="https://drive.google.com/file/d/19jUFepgIHXy8ERlZLDx3TWFOP_Z8xuNI/view?usp=sharing">Hire Me</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutMe;