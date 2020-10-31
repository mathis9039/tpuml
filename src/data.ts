import { Client } from "./client";
import { ClientType } from "./clientType";
import { Contact } from "./contact";
import { Details } from "./details";
import { Droit } from "./Droit";
import { DroitType } from "./droittype";
import { Entreprise } from "./entreprise";
import { Individu } from "./individu";
import { Option } from "./option";
import { Produit } from "./produit";
import { ProduitDroit } from "./produitDroit";

const faker = require('faker');
const fs = require('fs');
var conteurClient: number = 0;

function client_indiv(){
    var client:Array<Individu> = new Array();
    var clients:Individu;
    for (let index = 0; index < 5; index++) {
        clients = new Individu();
        clients.nom = faker.name.lastName();
        clients.prenom = faker.name.firstName();
        clients.type = ClientType.individu;
        clients.adresse = faker.address.streetAddress();
        clients.id = conteurClient;
        conteurClient++;
        clients.email = faker.internet.email();
        clients.droit = droitx();
        client.push(clients);
    }
    return client;
}

function client_client(){
    var client:Array<Client> = new Array();
    var clients:Client;
    for (let index = 0; index < 5; index++) {
        clients = new Client();
        clients.adresse = faker.address.streetAddress();
        clients.id = conteurClient;
        conteurClient++;
        clients.droit = droitx();
        client.push(clients);
    }
    return client;
}

function client_entreprise(){
    var entreprise:Array<Entreprise> = new Array();
    var entreIndiv:Entreprise;
    for (let index = 0; index < 5; index++) {
        entreIndiv = new Entreprise();
        entreIndiv.nom = faker.name.lastName();
        entreIndiv.type = ClientType.entreprise;
        entreIndiv.adresse = faker.address.streetAddress();
        entreIndiv.id = conteurClient;
        conteurClient++;
        entreIndiv.phone = faker.phone.phoneNumber();
        entreIndiv.fax = faker.phone.phoneNumber();
        entreIndiv.details = details();
        entreIndiv.contact = contacts();
        entreIndiv.droit = droitx();
        entreprise.push(entreIndiv);
    }
    return entreprise;
}

function details(){
    var details:Details = new Details;
    details.province = faker.address.country();
    details.rue = faker.address.streetName();
    details.ville = faker.address.city();
    return details;
}

function contacts(){
    var contacts:Contact = new Contact();
    contacts.prenom = faker.name.firstName();
    contacts.email = faker.internet.email();
    contacts.nom = faker.name.lastName();
    return contacts;
}

function droitx(){
    var droit:Array<Droit> = new Array;
    var droits:Droit;
    var iteration:number = Math.floor(Math.random() * Math.floor(5)) +1;
    for (let index = 0; index < iteration; index++) {
        droits = new Droit();
        droits.idDroit = faker.random.number();
        droits.dateFin = faker.date.future();
        droits.dateDebut = faker.date.past();
        if(index % 3 == 0){
            droits.type = DroitType.Droit_01;
        }
        else if (index %3 == 1){
            droits.type = DroitType.Droit_02;
        }
        else {
            droits.type = DroitType.Droit_03;
        }
        droit.push(droits);
    }
    return droit;
}

function produitx(){
    var produit:Array<Produit> = new Array;
    var produits:Produit;
    for (let index = 0; index < 5; index++) {
        produits = new Produit();
        produits.description = faker.commerce.productDescription();
        produits.nom = faker.commerce.productName();
        produits.id = faker.random.number();
        produits.option = options();
        produit.push(produits);
    }
    return produit;
}

function options(){
    var options:Option = new Option();
        options.description = faker.commerce.productDescription();
        options.id = faker.random.number();
        options.nom = faker.commerce.productName();
        return options;
}

function produit_droit(){
    var produit:Array<Produit> = produitx();
    var droit:Array<Droit> = droitx();
    var droitProd:Array<ProduitDroit> = new Array;
    var droitsProd:ProduitDroit;
    for (let index = 0; index < 5; index++) {
        droitsProd = new ProduitDroit();
        droitsProd.droit = droit[Math.floor(Math.random() * Math.floor(5))];
        droitsProd.produit = produit[Math.floor(Math.random() * Math.floor(5))];
        droitProd.push(droitsProd);
    }
    return droitProd;
}

function client_Groupe(){
    var clientGroup: Array<Client> = new Array;
    var indexCLient: number = 0;
    var indexIndiv: number = 0;
    var indexEntre: number = 0;
    var tabClient: Array<Client> = client_client();
    var tabIndiv: Array<Client> = client_indiv();
    var tabEntre: Array<Client> = client_entreprise();
    for (let i = 0; i <= 14; i++){
        if (i % 3 == 0) {
            clientGroup[i] = tabClient[indexCLient];
            indexCLient++
        }

        else if (i % 3 ==1){
            clientGroup[i] = tabIndiv[indexIndiv];
            indexIndiv++
        }

        else{
            clientGroup[i] = tabEntre[indexEntre];
            indexEntre++
        }
    }
    return clientGroup;
}

fs.writeFileSync('../json/produit_droit.json', JSON.stringify(produit_droit(), null, '\t'));
fs.writeFileSync('../json/client_Groupe.json', JSON.stringify(client_Groupe(), null, '\t'));
