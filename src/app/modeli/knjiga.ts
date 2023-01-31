export class Knjiga {
    id: number;
    naziv: string;
    autor: string;
    opis: string;
    pismo: string;
    povez: string;
    strana: string;
    stanje: number;
    slikaUrl: string;
    kategorijeId: number;
    kategorija: string;
    cena: number;


    constructor(naziv: string, autor: string, opis: string, pismo: string, povez: string, strana: string, stanje: number, slikaUrl: string, kategorijeId: number, cena: number ) {
        this.naziv = naziv;
        this.autor = autor;
        this.opis = opis;
        this.pismo = pismo;
        this.povez = povez;
        this.strana = strana;
        this.stanje = stanje;
        this.slikaUrl = slikaUrl;
        this.kategorijeId = kategorijeId;
        this.cena = cena;

    }
}