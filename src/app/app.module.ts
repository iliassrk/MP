import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from './shared-components/navbar/navbar.component';
import {FooterComponent} from './shared-components/footer/footer.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {CompanyComponent} from './pages/company/company.component';
import {DividerModule} from "primeng/divider";
import {NgOptimizedImage} from "@angular/common";
import {FlexModule} from "@angular/flex-layout";
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";
import {SecteursActivitesComponent} from './shared-components/secteurs-activites/secteurs-activites.component';
import {SecteursActivitesPageComponent} from './pages/secteurs-activites-page/secteurs-activites-page.component';
import {MperBannerComponent} from './shared-components/mper-banner/mper-banner.component';
import {MperHeaderComponent} from './shared-components/mper-header/mper-header.component';
import {EquipeCardComponent} from './shared-components/equipe-card/equipe-card.component';
import {
  ActiviteAutomobileComponent
} from './pages/secteurs-activites-page/activite-automobile/activite-automobile.component';
import {
  ActiviteFerroviaireComponent
} from './pages/secteurs-activites-page/activite-ferroviaire/activite-ferroviaire.component';
import {
  ActiviteAgroAlimentaireComponent
} from './pages/secteurs-activites-page/activite-agro-alimentaire/activite-agro-alimentaire.component';
import {
  ActiviteAeronautiqueComponent
} from './pages/secteurs-activites-page/activite-aeronautique/activite-aeronautique.component';
import {ActiviteMedicaleComponent} from './pages/secteurs-activites-page/activite-medicale/activite-medicale.component';
import {
  ActiviteMecaniqueGeneraleComponent
} from './pages/secteurs-activites-page/activite-mecanique-generale/activite-mecanique-generale.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {InputTextModule} from "primeng/inputtext";
import {ParcMachinePageComponent} from './pages/parc-machine-page/parc-machine-page.component';
import {SavoirFairePageComponent} from './pages/savoir-faire-page/savoir-faire-page.component';
import {ControleComponent} from './pages/savoir-faire-page/controle/controle.component';
import {FraisageComponent} from './pages/savoir-faire-page/fraisage/fraisage.component';
import {
  OutillagePrototypageComponent
} from './pages/savoir-faire-page/outillage-prototypage/outillage-prototypage.component';
import {MontageAssemblageComponent} from './pages/savoir-faire-page/montage-assemblage/montage-assemblage.component';
import {TournageComponent} from './pages/savoir-faire-page/tournage/tournage.component';
import {SavoirFaireComponent} from './shared-components/savoir-faire/savoir-faire.component';
import {GalleriaModule} from "primeng/galleria";
import {FirestoreModule} from "@angular/fire/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import { environment } from 'src/environments/environment';
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    CompanyComponent,
    SecteursActivitesComponent,
    SecteursActivitesPageComponent,
    CompanyComponent,
    MperHeaderComponent,
    MperBannerComponent,
    EquipeCardComponent,
    ActiviteAutomobileComponent,
    ActiviteAeronautiqueComponent,
    ActiviteFerroviaireComponent,
    ActiviteAgroAlimentaireComponent,
    ActiviteMedicaleComponent,
    ActiviteMecaniqueGeneraleComponent,
    ContactPageComponent,
    ParcMachinePageComponent,
    SavoirFairePageComponent,
    ControleComponent,
    FraisageComponent,
    OutillagePrototypageComponent,
    MontageAssemblageComponent,
    TournageComponent,
    SavoirFaireComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DividerModule,
    NgOptimizedImage,
    FlexModule,
    CarouselModule,
    ButtonModule,
    InputTextModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirestoreModule,
    GalleriaModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
