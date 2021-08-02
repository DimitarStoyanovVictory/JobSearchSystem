import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  public activateLink(event) {
    switch (event.target.pathname) {
      case '/company': document.getElementById('employeeId').classList.remove("active"); document.getElementById('companyId').classList.add("active"); break;
      case '/employee': document.getElementById('companyId').classList.remove("active"); document.getElementById('employeeId').classList.add("active"); break;
    }
  }
}