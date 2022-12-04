import React from 'react'

const RegisterForm = () => {
  return (
    <form id="register-form">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="fname" placeholder="First Name" />
                  <label htmlFor="fname">First Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="lname" placeholder="Last Name" />
                  <label htmlFor="lname">Last Name</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" className="form-control" id="phone" placeholder="Your Phone Number" />
                  <label htmlFor="phone">Phone Number</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="password" className="form-control" id="cpassword" placeholder="Confirmation Password" />
                  <label htmlFor="cpassword">Confirmation Password</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Create Account</button>
              </div>
              <div className="col-12 text-center text-2xl">
                OR
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Login Via Google</button>
              </div>
            </div>
          </form>
  )
}

export default RegisterForm