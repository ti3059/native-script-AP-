import { DataService } from './../data.service';
import { Component } from "@angular/core";

@Component({
    moduleId : module.id,
    selector : 'ListeProduits',
    templateUrl : 'liste-produits.component.html'
})
export class ListeProduitsComponent {
    produits = [];

    constructor(private data:DataService)
    {
        this.produits = this.data.produits;
        this.data.subjectIndexProductToDelete.subscribe(index=>{
            this.data.produits.splice(index,1);
            this.produits = this.data.produits;
        })
    }
}
