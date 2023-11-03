import { Component } from '@angular/core';

@Component({
  selector: 'app-fraisage',
  templateUrl: './fraisage.component.html',
  styleUrls: ['./fraisage.component.scss']
})
export class FraisageComponent {
  selectedTabIndex = 0;
  images: any[] = [
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/fraisage/1.png', alt:'savoir_faire/fraisage/1.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/fraisage/2.png', alt:'savoir_faire/fraisage/2.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/fraisage/3.png', alt:'savoir_faire/fraisage/3.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/fraisage/4.png', alt:'savoir_faire/fraisage/4.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/fraisage/5.png', alt:'savoir_faire/fraisage/5.png'},

  ];


  onChangeTab(index: number){
    this.selectedTabIndex = index;
  }
}
