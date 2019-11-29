import { Component, Input } from "@angular/core";
import { DataService } from "../data.service";

@Component({
    moduleId: module.id,
    selector: 'personne',
    templateUrl: 'personne.component.html'
})
export class PersonneComponent {
    @Input() nom: String;
    @Input() prenom: String;
    @Input() age: Number;
    personnes = [];
    constructor(private data: DataService) { }
    clickNom(e) {
        //alert(e.object.text);
        this.nom = "new name"
    }
    ajouterPersonne() {
        this.personnes.push({ nom: this.nom, prenom: this.prenom });
        this.nom = "";
        this.prenom = "";
    }

    testSubject() {
        this.data.subjectPersonne.next(this.nom);
    }
}
