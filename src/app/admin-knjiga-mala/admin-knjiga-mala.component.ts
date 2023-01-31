import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Knjiga } from '../modeli/knjiga';
import { Store } from '@ngrx/store';
import { dodajKnjigu } from '../korpa-state/korpa.actions';
import { CrudServiceService } from '../services/crud-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Kategorija } from '../modeli/kategorija';

@Component({
  selector: 'app-admin-knjiga-mala',
  templateUrl: './admin-knjiga-mala.component.html',
  styleUrls: ['./admin-knjiga-mala.component.scss']
})
export class AdminKnjigaMalaComponent {

  @Input() knjiga: Knjiga


  izmenaKnjigeForma: FormGroup;
  listaKategorija: Kategorija[];
  @Output() slanjeKnjige = new EventEmitter<Knjiga>();


  constructor(private store: Store, private crudService: CrudServiceService, fb: FormBuilder) {

    this.izmenaKnjigeForma = fb.group({
      "naziv": ['', Validators.required],
      "autor": ['', Validators.required],
      "kategorijeId": ['', Validators.required],
      "opis": ['', Validators.required],
      "pismo": ['', Validators.required],
      "povez": ['', Validators.required],
      "strana": ['', Validators.required],
      "stanje": ['', Validators.required],
      "slikaUrl": ['', Validators.required],
      "cena": ['', Validators.required]
    })
  }

  dodajUKorpu() {
    this.store.dispatch(dodajKnjigu(this.knjiga))
  }

  ponistiUnos(){
    this.izmenaKnjigeForma.reset();
  }

  izbrisiKnjigu() {
    this.crudService.deleteKnjiga(this.knjiga.id).subscribe((data) => {
      window.location.reload();
      alert("Knjiga je obrisana sa servera");

    })
  }

  popuniPolja(){
   
    this.slanjeKnjige.emit(this.knjiga);

  }
  

  getSveKategorije() {
    this.crudService.getSveKategorije().subscribe((data) => {
      this.listaKategorija = data;
    })
  }

}
