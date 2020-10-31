"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("./client");
var clientType_1 = require("./clientType");
var contact_1 = require("./contact");
var details_1 = require("./details");
var Droit_1 = require("./Droit");
var droittype_1 = require("./droittype");
var entreprise_1 = require("./entreprise");
var individu_1 = require("./individu");
var option_1 = require("./option");
var produit_1 = require("./produit");
var produitDroit_1 = require("./produitDroit");
var faker = require('faker');
var fs = require('fs');
var conteurClient = 0;
function client_indiv() {
    var client = new Array();
    var clients;
    for (var index = 0; index < 5; index++) {
        clients = new individu_1.Individu();
        clients.nom = faker.name.lastName();
        clients.prenom = faker.name.firstName();
        clients.type = clientType_1.ClientType.individu;
        clients.adresse = faker.address.streetAddress();
        clients.id = conteurClient;
        conteurClient++;
        clients.email = faker.internet.email();
        clients.droit = droitx();
        client.push(clients);
    }
    return client;
}
function client_client() {
    var client = new Array();
    var clients;
    for (var index = 0; index < 5; index++) {
        clients = new client_1.Client();
        clients.adresse = faker.address.streetAddress();
        clients.id = conteurClient;
        conteurClient++;
        clients.droit = droitx();
        client.push(clients);
    }
    return client;
}
function client_entreprise() {
    var entreprise = new Array();
    var entreIndiv;
    for (var index = 0; index < 5; index++) {
        entreIndiv = new entreprise_1.Entreprise();
        entreIndiv.nom = faker.name.lastName();
        entreIndiv.type = clientType_1.ClientType.entreprise;
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
function details() {
    var details = new details_1.Details;
    details.province = faker.address.country();
    details.rue = faker.address.streetName();
    details.ville = faker.address.city();
    return details;
}
function contacts() {
    var contacts = new contact_1.Contact();
    contacts.prenom = faker.name.firstName();
    contacts.email = faker.internet.email();
    contacts.nom = faker.name.lastName();
    return contacts;
}
function droitx() {
    var droit = new Array;
    var droits;
    var iteration = Math.floor(Math.random() * Math.floor(5)) + 1;
    for (var index = 0; index < iteration; index++) {
        droits = new Droit_1.Droit();
        droits.idDroit = faker.random.number();
        droits.dateFin = faker.date.future();
        droits.dateDebut = faker.date.past();
        if (index % 3 == 0) {
            droits.type = droittype_1.DroitType.Droit_01;
        }
        else if (index % 3 == 1) {
            droits.type = droittype_1.DroitType.Droit_02;
        }
        else {
            droits.type = droittype_1.DroitType.Droit_03;
        }
        droit.push(droits);
    }
    return droit;
}
function produitx() {
    var produit = new Array;
    var produits;
    for (var index = 0; index < 5; index++) {
        produits = new produit_1.Produit();
        produits.description = faker.commerce.productDescription();
        produits.nom = faker.commerce.productName();
        produits.id = faker.random.number();
        produits.option = options();
        produit.push(produits);
    }
    return produit;
}
function options() {
    var options = new option_1.Option();
    options.description = faker.commerce.productDescription();
    options.id = faker.random.number();
    options.nom = faker.commerce.productName();
    return options;
}
function produit_droit() {
    var produit = produitx();
    var droit = droitx();
    var droitProd = new Array;
    var droitsProd;
    for (var index = 0; index < 5; index++) {
        droitsProd = new produitDroit_1.ProduitDroit();
        droitsProd.droit = droit[Math.floor(Math.random() * Math.floor(5))];
        droitsProd.produit = produit[Math.floor(Math.random() * Math.floor(5))];
        droitProd.push(droitsProd);
    }
    return droitProd;
}
function client_Groupe() {
    var clientGroup = new Array;
    var indexCLient = 0;
    var indexIndiv = 0;
    var indexEntre = 0;
    var tabClient = client_client();
    var tabIndiv = client_indiv();
    var tabEntre = client_entreprise();
    for (var i = 0; i <= 14; i++) {
        if (i % 3 == 0) {
            clientGroup[i] = tabClient[indexCLient];
            indexCLient++;
        }
        else if (i % 3 == 1) {
            clientGroup[i] = tabIndiv[indexIndiv];
            indexIndiv++;
        }
        else {
            clientGroup[i] = tabEntre[indexEntre];
            indexEntre++;
        }
    }
    return clientGroup;
}
fs.writeFileSync('../json/produit_droit.json', JSON.stringify(produit_droit(), null, '\t'));
fs.writeFileSync('../json/client_Groupe.json', JSON.stringify(client_Groupe(), null, '\t'));
