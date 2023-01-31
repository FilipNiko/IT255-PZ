import { Component } from '@angular/core';
import { Knjiga } from '../modeli/knjiga';
import { CrudServiceService } from '../services/crud-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ponuda-knjiga',
  templateUrl: './ponuda-knjiga.component.html',
  styleUrls: ['./ponuda-knjiga.component.scss']
})
export class PonudaKnjigaComponent {

  listaKnjiga: Knjiga[];
  forma: FormGroup;

  constructor(private crudService: CrudServiceService, fb: FormBuilder){

    this.forma = fb.group({
      "kriterijum": ['', Validators.required]
    })
  }

  pretrazi():boolean{
    let kriterijum = this.forma.get("kriterijum")?.value;
    this.crudService.pretraziKnjige(kriterijum).subscribe((data) => {
      this.listaKnjiga = data;
    })
    return false;

  }

  ngOnInit() {
    this.getSveKnjige();
  }

  getSveKnjige() {
    this.crudService.getSveKnjige().subscribe((data) => {
      this.listaKnjiga = data;
    })

  }
  

}
