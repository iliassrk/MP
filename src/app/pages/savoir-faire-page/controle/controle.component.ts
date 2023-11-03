import { Component } from '@angular/core';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.scss']
})
export class ControleComponent {

  selectedTabIndex = 0;
  images: any[] = [
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Controle/1.png', alt:'savoir_faire/Controle/1.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Controle/2.png', alt:'savoir_faire/Controle/2.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Controle/3.png', alt:'savoir_faire/Controle/3.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Controle/4.png', alt:'_avoir_faire/Controle/4.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Controle/5.png', alt:'savoir_faire/Controle/5.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Controle/6.png', alt:'savoir_faire/Controle/6.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Controle/7.png', alt:'savoir_faire/Controle/7.png'},

  ];


  onChangeTab(index: number){
    this.selectedTabIndex = index;
  }
}
