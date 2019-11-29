import { DataService } from './../data.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getString, setString } from 'tns-core-modules/application-settings';
@Component({
    moduleId: module.id,
    selector: 'panier',
    templateUrl: 'panier.component.html'
})
export class PanierComponent {
    produitsPanier = [];
    total = 0;
    constructor(private data: DataService, private route: ActivatedRoute) {


        this.produitsPanier = (getString("panier")) ? JSON.parse(getString("panier")) : this.data.produitsPanier;
        this.total = this.calculeTotal();
        if (this.route.snapshot.params['id']) {
            let index = this.route.snapshot.params['id'];
            this.AddToCart(index);
            this.total = this.calculeTotal();
            setString("panier", JSON.stringify(this.produitsPanier));
        }

        //Vérification de la quantité de produit lors de la construction du composent . 
        this.data.updateQty.subscribe(o => {

            if (o.qty == 1) {
                this.AddToCart(o.index);

            }
            else if (o.qty == -1) {
                this.removeFromCart(o.index);

            }
            setString("panier", JSON.stringify(this.produitsPanier));
            this.total = this.calculeTotal();
        })
    }

    calculeTotal() {
        let total = 0;
        for (let produit of this.produitsPanier) {
            total += produit.prix * produit.qty;
        }
        return total;
    }
    removeFromCart(index) {
        // booleen verification présence de l'article dans la liste
        let indexFound = undefined;

        for (let produit of this.produitsPanier) {
            if (produit.index == index) {
                if (produit.qty > 1) {
                    produit.qty--;
                }
                else {
                    indexFound = index;
                }
                break;
            }
        }

        if (indexFound != undefined) {
            this.produitsPanier.splice(this.produitsPanier.findIndex(x => x.index == indexFound), 1);
        }
    }
    AddToCart(index) {

        let found = false;
        for (let produit of this.produitsPanier) {
            if (produit.index == index) {
                produit.qty++;
                found = true;
                break;
            }
        }
        if (found == false) {
            this.produitsPanier.push({
                index: index,
                label: this.data.produits[index].label,
                prix: this.data.produits[index].prix,
                qty: 1
            })
        }
    }
}
