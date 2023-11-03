import { Component } from '@angular/core';

@Component({
  selector: 'app-tournage',
  templateUrl: './tournage.component.html',
  styleUrls: ['./tournage.component.scss']
})
export class TournageComponent {
  selectedTabIndex = 0;
  images: any[] = [
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Tournage/1.png', alt:'savoir_faire/Tournage/1.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Tournage/2.png', alt:'savoir_faire/Tournage/2.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Tournage/3.png', alt:'savoir_faire/Tournage/3.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Tournage/4.png', alt:'savoir_faire/Tournage/4.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Tournage/5.png', alt:'savoir_faire/Tournage/5.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Tournage/6.png', alt:'savoir_faire/Tournage/6.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/Tournage/7.png', alt:'savoir_faire/Tournage/7.png'},

  ];


  onChangeTab(index: number){
    this.selectedTabIndex = index;
  }
}
