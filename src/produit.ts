import { Option } from "./option";

export class Produit{
    id: number;
    nom: string;
    description: string;
    option:Option;

    constructor(){
        this.nom = undefined;
        this.id = undefined;
        this.description = undefined;
        this.option = undefined;
    }
}