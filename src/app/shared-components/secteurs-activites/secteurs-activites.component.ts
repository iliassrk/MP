import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-secteurs-activites',
  templateUrl: './secteurs-activites.component.html',
  styleUrls: ['./secteurs-activites.component.scss']
})
export class SecteursActivitesComponent {
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
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '425px',
      numVisible: 1,
      numScroll: 1
    }
  ]

  secteursActivites = [
    {
      title:"Automobile",
      urlImg:'./assets/MPER_IMAGE/secteur_activite/02_main/automobile1.png',
      routerLink:'/secteurs-activites/automobile',
    },{
      title:"Ferroviaire",
      urlImg:'./assets/images/découpe%20img/_0034_Rectangle-15-copie-min.png',
      routerLink:'/secteurs-activites/ferroviaire',
    },{
      title:"Aéronautique",
      urlImg:'./assets/images/découpe%20img/_0033_Rectangle-15-copie-2-min.png',
      routerLink:'/secteurs-activites/aeronautique',
    },{
      title:"Médicale",
      urlImg:'./assets/images/découpe%20img/_0030_Objet-dynamique-vectoriel-min.png',
      routerLink:'/secteurs-activites/medicale',
    },{
      title:"Agro-alimentaire",
      urlImg:'./assets/images/découpe%20img/_0032_Objet-dynamique-vectoriel-min.png',
      routerLink:'/secteurs-activites/agro-alimentaire',
    },{
      title:"Mécanique générale",
      urlImg:'./assets/images/découpe%20img/_0031_Objet-dynamique-vectoriel-min.png',
      routerLink:'/secteurs-activites/mecanique-generale',
    },
  ]

}
