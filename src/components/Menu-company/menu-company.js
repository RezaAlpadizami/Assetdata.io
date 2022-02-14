import React, { Component } from "react";

import { Pagination } from "../Pagination/pagination";

class MenuCompany extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("https://petronasnew2.be.assetd.xyz/api/v1/setting/company")
      .then((response) => response.json())
      .then((company) => console.log(company));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-between mb-5">
          <div>
            <h5>Companies</h5>
          </div>
          <div>
            <button type="button" class="btn btn-primary me-2">
              + Add New Company
            </button>
            <button type="button" class="btn btn-outline-secondary">
              <i class="fa-light fa-filters"></i> Filter
            </button>
          </div>
        </div>

        <table class="table mb-5">
          <thead>
            <tr>
              <th scope="col">View</th>
              <th scope="col">Company Name</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <i class="fa-solid fa-eye"></i>
              </th>
              <td>Asset Data</td>
              <td>Banda South</td>
              <td>
                <i class="fa-solid fa-pen-to-square mx-2" role="button"></i>
                <i class="fa-solid fa-xmark" role="button"></i>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    );
  }
}

export default MenuCompany;
