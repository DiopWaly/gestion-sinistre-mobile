import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.page.html',
  styleUrls: ['./mon-profil.page.scss'],
})
export class MonProfilPage implements OnInit {

  constructor(
    private nav: NavController,
    private router: Router
    ) { }

  ngOnInit() {
  }
  pop(){
    this.nav.pop();
  }
  enregistrer(){
    this.router.navigate(['tabs']);
  }
}
