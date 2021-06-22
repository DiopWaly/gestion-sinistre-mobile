import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reinitialize',
  templateUrl: './password-reinitialize.page.html',
  styleUrls: ['./password-reinitialize.page.scss'],
})
export class PasswordReinitializePage implements OnInit {
  form: FormGroup;
  msg = true;
  step = 1;
  indication = {p1: 'Saisir votre adresse email et vous recevrez un lien',p2:'pour créer un nouveau mot de passe'};
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',Validators.compose([Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]))
    });
    console.log(this.form);
  }
  send(){
    this.msg = this.form.valid;
    console.log('form : ',this.form.valid);
    if(this.msg){
      this.step = 2;
      this.indication.p1 = 'Regarder votre adresse vous trouverez un mail';
      this.indication.p2 = 'Avec les étapes de réinitialisation';
    }

  }

}
