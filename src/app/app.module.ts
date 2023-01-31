import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudServiceService } from './services/crud-service.service';
import { KnjigaMalaComponent } from './knjiga-mala/knjiga-mala.component';
import { KonkretnaKnjigaComponent } from './konkretna-knjiga/konkretna-knjiga.component';
import { LoggedInGuard } from './guard/LoggedInGuardService';
import { AuthService } from './guard/AuthService';
import { PonudaKnjigaComponent } from './ponuda-knjiga/ponuda-knjiga.component';
import { KategorijaKnjigeComponent } from './kategorija-knjige/kategorija-knjige.component';
import { KorpaComponent } from './korpa/korpa.component';
import { StoreModule } from '@ngrx/store';
import { korpaReducer, metaReducerLocalStorage } from './korpa-state/korpa.reducer';
import { PorucivanjeComponent } from './porucivanje/porucivanje.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    ProizvodiComponent,
    LoginComponent,
    KnjigaMalaComponent,
    KonkretnaKnjigaComponent,
    PonudaKnjigaComponent,
    KategorijaKnjigeComponent,
    KorpaComponent,
    PorucivanjeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({korpaUnosi: korpaReducer}, { metaReducers: [ metaReducerLocalStorage ] })
  ],
  providers: [CrudServiceService, LoggedInGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
