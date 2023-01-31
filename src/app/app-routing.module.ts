import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { KonkretnaKnjigaComponent } from './konkretna-knjiga/konkretna-knjiga.component';
import { LoggedInGuard } from './guard/LoggedInGuardService';
import { PonudaKnjigaComponent } from './ponuda-knjiga/ponuda-knjiga.component';
import { KategorijaKnjigeComponent } from './kategorija-knjige/kategorija-knjige.component';
import { KorpaComponent } from './korpa/korpa.component';
import { PorucivanjeComponent } from './porucivanje/porucivanje.component';


const routes: Routes = [
  { path: '', redirectTo: 'knjige', pathMatch: 'full' },
  { path: 'knjige', component: ProizvodiComponent, },
  { path: 'knjige/:id', component: KonkretnaKnjigaComponent  },
  { path: 'ponuda', component: PonudaKnjigaComponent, },
  { path: 'ponuda/:id', component: KategorijaKnjigeComponent, },
  { path: 'korpa', component: KorpaComponent, },
  { path: 'porucivanje', component: PorucivanjeComponent, canActivate: [LoggedInGuard] },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
