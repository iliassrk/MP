import { Component } from '@angular/core';

@Component({
  selector: 'app-fraisage',
  templateUrl: './fraisage.component.html',
  styleUrls: ['./fraisage.component.scss']
})
export class FraisageComponent {
  selectedTabIndex = 0;
  images: any[] = [
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/fraisage/1.png', alt:'_0016_Calque-8-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/fraisage/2.png', alt:'_0013_Calque-11-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/fraisage/3.png', alt:'_0014_Calque-10-min'},

  ];


  onChangeTab(index: number){
    this.selectedTabIndex = index;
  }
}
