import { Client } from "./client";

 
export class Entreprise extends Client{
    phone: string;
    nom:string;
    fax: string;

    constructor(){
        super();
        this.nom = undefined;
        this.phone = undefined;
        this.fax = undefined;
        this.id = undefined;
        this.type = undefined;
        this.adresse = undefined;
    }
}