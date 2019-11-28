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
 }
