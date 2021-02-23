import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username= ''
  password= ''
  invalidLogin= false
  errorMessage= 'Invalid Credentials'

  constructor(private router: Router, private hcas: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.hcas.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome'])
      this.invalidLogin= false
    } else {
      this.invalidLogin= true
    }
  }

}
