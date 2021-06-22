/* eslint-disable @typescript-eslint/member-ordering */
import { MapsAPILoader } from '@agm/core';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
// import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';

@Component({
  selector: 'app-declaration-sinistre',
  templateUrl: './declaration-sinistre.page.html',
  styleUrls: ['./declaration-sinistre.page.scss'],
})
export class DeclarationSinistrePage implements OnInit {

  public typeSinistres:  any[] = [];
  public voitures: any[] = [];
  stepper: boolean[]  = [];
  step = 0;
  public declarationSinistres: any[] = [];
  private urlImg = '../../assets/icons/tab/declarations/';
  public subt = '';
  private subTitle: string[] = [];
  public title = 'Déclaration de sinistre';
  public recapitulatif: any;
  public tel: number[] = [];
  date: string;
  type: 'string';

  // latitude: number;
  // longitude: number;
  // zoom: number;
  address: string;
  private geoCoder;

  constructor(
    private router: Router,
    private nav: NavController,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.typeSinistres = [
      {
        sinistre: 'J’ai subi un sinistre', color: 'medium'
      },
      {
        sinistre: 'J’ai causé un sinistre', color: 'success'
      },
      {
        sinistre: 'J’ai été victime d’un sinistre', color: 'success'
      }
    ];
    this.voitures = [
          {value: 'benz', marque: 'Mercedes Benz'},
          {value: 'ford', marque: 'Ford'},
          {value: 'renault', marque: 'Renault'}
        ];
    this.stepper[0] = true;
    for(let i = 1; i<8; i++){
      this.stepper[i] = false;
    }
    this.declarationSinistres = [
      {img: this.urlImg+'collision-web.svg', type: 'Collision'},
      {img: this.urlImg+'vol-web.svg', type: 'Vol'},
      {img: this.urlImg+'domage-mineurs-web.svg', type: 'Dommages mineur'},
      {img: this.urlImg+'inondation-web.svg', type: 'Inondation'},
      {img: this.urlImg+'animal-collision-web.svg'  , type: 'Collision avec un animal'},
      {img: this.urlImg+'autres-web.svg', type: 'Autres'}
    ];
    this.subTitle = ['','','Que se passe t‘il ?','Quand est-ce que ça s’est déroulé ?',
                      'Ou est-ce que ça s’est passé ?','Bref decriptif de l’incident',
                      'Télécharger photos de l’accident et documents'
                    ];
    this.recapitulatif ={
       vehicule: 'Mercedes', typeDeSinistre:'Bris de glace', date:'03.04.2021',
       lieu: {address: 'DAKAR (SÉNÉGAL)',lat:'',long:'',zoom: 0},
       documentsjoints: '03'
      };
    this.tel = [77,78,76,70,79];
    // this.form = new FormGroup({
    //   upload: new FormControl('',Validators.compose([]))
    // });
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder();
    });
  }

  suivant(){
    if(this.step < 8){
      this.stepper[this.step] = true;
      this.step++;
      this.subt = this.subTitle[this.step];
      console.log(this.subt);
      if(this.step === 7){
        this.title = 'Recapitulatif';
      }
    }
    if(this.step === 8){
      this.title = '';
    }
    console.log(this.step);
  }
  select(){
    console.log('test-ici !!!');
  }
  onChange($event) {
    console.log($event);
  }
  newDemande(){
    this.step = 0;
    this.title = 'Déclaration de sinistre';
    this.subt = this.subTitle[this.step];
  }
  pop(){
    this.nav.pop();
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.recapitulatif.lieu.lat = position.coords.latitude;
        this.recapitulatif.lieu.long = position.coords.longitude;
        this.recapitulatif.lieu.zoom = 8;
        this.getAddress(this.recapitulatif.lieu.lat, this.recapitulatif.lieu.long);
      });
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.recapitulatif.lieu.zoom = 12;
          this.address = results[0].formatted_address;
          console.log(this.address);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }


}
