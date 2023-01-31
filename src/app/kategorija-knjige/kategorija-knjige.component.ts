import { Component } from '@angular/core';
import { Knjiga } from '../modeli/knjiga';
import { CrudServiceService } from '../services/crud-service.service';
import { ActivatedRoute } from '@angular/router';
import { Kategorija } from '../modeli/kategorija';

@Component({
  selector: 'app-kategorija-knjige',
  templateUrl: './kategorija-knjige.component.html',
  styleUrls: ['./kategorija-knjige.component.scss']
})
export class KategorijaKnjigeComponent {

  listaKnjiga: Knjiga[];
  kategorija: Kategorija;

  constructor(private crudService: CrudServiceService, private _route: ActivatedRoute){
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = +params['id'];
      this.getKategorijaPoId(id);
      this.getKnjigePoKategoriji(id);
    })
    
  }

  getKnjigePoKategoriji(idKategorije: number) {
    this.crudService.getKnjigeKategorija(idKategorije).subscribe((data) => {
      this.listaKnjiga = data;
    })
  }

  getKategorijaPoId(idKategorije: number){
    this.crudService.getKategorija(idKategorije).subscribe((data) => {
      this.kategorija = data;
    })
  }
}
