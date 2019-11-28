import { DataService } from './../data.service';
import { Component, Input } from '@angular/core';
@Component({
    moduleId : module.id,
    selector : 'produit',
    templateUrl : 'produit.component.html',
    styleUrls : ['produit.component.css']
})
export class ProduitComponent {
    @Input()label;
    @Input() prix;
    @Input() index;

    constructor(private data:DataService)
    {

    }
    edit(index)
    {
       this.data.editIndex = index;
    }
    delete(index)
    {

    }

}
