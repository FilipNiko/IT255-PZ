import { Component } from '@angular/core';
import { AuthService } from '../guard/AuthService';
import { Kategorija } from '../modeli/kategorija';
import { CrudServiceService } from '../services/crud-service.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectBrojKnjiga, selectGrupovaneKnjige } from '../korpa-state/korpa.selectors';
import { GrupaKnjiga } from '../modeli/grupaKnjiga';
import { izbrisiKnjigu } from '../korpa-state/korpa.actions';
import { Knjiga } from '../modeli/knjiga';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  brojKnjigaUKorpi$: Observable<any>;
  korpaUnosi$: Observable<GrupaKnjiga[]>
  listaKategorija: Kategorija[];

  constructor(private crudService: CrudServiceService, private store: Store, private authService: AuthService) {
    this.korpaUnosi$ = store.select(selectGrupovaneKnjige);
    this.brojKnjigaUKorpi$ = store.select(selectBrojKnjiga);
  }

  ngOnInit() {
    this.getSveKategorije();
  }

  proveriUneteKnjige() {
    this.korpaUnosi$.forEach(grupaKnjiga => grupaKnjiga.forEach(knjiga => {
      if (knjiga.broj > knjiga.knjiga.stanje) {
        this.smanjiPrimerke(knjiga);
      }
    }))
  }

  smanjiPrimerke(grupaKnjiga: GrupaKnjiga) {
    this.store.dispatch(izbrisiKnjigu(grupaKnjiga.knjiga));

  }

  getSveKategorije() {
    this.crudService.getSveKategorije().subscribe((data) => {
      this.listaKategorija = data;
    })
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }



}
