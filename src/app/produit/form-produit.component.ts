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
    constructor(private data:DataService)
    {
        this.data.subjectIndexProductToEdit.subscribe((index) => {
            this.editIndex = index;
            this.label = this.data.produits[index].label;
            this.prix = this.data.produits[index].prix.toString();
        })
    }

    valid()
    {
        if(this.editIndex == undefined)
        {
            this.data.produits.push({
                label : this.label,
                prix : parseInt(this.prix)
            })
        }
        else {
            this.data.produits[this.editIndex].label = this.label;
            this.data.produits[this.editIndex].prix = parseInt(this.prix);
            this.editIndex = undefined;
        }
        this.label = '';
        this.prix = "";
    }
}
