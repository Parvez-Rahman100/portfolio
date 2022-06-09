import React from 'react';

const Contact = () => {
    return (
        <div id='contact' class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Contact Me</h1>
      <p class="py-6">Always available for work if the right project comes along, Feel free to contact me!</p>
      <h4>Email me at : <span className='text-green-600'>iamparvezrahman@gmail.com</span></h4>
      <h4>Phone Number : <span className='text-green-600'>+8801686172299</span></h4>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
      <form action="https://formsubmit.co/iamparvezrahman@gmail.com" method='POST'>
      <div class="form-control">
          <label class="label">
            <span class="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Your Message</span>
          </label>
          <textarea type="text" name='message' placeholder="Your Message" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="Email" class="input input-bordered" required/>
        </div>
        <div class="form-control mt-6">
          <button type='submit' class="btn btn-primary">Send Message</button>
        </div>
      </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Contact;