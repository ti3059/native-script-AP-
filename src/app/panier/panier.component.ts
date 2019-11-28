import { DataService } from './../data.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId : module.id,
    selector : 'panier',
    templateUrl : 'panier.component.html'
})
export class PanierComponent {
    produitsPanier = [];
    total = 0;
    constructor(private data:DataService, private route:ActivatedRoute)
    {
        this.produitsPanier = this.data.produitsPanier;
        if(this.route.snapshot.params['id'])
        {
            let index = this.route.snapshot.params['id'];
            this.AddToCart(index);
            this.total = this.calculeTotal();
        }
    }

    calculeTotal()
    {
        let total = 0;
        for(let produit of this.produitsPanier)
        {
            total += produit.prix * produit.qty;
        }
        return total;
    }

    AddToCart(index) {

        let found = false;
        for(let produit of this.produitsPanier)
        {
            if(produit.index == index)
            {
                produit.qty++;
                found = true;
                break;
            }
        }
        if(found == false)
        {
            this.produitsPanier.push ({
                index : index,
                label : this.data.produits[index].label,
                prix : this.data.produits[index].prix,
                qty : 1
            })
        }
    }
}
