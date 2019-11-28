import { DataService } from './../data.service';
import { Component } from '@angular/core';

@Component({
    moduleId :module.id,
    selector : 'ListePersonne',
    templateUrl : 'liste-personne.component.html'
})
export class ListePersonnesComponent
{
    listePersonnes = [];

    constructor(private data:DataService)
    {
        this.listePersonnes = this.data.Personnes;
    }
}
