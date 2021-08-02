import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe(x => {
      switch (this.router.url) {
        case '/company': document.getElementById('employeeId').classList.remove("active"); document.getElementById('companyId').classList.add("active"); break;
        case '/employee': document.getElementById('companyId').classList.remove("active"); document.getElementById('employeeId').classList.add("active"); break;
      }
    })
  }

  title = 'Job Platform';
}