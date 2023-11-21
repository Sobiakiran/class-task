import React from 'react'

const Signup = () => {

    const Formdata = () => {
        // Define state outside the contact function
        const [formData, setFormData] = useState({
            name:'',
           email: '',
           phonenumber:'',
           age:'',
           password:'',
           confirmPassword:'',
           country:'',
           city:''
        });
      
         // Destructure email and password inside the component function
         const {name,email, phonenumber,age, password, confirmpassword,country,city} = formData;
      
        const onChange = (e) => {
          setFormData({...formData, [e.target.name]: e.target.value});
        };
      
       
        const onSubmit = (e) => {
          e.preventDefault();
          console.log(formData);
        };

  return (
      <div className="container d-flex  flex-col justify-content-center align-items-center text-light bg-dark">
        <h2>SignUp</h2>
    
      <form class="row g-3">
  <div class="w-50">
    <label for="inputEmail4" class="form-label">Name</label>
    <input type="text" value={name} class="form-control" id="name"/>
  </div>
  <div class="w-50">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="w-50">
    <label for="phonenumber" class="form-label">phone Number</label>
    <input type="number"  class="form-control" id="phonenumber"/>
  </div>
  <div class=" w-50">
    <label for="age" class="form-label">Age</label>
    <input type="number" value={age} class="form-control" id="age"/>
  </div>
 
  <div class="w-50">
    <label for="inputPassword" class="form-label">Password</label>
    <input type="password" value={password} class="form-control" id="inputPassword"/>
  </div>
  <div class="w-50">
    <label for="cinputPassword" class="form-label">Confirm Password</label>
    <input type="password" value={confirmpassword} class="form-control" id="cinputPassword"/>
  </div>

  <div class="w-50">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" value={address} class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>

  <div class="w-50">
    <label for="inputCity" class="form-label">Country</label>
    <input type="text" value={country} class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">City</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Karachi</option>
      <option>Islam abad</option>
      <option>Lahore</option>
      <option>peshawar</option>
      <option>Gilgit</option>
    </select>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
      </div>
  )
}
}

export default Signup
