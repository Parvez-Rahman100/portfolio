import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Me</h1>
      <p className="py-6">Always available for work if the right project comes along, Feel free to contact me!</p>
      <h4>Email me at : <span className='text-green-600'>iamparvezrahman@gmail.com</span></h4>
      <h4>Phone Number : <span className='text-green-600'>+8801686172299</span></h4>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form action="https://formsubmit.co/iamparvezrahman@gmail.com" method='POST'>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea type="text" name='message' placeholder="Your Message" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="Email" className="input input-bordered" required/>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Send Message</button>
        </div>
      </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Contact;