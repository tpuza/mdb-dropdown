import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-page-component',
  template: `<div>
    <div>
      <div mdbDropdown class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          aria-expanded="false"
          mdbDropdownToggle
        >
          Dropdown button inside router
        </button>
        <ul mdbDropdownMenu class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>`
})
export class EmptyPageComponent {
}
