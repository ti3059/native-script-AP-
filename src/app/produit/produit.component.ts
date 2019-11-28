import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { DataService } from './../data.service';
import {Input} from "@angular/core";

@Component({
    moduleId : module.id,
    selector : 'produit',
    templateUrl : 'produit.component.html',
    styleUrls : ['produit.component.css']
})
export class ProduitComponent {
    @Input()label;
    @Input()prix;
    @Input() index;

    constructor(private data:DataService, private router:RouterExtensions)
    {

    }
    edit(index)
    {
       //this.data.subjectIndexProductToEdit.next(index);
       this.router.navigate(['/formProduit',index])
    }
    delete(index)
    {
        this.data.subjectIndexProductToDelete.next(index);
    }
    addToCart(index)
    {
        this.router.navigate(['/panier', index]);
    }
}
