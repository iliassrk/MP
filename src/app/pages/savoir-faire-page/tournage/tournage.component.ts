import { Component } from '@angular/core';

@Component({
  selector: 'app-tournage',
  templateUrl: './tournage.component.html',
  styleUrls: ['./tournage.component.scss']
})
export class TournageComponent {
  selectedTabIndex = 0;
  images: any[] = [
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Tournage/sv-1.png', alt:'_0016_Calque-8-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Tournage/sv-2.png', alt:'_0013_Calque-11-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Tournage/sv-3.png', alt:'_0014_Calque-10-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Tournage/sv-4.png', alt:'_0015_Calque-9-min'}

  ];


  onChangeTab(index: number){
    this.selectedTabIndex = index;
  }
}
