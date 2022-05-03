import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}


  Date1 : Date= new Date();
  LocalDate:String =new Date().toLocaleString();




  ngOnInit() {
    this.router.navigate(['/home'])
  }
  title = 'customer-portal';

  opened=false;

  toggleSidebar(){
    this.opened=!this.opened
  }
}
