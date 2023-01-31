import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { KonkretnaKnjigaComponent } from './konkretna-knjiga/konkretna-knjiga.component';
import { LoggedInGuard } from './guard/LoggedInGuardService';
import { PonudaKnjigaComponent } from './ponuda-knjiga/ponuda-knjiga.component';
import { KategorijaKnjigeComponent } from './kategorija-knjige/kategorija-knjige.component';
import { KorpaComponent } from './korpa/korpa.component';
import { PorucivanjeComponent } from './porucivanje/porucivanje.component';
import { AdminKnjigeCrudComponent } from './admin-knjige-crud/admin-knjige-crud.component';
import { AdminGuard } from './guard/AdminGuardService';
import { AdminPorudzbineComponent } from './admin-porudzbine/admin-porudzbine.component';
import { AdminPorudzbinaDetaljiComponent } from './admin-porudzbina-detalji/admin-porudzbina-detalji.component';
import { AdminPorudzbineKorisnikaComponent } from './admin-porudzbine-korisnika/admin-porudzbine-korisnika.component';


const routes: Routes = [
  { path: '', redirectTo: 'knjige', pathMatch: 'full' },
  { path: 'knjige', component: ProizvodiComponent, },
  { path: 'knjige/:id', component: KonkretnaKnjigaComponent  },
  { path: 'ponuda', component: PonudaKnjigaComponent, },
  { path: 'ponuda/:id', component: KategorijaKnjigeComponent, },
  { path: 'korpa', component: KorpaComponent, },
  { path: 'porucivanje', component: PorucivanjeComponent, canActivate: [LoggedInGuard] },
  { path: 'adminKnjige', component: AdminKnjigeCrudComponent, canActivate: [AdminGuard] },
  { path: 'adminPorudzbine', component: AdminPorudzbineComponent, canActivate: [AdminGuard] },
  { path: 'adminPorudzbine/:id', component: AdminPorudzbinaDetaljiComponent, canActivate: [AdminGuard] },
  { path: 'adminPorudzbineKorisnika/:id', component: AdminPorudzbineKorisnikaComponent, canActivate: [AdminGuard] },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
