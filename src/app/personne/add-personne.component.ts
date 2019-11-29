import { DataService } from '../data.service';
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'AddPersonne',
    templateUrl: 'add-personne.component.html'
})
export class AddPersonneComponent {
    nom;
    prenom;

    constructor(private data: DataService) {
        this.data.subjectPersonne.subscribe((x) => {
            this.nom = x;
        })
    }

    addPersonne() {
        this.data.Personnes.push({ nom: this.nom, prenom: this.prenom });
        this.nom = "";
        this.prenom = "";
    }
}
