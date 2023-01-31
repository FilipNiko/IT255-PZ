import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudServiceService } from '../services/crud-service.service';
import { Porudzbina } from '../modeli/porudzbina';
import { Korisnik } from '../modeli/korisnik';
import { Knjiga } from '../modeli/knjiga';
import { Stavka } from '../modeli/stavka';

@Component({
  selector: 'app-admin-porudzbina-detalji',
  templateUrl: './admin-porudzbina-detalji.component.html',
  styleUrls: ['./admin-porudzbina-detalji.component.scss']
})
export class AdminPorudzbinaDetaljiComponent {

  listaPorudzbina: Porudzbina[] = []
  porudzbina: Porudzbina = new Porudzbina(0, "", "", "", "", "", 0, 0, "");
  listaKorisnika: Korisnik[] = [];
  korisnik: Korisnik = new Korisnik("", "", "", false);
  listaKnjigaCitanje: Knjiga[] = [];
  listaStavkiCitanje: Stavka[] = [];
  listaKnjigaIspis: Knjiga[] = [];

  constructor(private crudService: CrudServiceService, private _route: ActivatedRoute) {

    this._route.params.subscribe(params => {
      let id = +params['id'];
      this.crudService.getPorudzbinaPoId(id).subscribe((data) => {
        this.listaPorudzbina = data;
        this.porudzbina = this.listaPorudzbina[0];
        this.getKorisnikPoId();
        this.getKnjigePorudzbine();
        
      });

    })
  }

  ngOnInit() {
  }

  prikaziKupovinu(){
    
  }



  getKonkretnaPorudzbina(id: number) {
    this.crudService.getPorudzbinaPoId(id).subscribe((data) => {
      this.listaPorudzbina = data;
      this.porudzbina = this.listaPorudzbina[0];
    });
  }

  getKorisnikPoId() {
    this.crudService.getKorisnikPoId(this.porudzbina.korisniciId).subscribe((data) => {
      this.listaKorisnika = data;
      this.korisnik = this.listaKorisnika[0];
    });
  }

  getKnjigePorudzbine() {
    this.crudService.getStavkeIzPorudzbine(this.porudzbina.id).subscribe((data) => {
      this.listaStavkiCitanje = data;

      this.listaStavkiCitanje.forEach(stavka =>{
        this.crudService.getKnjigaPoId(stavka.knjigeId).subscribe((data) => {
          this.listaKnjigaCitanje = data;
          this.listaKnjigaCitanje[0].stanje=stavka.brPrimeraka;
          this.listaKnjigaIspis.push(this.listaKnjigaCitanje[0])
      })


      });
      
    });
  }

}
