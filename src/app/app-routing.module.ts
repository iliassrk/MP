import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CompanyComponent} from "./pages/company/company.component";
import {SecteursActivitesPageComponent} from "./pages/secteurs-activites-page/secteurs-activites-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'secteurs-activites', component: SecteursActivitesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
