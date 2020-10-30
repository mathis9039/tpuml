import { Client } from "./client";
import { Option } from "./option";
import { Produit } from "./produit";

export class CodeBare{
    id: number;
    code: string;
    produit: Array<Produit>;
    option: Array<Option>;
    client: Client;

    constructor(){
        this.id = undefined;
        this.code = undefined;
        this.produit = undefined;
        this.option = undefined;
        this.client = undefined;
    }
}