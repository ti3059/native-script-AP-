import { DataService } from './../data.service';
import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector : 'produit-panier',
    templateUrl: 'produit-panier.component.html'
})
export class ProduitPanierComponent {

    @Input() label;
    @Input() prix;
    @Input() qty;
    @Input() index;

    constructor(private data:DataService)
    {

    }

    moin(index)
    {
        this.data.updateQty.next({qty:-1, index:index});
    }
    plus(index)
    {
        this.data.updateQty.next({qty:1, index:index});
    }
 }
