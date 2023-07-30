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
import {ActiviteMedicaleComponent} from "./pages/secteurs-activites-page/activite-medicale/activite-medicale.component";
import {
  ActiviteMecaniqueGeneraleComponent
} from "./pages/secteurs-activites-page/activite-mecanique-generale/activite-mecanique-generale.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {ParcMachinePageComponent} from "./pages/parc-machine-page/parc-machine-page.component";
import {SavoirFairePageComponent} from "./pages/savoir-faire-page/savoir-faire-page.component";
import {ControleComponent} from "./pages/savoir-faire-page/controle/controle.component";
import {FraisageComponent} from "./pages/savoir-faire-page/fraisage/fraisage.component";
import {
  OutillagePrototypageComponent
} from "./pages/savoir-faire-page/outillage-prototypage/outillage-prototypage.component";
import {MontageAssemblageComponent} from "./pages/savoir-faire-page/montage-assemblage/montage-assemblage.component";
import {TournageComponent} from "./pages/savoir-faire-page/tournage/tournage.component";


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
  },{
    path: 'secteurs-activites/medicale',
    component:ActiviteMedicaleComponent
  },{
    path: 'secteurs-activites/mecanique-generale',
    component:ActiviteMecaniqueGeneraleComponent
  }
  ,{
    path: 'contact-page',
    component:ContactPageComponent
  }
  ,{
    path: 'parc-machine-page',
    component:ParcMachinePageComponent
  }
  ,{
    path: 'savoir-faire-page',
    component:SavoirFairePageComponent
  }
  ,{
    path: 'savoir-faire-page/controle',
    component:ControleComponent
  }
  ,{
    path: 'savoir-faire-page/fraisage',
    component:FraisageComponent
  }
  ,{
    path: 'savoir-faire-page/montage-assemblage',
    component:MontageAssemblageComponent
  }
  ,{
    path: 'savoir-faire-page/outillage-prototypage',
    component:OutillagePrototypageComponent
  }
  ,{
    path: 'savoir-faire-page/tournage',
    component:TournageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
