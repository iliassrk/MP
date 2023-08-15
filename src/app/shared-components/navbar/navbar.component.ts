import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  toggleNav = false;
  items: MenuItem[] | undefined;
  savoirFaire = [
    {
      label:"Controle",routerLink:'/savoir-faire/controle',
    },{
      label:"Fraisage",routerLink:'/savoir-faire/fraisage',
    },{
      label:"Montage & Assemblage",routerLink:'/savoir-faire/montage-assemblage',
    },{
      label:"Outillage & Prototypage",routerLink:'/savoir-faire/outillage-prototypage',
    },{
      label:"Tournage",routerLink:'/savoir-faire/tournage',
    }
  ]
  secteursActivites = [
    {
      label:"Automobile",routerLink:'/secteurs-activites/automobile',
    },{
      label:"Ferroviaire",routerLink:'/secteurs-activites/ferroviaire',
    },{
      label:"Aéronautique",routerLink:'/secteurs-activites/aeronautique',
    },{
      label:"Médicale",routerLink:'/secteurs-activites/medicale',
    },{
      label:"Agro-alimentaire",routerLink:'/secteurs-activites/agro-alimentaire',
    },{
      label:"Mécanique générale",routerLink:'/secteurs-activites/mecanique-generale',
    },
  ]
  clickToggleNav() {
    this.toggleNav = !this.toggleNav;
    this.items = [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash'
      }
    ];
  }
}
