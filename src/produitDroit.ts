import { Droit } from "./Droit";
import { Produit } from "./produit";

export class ProduitDroit{
    droit: Droit;
    produit: Produit;

    constructor(){
        this.droit = undefined;
        this.produit = undefined;
    }
}