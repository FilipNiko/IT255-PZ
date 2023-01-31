import { Component, Input } from '@angular/core';
import { Knjiga } from '../modeli/knjiga';
import { Store } from '@ngrx/store';
import { dodajKnjigu } from '../korpa-state/korpa.actions';


@Component({
  selector: 'app-knjiga-mala',
  templateUrl: './knjiga-mala.component.html',
  styleUrls: ['./knjiga-mala.component.scss']
})
export class KnjigaMalaComponent {

  @Input() knjiga: Knjiga


  constructor(private store: Store) {

  }

  dodajUKorpu() {


    this.store.dispatch(dodajKnjigu(this.knjiga))
  }
}
