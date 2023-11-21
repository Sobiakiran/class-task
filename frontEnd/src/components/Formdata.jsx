import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Formdata = () => {
  // Define state outside the contact function
  const [formData, setFormData] = useState({
    password: '',
    email: '',
  });

   // Destructure email and password inside the component function
   const {email, password} = formData;

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

 
  const onSubmit = (e) => {
    e.preventDefault();
    if(email === "" || password === "" || password.length <= 6 ){
      toast.error(`${email === "" ? "Please enter your email correclty" : "Please enter your password correctly it must be more than 6 characters"}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else{
      toast.success('Form Submiited successfully you will be redirected soon', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    console.log(formData);
  };
  return (
    <div className="container bg-dark">
         <form onSubmit={onSubmit} className='d-flex flex-col justify-content-center align-items-center mt-5 text-lg text-success p-10 '>
      <div className="mb-3 w-50">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          value={email}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={onChange}
        />
      </div>
      <div className="mb-3 w-50">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          className="form-control"
          id="exampleInputPassword1"
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
   
  );
};

export default Formdata;
