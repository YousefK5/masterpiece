import React from 'react'

const LoginForm = () => {
  return (
    <form id="login-form">
            <div className="row g-3">
                <div className="col-12">
                <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3 " type="submit">Login</button>
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

export default LoginForm