import React from "react";

export const Pagination = () => (
  <nav aria-label="Page navigation example ">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link text-dark" href="#1" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link text-dark" href="#1">
          1
        </a>
      </li>

      <li class="page-item">
        <a class="page-link text-dark" href="#1" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
);
