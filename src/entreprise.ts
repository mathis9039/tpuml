import { Client } from "./client";
import { Contact } from "./contact";
import { Details } from "./details";

 
export class Entreprise extends Client{
    phone: string;
    nom:string;
    fax: string;
    details: Details;
    contact:Contact;

    constructor(){
        super();
        this.nom = undefined;
        this.phone = undefined;
        this.fax = undefined;
        this.id = undefined;
        this.type = undefined;
        this.adresse = undefined;
        this.contact= new Contact();
        this.details = new Details();
    }
}