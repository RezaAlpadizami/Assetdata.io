import React from "react";
import "./login.css";

export const Login = () => (
  <div className="login d-flex align-middle">
    <div className="outer container-md col-3 d-flex flex-column justify-content-center">
      <div className="inner">
        <form>
          <h1 className="text-center mb-4 text-primary fw-bolder">
            AssetData<span className="fs-4">.io</span>
          </h1>
          <div className="form-group mb-3">
            <label>Email </label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-group mb-4">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <div className="d-grid gap-2 mb-5">
            <button type="submit" className="btn btn-primary">
              SIGN IN
            </button>
          </div>

          <p className="forgot-password text-center">
            <a href="#1">FORGOT PASSWORD?</a>
          </p>
        </form>
      </div>
    </div>
  </div>
);
