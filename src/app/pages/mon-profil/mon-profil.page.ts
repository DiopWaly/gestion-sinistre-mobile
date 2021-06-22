import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.page.html',
  styleUrls: ['./mon-profil.page.scss'],
})
export class MonProfilPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  pop(){
    this.nav.pop();
  }
}
