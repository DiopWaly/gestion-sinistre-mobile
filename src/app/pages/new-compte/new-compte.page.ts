import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-compte',
  templateUrl: './new-compte.page.html',
  styleUrls: ['./new-compte.page.scss'],
})
export class NewComptePage implements OnInit {
  public check = false;
  public step = 1;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  select(c: boolean){
    this.check = !c;
  }
  suivant(){
    this.step++;
    if(this.step > 5){
      this.router.navigate(['/tabs/assurances']);
    }
  }
  updatePhoto(){
    console.log('Remove profile picture');
  }

}
