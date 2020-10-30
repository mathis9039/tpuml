import { ClientType } from "./clientType";
import { Droit } from "./Droit";

export class Client{
    id: number;
    type: ClientType;
    adresse: string;
    droit: Array<Droit>

    constructor(){
        this.id= undefined;
        this.type= undefined;
        this.adresse = undefined;
        this.droit  = undefined;
    }
}