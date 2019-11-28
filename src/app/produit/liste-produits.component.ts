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

    GoToAddProduct() {
        this.monRouter.navigate(['/formProduit'])
    }

    GoToCart()
    {
        this.monRouter.navigate(['/panier']);
    }
}
