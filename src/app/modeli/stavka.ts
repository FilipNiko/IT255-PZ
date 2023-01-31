export class Stavka{
    id: number;
    porudzbineId: number;
    knjigeId: number;
    brPrimeraka: number;

    constructor(knjigeId: number, brPrimeraka: number, porudzbineId: number){
        this.knjigeId= knjigeId;
        this.brPrimeraka= brPrimeraka;
        this.porudzbineId= porudzbineId;
    }
}