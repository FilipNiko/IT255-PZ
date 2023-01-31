import { Component } from '@angular/core';
import { Porudzbina } from '../modeli/porudzbina';
import { CrudServiceService } from '../services/crud-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Knjiga } from '../modeli/knjiga';

@Component({
  selector: 'app-admin-porudzbine',
  templateUrl: './admin-porudzbine.component.html',
  styleUrls: ['./admin-porudzbine.component.scss']
})
export class AdminPorudzbineComponent {

  listaPorudzbina: Porudzbina[] = [];
  promenaStatusaForma: FormGroup;
  porudzbina : Porudzbina;
  forma: FormGroup;

  constructor(private crudService: CrudServiceService, fb:FormBuilder){

    this.forma = fb.group({
      "kriterijum": ['', Validators.required]
    }),
    
    this.promenaStatusaForma = fb.group({
      "status": ['']
    })

  }

  ngOnInit(){
    this.getSvePorudzbine();
  }

  getSvePorudzbine() {
    this.crudService.getSvePorudzbine().subscribe((data) => {
      this.listaPorudzbina = data;
    })
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
      this.getSvePorudzbine();
    })
  }

  pretrazi(): boolean {
    let kriterijum = this.forma.get("kriterijum")?.value;
    this.crudService.pretraziPorudzbine(kriterijum).subscribe((data) => {
      this.listaPorudzbina = data;
    })
    return false;

  }

}
