import { Component } from '@angular/core';
import { Knjiga } from '../modeli/knjiga';
import { ActivatedRoute } from '@angular/router';
import { CrudServiceService } from '../services/crud-service.service';
import { dodajKnjigu } from '../korpa-state/korpa.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-konkretna-knjiga',
  templateUrl: './konkretna-knjiga.component.html',
  styleUrls: ['./konkretna-knjiga.component.scss']
})
export class KonkretnaKnjigaComponent {


  
  knjiga: Knjiga;
  listaKnjiga: Knjiga[];
  slicneKnjige :boolean = false;
  prikaziSakrij: string = "Prikaži knjige"


  constructor(private crudService: CrudServiceService, private _route: ActivatedRoute, private store: Store){
  }


  dodajUKorpu() {
    this.store.dispatch(dodajKnjigu(this.knjiga))
  }

    ngOnInit() {
    this._route.params.subscribe(params => {
      let id = +params['id'];
      this.getKnjiga(id);
    })
   
  }

  getKnjiga(id:number) : void{
    this.crudService.getKonkretnaKnjiga(id).subscribe((data) => {
      this.knjiga = data;
    })

  }

  getSlicneKnjige(){
    this.crudService.getKnjigeKategorija(this.knjiga.kategorijeId).subscribe((data) => {
      this.listaKnjiga = data;
      this.slicneKnjige = !this.slicneKnjige;
      if(this.prikaziSakrij=="Prikaži knjige"){
        this.prikaziSakrij="Sakrij knjige"
      }else{
        this.prikaziSakrij="Prikaži knjige"
      }
    })

  }



}
