import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CompanyComponent} from "./pages/company/company.component";
import {SecteursActivitesPageComponent} from "./pages/secteurs-activites-page/secteurs-activites-page.component";
import {
  ActiviteAutomobileComponent
} from "./pages/secteurs-activites-page/activite-automobile/activite-automobile.component";
import {
  ActiviteFerroviaireComponent
} from "./pages/secteurs-activites-page/activite-ferroviaire/activite-ferroviaire.component";
import {
  ActiviteAgroAlimentaireComponent
} from "./pages/secteurs-activites-page/activite-agro-alimentaire/activite-agro-alimentaire.component";
import {
  ActiviteAeronautiqueComponent
} from "./pages/secteurs-activites-page/activite-aeronautique/activite-aeronautique.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'company', component: CompanyComponent},
  {
    path: 'secteurs-activites',
    component: SecteursActivitesPageComponent,
  },{
    path: 'secteurs-activites/automobile',
    component:ActiviteAutomobileComponent
  },{
    path: 'secteurs-activites/ferroviaire',
    component:ActiviteFerroviaireComponent
  },{
    path: 'secteurs-activites/agro-alimentaire',
    component:ActiviteAgroAlimentaireComponent
  },{
    path: 'secteurs-activites/aeronautique',
    component:ActiviteAeronautiqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
