export class Porudzbina {
    id: number;
    korisniciId: number;
    datumKreiranja: string;
    ime: string;
    prezime: string;
    grad: string;
    adresa: string;
    zip: number;
    brTelefona: number;
    status: string;

    constructor(korisniciId: number, datumKreiranja: string, ime: string, prezime: string, grad: string, adresa: string, zip: number, brTelefona: number, status:string) {
        this.korisniciId = korisniciId;
        this.datumKreiranja = datumKreiranja;
        this.ime = ime;
        this.prezime = prezime;
        this.grad = grad;
        this.adresa = adresa;
        this.zip = zip;
        this.brTelefona = brTelefona;
        this.status = status;
    }
}