import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CompanyComponent} from "./pages/company/company.component";
import {SecteursActivitesPageComponent} from "./pages/secteurs-activites-page/secteurs-activites-page.component";
import {
  ActiviteAutomobileComponent
} from "./pages/secteurs-activites-page/activite-automobile/activite-automobile.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
