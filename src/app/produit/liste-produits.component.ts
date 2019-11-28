import { Label } from 'tns-core-modules/ui/label';
import { DataService } from './../data.service';
import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    moduleId : module.id,
    selector : 'ListeProduits',
    templateUrl : 'liste-produits.component.html'
})
export class ListeProduitsComponent {
    produits = [];

    constructor(private data:DataService, private monRouter:Router)
    {
        this.produits = this.data.produits;
        this.data.subjectIndexProductToDelete.subscribe(index=> {
            this.data.produits.splice(index,1);
            this.produits = this.data.produits;
        })
    }

    GoToAddProduct(){
        this.monRouter.navigate(["/formProduit"]);
    }

    GoToCart(){
        let produitsSortis = [];
        for(let p in this.produits){
            if((<any>p).label)
        }
        console.dir(this.produits);
        this.monRouter.navigate(["/cart"]);
    }
}
