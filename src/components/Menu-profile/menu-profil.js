import React from "react";
import "./menu-profile.css";

import InputPhoneNumber from "../Input-phone-number/input-phone-number";
import PhotoProfile from "../../Assets/image/blank-profile-picture-g6689faf2d_1280.png";

export const MenuProfile = () => (
  <div className="menu mt-5">
    <div className="container">
      <div class="d-flex position-relative mb-5">
        <img src={PhotoProfile} class="flex-shrink-0 me-5" alt="..." width={120} />
        <div className="col-4">
          <h5 class="fw-bold">Account Admin</h5>
          <p>hazirah@situp.com</p>
          <p className="p-1 bg-primary col-4 text-center rounded text-white">Business Account</p>
        </div>
      </div>
      <form class="row g-1 needs-validation" novalidate>
        <div class="col-md-6 mb-4 pe-4">
          <label for="validationCustom01" class="form-label">
            First Name
          </label>
          <input type="text" class="form-control" id="validationCustom01" placeholder="Anwar1234" required />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom02" class="form-label">
            Last name
          </label>
          <input type="text" class="form-control" id="validationCustom02" placeholder="Testing" required />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-6 mb-4 pe-4">
          <label for="validationCustomCompany" class="form-label">
            Company
          </label>
          <div class="input-group has-validation">
            <select class="form-select" id="validationCustomCompany" required>
              <option selected disabled value="Petronas">
                Petronas
              </option>
              <option>...</option>
            </select>
            <div class="invalid-feedback">Please choose a Company.</div>
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationCustomDepartment" class="form-label">
            Department
          </label>
          <select class="form-select" id="validationCustomDepartment" required>
            <option selected disabled value="Select Department">
              Select Department
            </option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">Please provide a Department.</div>
        </div>
        <div class="col-md-6 mb-4 pe-4">
          <label for="validationCustomJob" class="form-label">
            Job Title
          </label>
          <input type="text" placeholder="Select Job Title" class="form-control" id="validationCustomJob" aria-describedby="inputGroupPrepend" required></input>
          <div class="invalid-feedback">Please select a Job Title.</div>
        </div>
        <div class="col-md-6">
          <label for="validationCustomEmployee" class="form-label">
            Employee ID
          </label>
          <input type="text" class="form-control" id="validationCustomEmployee" placeholder="Add employee ID" required />
          <div class="invalid-feedback">Please provide a valid Employee ID.</div>
        </div>
        <div class="col-6 mb-5 pe-4">
          <div>
            <label class="form-label">Phone Number</label>
            <InputPhoneNumber />
          </div>
        </div>
        <div class="d-flex justify-content-end col-12 mt-5 ">
          <button class="btn btn-primary button-save" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
);
