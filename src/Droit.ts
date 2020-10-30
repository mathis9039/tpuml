import { DroitType } from "./droittype";

export class Droit{
    idDroit: string;
    type: DroitType;
    dateDebut: Date;
    dateFin: Date;

    constructor(){
        this.type = undefined;
        this.idDroit = undefined;
        this.dateFin = undefined;
        this.dateDebut = undefined;
    }
}