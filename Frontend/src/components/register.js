import React, { useState } from "react";
import MyNavbar from "./navbar";
import Menu from "./menu";
import CarouselComponent from "./carouselcomponent";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(values.password, values.confirmpassword);
  
    if (values.password[0] === values.confirmpassword[0]) {
      navigate("/emailverification", { state: { values } });
    } else {
      alert('Passwords do not match');
    }
  };
  
  



  return (
    <>
      <MyNavbar />
      <CarouselComponent />

      <div className="d-lg-flex justify-content-around p-2 ps-lg-5 pe-lg-5 mb-5">
        <div className="col-lg-2 col-xs-12 col-md-12">
          <Menu />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-10 ps-md-5">
          <form method="post" onSubmit={handleSubmit}>
            <div>
              <div>
                <h3>Create Account</h3>
              </div>
              <hr />
              <div className="form-group row">
                <label
                  className="control-label col-sm-2 col-md-2"
                  for="firstname"
                >
                  First Name
                </label>
                <div className="col-sm-6 col-md-6 col-xs-12">
                  <input
                    className="form-control mb-2"
                    type="text"
                    id="firstname"
                    name="firstname"
                    onChange={handleInput}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="control-label col-sm-2 col-md-2"
                  for="lastname"
                >
                  Last Name
                </label>
                <div className="col-sm-6 col-md-6 col-xs-12">
                  <input
                    className="form-control mb-2"
                    type="text"
                    id="lastname"
                    name="lastname"
                    onChange={handleInput}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-sm-2 col-md-2" for="email">
                  Email
                </label>
                <div className="col-sm-6 col-md-6 col-xs-12">
                  <input
                    className="form-control mb-2"
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="form-group row">
                <label className="control-label col-sm-2 col-md-2" for="phone">
                  Phone:
                </label>
                <div className="col-sm-6 col-md-6 col-xs-12">
                  <input
                    className="form-control mb-2"
                    type="tel"
                    id="phone"
                    name="phone"
                    onChange={handleInput}
                    pattern="[0-9]{10}"
                    title="10 digit numeric value only"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="form-group row">
                <label
                  className="control-label col-sm-2 col-md-2"
                  for="password"
                >
                  Password:
                </label>
                <div className="col-sm-6 col-md-6 col-xs-12">
                  <input
                    className="form-control mb-2"
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleInput}
                  
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="control-label col-sm-2 col-md-2"
                  for="confirmpassword"
                >
                  Confirm Password:
                </label>
                <div className="col-sm-6 col-md-6 col-xs-12">
                  <input
                    className="form-control mb-2"
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-md-offset-2 col-md-2">
                <button
                  type="submit"
                  className="btn btn-primary register-next-step-button"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
