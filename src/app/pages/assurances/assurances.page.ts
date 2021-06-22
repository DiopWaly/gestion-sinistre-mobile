import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-assurances',
  templateUrl: './assurances.page.html',
  styleUrls: ['./assurances.page.scss'],
})
export class AssurancesPage implements OnInit {
  click = true;
  public subscription: any[] = [];
  constructor(private nav: NavController) { }

  ngOnInit() {
    this.subscription = [
      {
        marque: 'Mercedes Benz', typeAssurance: 'Bris de glace',
        model: 'GLA 2016', etap: 'Active',
        police: '2021A0031FJCDGEO', approuver: '01/03/2021 au 01/03/2021',
        nom: 'Ndiaye', prenom: 'Pape Mamadou',
        urlimg: '',
        detail: false
      },
      {
        marque: 'Ford', typeAssurance: 'Incendie, Bris de glace',
        model: 'EDGE 2015 Tit', etap: 'Active',
        police: '2021A0031FJCDGEO', approuver: '01/03/2021 au 01/03/2021',
        nom: 'Ndiaye', prenom: 'Pape Mamadou',
        urlimg: '../../assets/icons/tab/assurance/',
        detail: false
      },
      {
        marque: 'Renault', typeAssurance: 'Vol du véhicule',
        model: 'Kadjar 2018', etap: 'inActive',
        police: '2021A0031FJCDGEO', approuver: '01/03/2021 au 01/03/2021',
        nom: 'Ndiaye', prenom: 'Pape Mamadou',
        urlimg: '../../assets/icons/tab/assurance/souscription-inactive.svg',
        detail: false
      },
    ];
  }
  detail(click: boolean){
    this.click = !click;
  }
  pop(){
    this.nav.pop();
  }
}
