import { Component } from '@angular/core';

@Component({
  selector: 'app-montage-assemblage',
  templateUrl: './montage-assemblage.component.html',
  styleUrls: ['./montage-assemblage.component.scss']
})
export class MontageAssemblageComponent {
  selectedTabIndex = 0;
  images: any[] = [
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/montage_assemblage/1.png', alt:'savoir_faire/montage_assemblage/1.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/montage_assemblage/2.png', alt:'savoir_faire/montage_assemblage/2.png'},


  ];


  onChangeTab(index: number){
    this.selectedTabIndex = index;
  }
}
