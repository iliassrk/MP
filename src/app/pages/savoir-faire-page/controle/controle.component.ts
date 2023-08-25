import { Component } from '@angular/core';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.scss']
})
export class ControleComponent {

  selectedTabIndex = 0;
  images: any[] = [
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Controle/1.png', alt:'_0016_Calque-8-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Controle/2.png', alt:'_0013_Calque-11-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Controle/3.png', alt:'_0014_Calque-10-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Controle/4.png', alt:'_0016_Calque-8-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Controle/5.png', alt:'_0013_Calque-11-min'},

  ];


  onChangeTab(index: number){
    this.selectedTabIndex = index;
  }
}
