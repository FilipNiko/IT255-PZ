import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Korisnik } from '../modeli/korisnik';
import { map } from 'rxjs';
import { Observable } from "rxjs";
import { Knjiga } from '../modeli/knjiga';
import { Kategorija } from '../modeli/kategorija';
import { Porudzbina } from '../modeli/porudzbina';
import { GrupaKnjiga } from '../modeli/grupaKnjiga';
import { Stavka } from '../modeli/stavka';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private http: HttpClient) {

  }

  dodajNovogKorisnika(korisnik: Korisnik): Observable<Korisnik> {
    return this.http.post("http://localhost:3000/korisnici", korisnik)
      .pipe(map((data: any) => this.createKorisnik(data)),)
  }


  getKorisnikZaLogin(username: String, password: string): Observable<Korisnik[]> {
    return this.http.get<any>("http://localhost:3000/korisnici?username=" + username + "&&password=" + password)
      .pipe(map((data: any) => data.map((item: any) =>
        this.createKorisnik(item))
      ))
  }
  
  getPoUsername(username: string):Observable<Korisnik[]>{
    return this.http.get<any>("http://localhost:3000/korisnici?username=" + username)
      .pipe(map((data: any) => data.map((item: any) =>
        this.createKorisnik(item))
      ))
  }





  getKnjigeZaPocetnu(): Observable<Knjiga[]> {
    return this.http.get<any>("http://localhost:3000/knjige?_limit=20")
      .pipe(map((data: any) => data.map((item: any) =>
        this.createKnjige(item))
      ))
  }

  getSveKnjige(): Observable<Knjiga[]> {
    return this.http.get<any>("http://localhost:3000/knjige")
      .pipe(map((data: any) => data.map((item: any) =>
        this.createKnjige(item))
      ))
  }

  pretraziKnjige(kriterijum : string): Observable<Knjiga[]> {
    return this.http.get<any>("http://localhost:3000/knjige?q=" + kriterijum)
      .pipe(map((data: any) => data.map((item: any) =>
        this.createKnjige(item))
      ))
  }


  getKnjigeKategorije(id: number): Observable<Knjiga[]> {
    return this.http.get<any>("http://localhost:3000/knjige?kategorijeId=" + id)
      .pipe(map((data: any) => data.map((item: any) =>
        this.createKnjige(item))
      ))
  }

  updateKnjiga(novaKnjiga: any, id: number) : Observable<Knjiga> {
    return this.http.put<any>("http://localhost:3000/knjige/" + id, novaKnjiga)
    .pipe(map((data: any) => this.createKnjige(data)))
  }
 






  getSveKategorije(): Observable<Kategorija[]> {
    return this.http.get<any>("http://localhost:3000/kategorije")
      .pipe(map((data: any) => data.map((item: any) =>
        this.createKategorija(item))
      ))
  }

  getKonkretnaKnjiga(id: number): Observable<Knjiga> {
    return this.http.get("http://localhost:3000/knjige/" + id).pipe(
      map((data: any) => this.createKnjigaSaKategorijom(data)),
    );
  }


  getKategorija(id: number): Observable<Kategorija> {
    return this.http.get("http://localhost:3000/kategorije/" + id).pipe(
      map((data: any) => this.createKategorija(data)),
    );
  }

  getNazivKategorije(id: number): Observable<string> {
    return this.http.get("http://localhost:3000/kategorije/" + id).pipe(
      map((data: any) => data.kategorija),
    );
  }

  getKnjigeKategorija(id: number): Observable<Knjiga[]> {
    return this.http.get<any>("http://localhost:3000/knjige?kategorijeId=" + id)
      .pipe(map((data: any) => data.map((item: any) =>
        this.createKnjige(item))
      ))
  }



  upisiPorudzbinu(porudzbina: Porudzbina): Observable<Porudzbina> {
    return this.http.post("http://localhost:3000/porudzbine", porudzbina)
      .pipe(map((data: any) => this.createPorudzbina(data)),)
  }

  upisiStavkuPorudzbine(stavka: Stavka): Observable<Stavka> {
    return this.http.post("http://localhost:3000/stavke", stavka)
      .pipe(map((data: any) => this.createStavka(data)),)
  }


  






  createKnjigaSaKategorijom(item: any): Knjiga {

    let knjiga = new Knjiga(item.naziv, item.autor, item.opis, item.pismo, item.povez, item.strana, item.stanje, item.slikaUrl, item.kategorijeId, item.cena);
    knjiga.id = item.id;

    this.getNazivKategorije(item.kategorijeId).subscribe(res => knjiga.kategorija = res);


    return knjiga;
  }


  createKategorija(item: any): Kategorija {
    let kategorija = new Kategorija(item.kategorija);
    kategorija.id = item.id;
    return kategorija;
  }

  createKnjige(item: any): Knjiga {
    let knjiga = new Knjiga(item.naziv, item.autor, item.opis, item.pismo, item.povez, item.strana, item.stanje, item.slikaUrl, item.kategorijeId, item.cena);
    knjiga.id = item.id;
    return knjiga;
  }

  createKorisnik(item: any): Korisnik {
    let korisnik = new Korisnik(item.username, item.email, item.password, item.admin);
    korisnik.id = item.id;
    return korisnik;
  }


  createPorudzbina(item: any): Porudzbina {
    let porudzbina = new Porudzbina(item.korisniciId, item.datumKreiranja, item.ime, item.prezime, item.grad, item.adresa, item.zip, item.brTelefona)
    porudzbina.id = item.id;
    console.log(porudzbina.id);
    return porudzbina;
  }

  createStavka(item: any): Stavka {
    let stavka = new Stavka(item.knjigeId, item.brPrimeraka, item.porudzbineId)
    stavka.id = item.id;
    return stavka;
  }





}
