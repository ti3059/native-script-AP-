import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
@Injectable()
export class DataService {

    subjectPersonne = new Subject<any>();
    
    Personnes = [
        {nom : 'toto', prenom : 'tata'},
        {nom : 'titi', prenom : 'minet'},
    ]

    produits = [
        {label : 'p1', prix : 10},
        {label : 'p2', prix : 10},
    ]
    editIndex = undefined;
}
