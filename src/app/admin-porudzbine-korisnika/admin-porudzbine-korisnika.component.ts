import { Component } from '@angular/core';
import { Porudzbina } from '../modeli/porudzbina';
import { CrudServiceService } from '../services/crud-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Korisnik } from '../modeli/korisnik';

@Component({
  selector: 'app-admin-porudzbine-korisnika',
  templateUrl: './admin-porudzbine-korisnika.component.html',
  styleUrls: ['./admin-porudzbine-korisnika.component.scss']
})
export class AdminPorudzbineKorisnikaComponent {
  listaPorudzbina: Porudzbina[] = [];
  listaKorisnika: Korisnik[] = [];
  korisnik:Korisnik = new Korisnik(" ", " ", " " , false);
  promenaStatusaForma: FormGroup;
  porudzbina : Porudzbina;
  idKorisnika :number;

  constructor(private crudService: CrudServiceService, fb:FormBuilder, private _route: ActivatedRoute){
    this.promenaStatusaForma = fb.group({
      "status": ['']
    })
    this._route.params.subscribe(params => {
      let id = +params['id'];
      this.idKorisnika=id;
      this.crudService.getPorudzbinePoKorisniku(id).subscribe((data) => {
        this.listaPorudzbina = data; 
        this.getKorisnikPoId(); 
      });
      

    })

  }

  ngOnInit(){
    
  }

  getKorisnikPoId(){
    this.crudService.getKorisnikPoId(this.idKorisnika).subscribe((data) => {
      this.listaKorisnika = data;  
      this.korisnik=this.listaKorisnika[0];
    });
  }

 getPorudzbinePoKorisniku(){
  this.crudService.getPorudzbinePoKorisniku(this.idKorisnika).subscribe((data) => {
    this.listaPorudzbina = data;  
  });
 }

  popuniStatusForma(porudzbina:Porudzbina){
    this.porudzbina=porudzbina;
    this.promenaStatusaForma.controls["status"].setValue(this.porudzbina.status);
  }

  promeniStatus(){
    let noviStatus = this.promenaStatusaForma.get("status")?.value;
    this.porudzbina.status=noviStatus;

    console.log(noviStatus);
    this.crudService.izmeniPorudzbinu(this.porudzbina, this.porudzbina.id).subscribe(res => {
      let ref = document.getElementById('cancelStatus');
      ref?.click();
      this.promenaStatusaForma.reset();
      this.getPorudzbinePoKorisniku();
    })
  }


}
