import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CompanyComponent } from './pages/company/company.component';
import {DividerModule} from "primeng/divider";
import {NgOptimizedImage} from "@angular/common";
import {FlexModule} from "@angular/flex-layout";
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";
import { SecteursActivitesComponent } from './shared-components/secteurs-activites/secteurs-activites.component';
import { SecteursActivitesPageComponent } from './pages/secteurs-activites-page/secteurs-activites-page.component';
import { HeaderTitleSectionComponent } from './shared-components/header-title-section/header-title-section.component';
import { ActiviteAutomobileComponent } from './pages/secteurs-activites-page/activite-automobile/activite-automobile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    CompanyComponent,
    SecteursActivitesComponent,
    SecteursActivitesPageComponent,
    HeaderTitleSectionComponent,
    ActiviteAutomobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DividerModule,
    NgOptimizedImage,
    FlexModule,
    CarouselModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
