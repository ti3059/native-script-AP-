import { DataService } from './../data.service';
import { Component } from "@angular/core";

@Component({
    moduleId : module.id,
    selector : 'FormProduit',
    templateUrl : "form-produit.component.html"
})
export class FormProduitComponent {
    label = '';
    prix = '';
    editIndex = undefined;
    constructor(private data:DataService){}

    valid()
    {
        if(this.editIndex == undefined)
        {
            this.data.produits.push({
                label : this.label,
                prix : parseInt(this.prix)
            })
        }
        this.label = '';
        this.prix = "";
    }
}
