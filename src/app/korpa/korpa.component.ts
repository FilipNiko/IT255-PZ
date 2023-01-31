import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { dodajKnjigu, izbrisiKnjigu, ocistiKorpu } from '../korpa-state/korpa.actions';
import { Observable } from 'rxjs';
import { GrupaKnjiga } from '../modeli/grupaKnjiga';
import { selectBrojKnjiga, selectGrupovaneKnjige, selectUkupnaCena } from '../korpa-state/korpa.selectors';
import { AuthService } from '../guard/AuthService';
import { Knjiga } from '../modeli/knjiga';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.scss']
})
export class KorpaComponent {

  korpaUnosi$: Observable<GrupaKnjiga[]>
  ukupnaCena$: Observable<any>;
  brojKnjigaUKorpi$: Observable<any>;
  nedovoljnoStanje: boolean = false;

  constructor(private store: Store, private authService: AuthService) {
    this.korpaUnosi$ = store.select(selectGrupovaneKnjige);
    this.ukupnaCena$ = store.select(selectUkupnaCena);
    this.brojKnjigaUKorpi$ = store.select(selectBrojKnjiga);
  }


  ocistiKorpu() {
    this.store.dispatch(ocistiKorpu());
  }

  

  proveriStanje(grupaKnjiga: GrupaKnjiga): boolean {
    if (grupaKnjiga.knjiga.stanje > grupaKnjiga.broj) {
      return true;
    } else {
      return false;
    }
  }

  povecajPrimerke(grupaKnjiga: GrupaKnjiga) {

    if (this.proveriStanje(grupaKnjiga)) {
      this.store.dispatch(dodajKnjigu(grupaKnjiga.knjiga));
      this.nedovoljnoStanje = false;
    } else {
      alert("Već ste dodali sve dostupne knjige u korpu!")
      this.nedovoljnoStanje = true;
    }

  }

  smanjiPrimerke(grupaKnjiga: GrupaKnjiga) {
    this.store.dispatch(izbrisiKnjigu(grupaKnjiga.knjiga));
    this.nedovoljnoStanje = false;
  }


  daLiJeUlogovan(): boolean {
    return this.authService.isLoggedIn();
  }


}
