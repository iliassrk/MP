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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DividerModule,
    NgOptimizedImage,
    FlexModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
