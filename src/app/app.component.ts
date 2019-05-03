import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer Portal';
  description = 'Author: Jose Alfonso Corominas. email: jatcorominas@gmail.com cell: +1-647-618-2080';

  loggedIn = false;
  user: User = new User();

  onSubmit() {
    if( this.user.name=='test' && this.user.password=='test'){
      this.loggedIn = true;
    }
    
  }

  logOut(){
  	this.user.name='';
  	this.user.password='';
  	this.loggedIn = false;
  }
}
