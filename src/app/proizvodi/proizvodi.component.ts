import { Component } from '@angular/core';
import { Knjiga } from '../modeli/knjiga';
import { CrudServiceService } from '../services/crud-service.service';

@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.scss']
})
export class ProizvodiComponent {

  listaKnjiga: Knjiga[];
  pocetna: string = "pocetna";

  constructor(private crudService: CrudServiceService){

  }

  ngOnInit() {
    this.getKnjigeZaPocetnu();
  }

  getKnjigeZaPocetnu() {
    this.crudService.getKnjigeZaPocetnu().subscribe((data) => {
      this.listaKnjiga = data;
    })

  }
  

}
