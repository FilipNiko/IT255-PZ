import { Knjiga } from "./knjiga";

export class GrupaKnjiga {
    knjiga: Knjiga;
    broj: number;



    constructor(knjiga: Knjiga, broj: number) {
        this.knjiga = knjiga;
        this.broj = broj;


    }
}