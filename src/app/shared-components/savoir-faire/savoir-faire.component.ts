import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-savoir-faire',
  templateUrl: './savoir-faire.component.html',
  styleUrls: ['./savoir-faire.component.scss']
})
export class SavoirFaireComponent {
  @Input() hiddenHeader = false;
  @Input() carousel = false;
  @Input() title = 'Nous atouts selon votre activité';
  @Input() colClass=  "col-lg-4 col-md-6 col-sm-12"
  responsiveOptions =  [
    {
      breakpoint: '1400px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '1220px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '1100px',
      numVisible: 1,
      numScroll: 1
    }
  ]

  savoirFaire = [
    {
      title:"Controle",
      urlImg:'./assets/MPER_IMAGE/savoir_faire/04_nos_savoir/_0022_Savoir-F.png',
      routerLink:'/savoir-faire/controle',
    },{
      title:"Fraisage",
      urlImg:'./assets/MPER_IMAGE/savoir_faire/04_nos_savoir/_0019_sss.png',
      routerLink:'/savoir-faire/fraisage',
    },{
      title:"Montage & Assemblage",
      urlImg:'./assets/MPER_IMAGE/savoir_faire/04_nos_savoir/_0021_Savoir-F.png',
      routerLink:'/savoir-faire/montage-assemblage',
    },{
      title:"Outillage & Prototypage",
      urlImg:'./assets/MPER_IMAGE/savoir_faire/04_nos_savoir/_0023_Savoir-F.png',
      routerLink:'/savoir-faire/outillage-prototypage',
    },{
      title:"Tournage",
      urlImg:'./assets/MPER_IMAGE/savoir_faire/04_nos_savoir/_0020_Savoir-F.png',
      routerLink:'/savoir-faire/tournage',
    }
  ]

}
