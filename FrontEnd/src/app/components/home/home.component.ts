import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public activateLink(event) {
    switch (event.target.pathname) {
      case '/company': event.target.classList.add("active"); document.getElementById('employeeId').classList.remove('active'); break;
      case '/employee': event.target.classList.add('active'); document.getElementById('companyId').classList.remove('active'); break;
    }
  } 
}