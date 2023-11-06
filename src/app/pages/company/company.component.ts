import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {


  selectedTabIndex = 0;

  footerSelectedTabIndex = 0;

  images: any[] = [
    {itemImageSrc:'../assets/MPER_IMAGE/societe/03_equipe/EQUIPE01.png', alt:'societe/03_equipe/EQUIPE01.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/societe/03_equipe/EQUIPE02.png', alt:'societe/03_equipe/EQUIPE02.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/societe/03_equipe/EQUIPE03.png', alt:'societe/03_equipe/EQUIPE03.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/societe/03_equipe/EQUIPE04.png', alt:'societe/03_equipe/EQUIPE04.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/societe/03_equipe/EQUIPE05.png', alt:'societe/03_equipe/EQUIPE05.png'},
    {itemImageSrc:'../assets/MPER_IMAGE/societe/03_equipe/EQUIPE06.png', alt:'societe/03_equipe/EQUIPE06.png'},

  ];

  onChangeTab(index: number){
    this.selectedTabIndex = index;
  }

  onChangeFooterTab(index: number){
    this.footerSelectedTabIndex = index;
  }

}
