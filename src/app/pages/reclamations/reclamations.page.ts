import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.page.html',
  styleUrls: ['./reclamations.page.scss'],
})
export class ReclamationsPage implements OnInit {
  public reclamations: any[] = [];
  public validImg = '../../assets/icons/tab/newcompte/username-valide-webwhite.svg';
  public stepBars = [
    {step : 'Remboursement', date : 'JJ/MM/aA', level: 'step'},
    {step : 'Decision', date : 'JJ/MM/aA', level: 'step'},
    {step : 'votre demande est en cours d’examen', date : '05 Mars 2021', level: 'step completed'},
    {step : 'votre demande a été soumise', date : '01 Mars 2021', level: 'step completed'}
  ];
  public detail = false;
  public r: any;
  constructor(
    private nav: NavController,
    private router: Router
    ) { }

  ngOnInit() {
    this.reclamations = [
      {
        marque: 'Mercedes Benz',
        typeSinistre: 'Type de sinistre',
        modele: 'GLA 2016',
        col: 'Collision',
        num: '2021A0031FJCDGEO',
        date: 'Date',
        etap: '01/JAN/2021',
        appreciation: 'Approuvé',
        class: 'approuve'
      },
      {
        marque: 'Ford',
        typeSinistre: 'Type de sinistre',
        modele: 'EDGE 2015 Tit',
        col: 'Bris de glace',
        num: '2021A0031FJCDGEO',
        date: 'Date',
        etap: '03/MARS/2021',
        appreciation: 'En cours de traitement',
        class: 'enCours'
      },
      {
        marque: 'Renault',
        typeSinistre: 'Type de sinistre',
        modele: 'Kadjar 2018',
        col: 'Incendie',
        num: '2021A0031FJCDGEO',
        date: 'Date',
        etap: '10/AVRIL/2021',
        appreciation: 'Remboursé',
        class: 'rembourse'
      }
    ];
  }
  pop(){
    if(this.detail){
      this.detail = false;
    }else{
      this.nav.pop();
    }
  }

  soumettre(){
    this.router.navigate(['tabs/declaration-sinistre']);
  }
  detailClick(r){
    this.r = r;
    this.detail = true;
  }
}
