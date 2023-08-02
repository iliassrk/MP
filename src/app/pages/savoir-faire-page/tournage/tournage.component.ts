import { Component } from '@angular/core';

@Component({
  selector: 'app-tournage',
  templateUrl: './tournage.component.html',
  styleUrls: ['./tournage.component.scss']
})
export class TournageComponent {
  selectedTabIndex = 0;
  images: any[] = [
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/05_nos_pieces/1.png', alt:'_0016_Calque-8-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/05_nos_pieces/2.png', alt:'_0013_Calque-11-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/05_nos_pieces/3.png', alt:'_0014_Calque-10-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/05_nos_pieces/4.png', alt:'_0015_Calque-9-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/05_nos_pieces/5.png', alt:'_0017_Calque-7-min'}

  ];


  onChangeTab(index: number){
    this.selectedTabIndex = index;
  }
}
