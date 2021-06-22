import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  connexion = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  connecter(){
    this.connexion = true;
  }
  onClick(){
    this.router.navigate(['tabs/pwd-reinitialize']);
  }

}
