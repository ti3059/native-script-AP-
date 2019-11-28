import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId : module.id,
    selector : 'cart',
    templateUrl : "cart-produits.component.html"
})

export class CartProduitsComponent {
    produits = [];
    constructor(private data:DataService, private monRouter : Router, private routeExtension : RouterExtensions, private maRoute:ActivatedRoute){
        this.produits = this.data.produits;
    }   
}
