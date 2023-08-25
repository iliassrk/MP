import { Component } from '@angular/core';

@Component({
  selector: 'app-montage-assemblage',
  templateUrl: './montage-assemblage.component.html',
  styleUrls: ['./montage-assemblage.component.scss']
})
export class MontageAssemblageComponent {
  selectedTabIndex = 0;
  images: any[] = [
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/montage_assemblage/1.png', alt:'_0016_Calque-8-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/montage_assemblage/2.png', alt:'_0013_Calque-11-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/montage_assemblage/3.png', alt:'_0014_Calque-10-min'},
    {itemImageSrc:'../assets/MPER_IMAGE/savoir_faire/montage_assemblage/4.png', alt:'_0015_Calque-9-min'}

  ];


  onChangeTab(index: number){
    this.selectedTabIndex = index;
  }
}
