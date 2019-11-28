import { FormProduitComponent } from './produit/form-produit.component';
import { ListeProduitsComponent } from './produit/liste-produits.component';
import { AddPersonneComponent } from './Personne/add-personne.component';
import { ListePersonnesComponent } from './Personne/liste-personne.component';
import { DataService } from './data.service';
import { ProduitComponent } from './produit/produit.component';
import { PersonneComponent } from './Personne/personne.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaquinComponent } from './taquin/taquin.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        //AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PersonneComponent,
        TaquinComponent,
        ProduitComponent,
        ListePersonnesComponent,
        AddPersonneComponent,
        ListeProduitsComponent,
        FormProduitComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers : [DataService]
})
export class AppModule { }
