import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  date = new Date().getFullYear();
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
