import { ProduitPanierComponent } from './panier/produit-panier.component';
import { PanierComponent } from './panier/panier.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { FormProduitComponent } from './produit/form-produit.component';
import { ListeProduitsComponent } from './produit/liste-produits.component';
import { AddPersonneComponent } from './Personne/add-personne.component';
import { ListePersonnesComponent } from './Personne/liste-personne.component';
import { DataService } from './data.service';
import { ProduitComponent } from './produit/produit.component';
import { PersonneComponent } from './Personne/personne.component';
import { GuardService } from '../guard.service';
import { LoginComponent } from './login/login.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaquinComponent } from './taquin/taquin.component';
import { Route } from '@angular/router';

const routes : Array<Route> = [
    {path : "", component : ListeProduitsComponent},
    {path : "formProduit", component : FormProduitComponent},
    {path : "formProduit/:id", component : FormProduitComponent,canActivate:[GuardService]},
    {path : "panier", component : PanierComponent},
    {path : "panier/:id", component : PanierComponent},
    {path : "login", component : LoginComponent},
]


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        PersonneComponent,
        TaquinComponent,
        ProduitComponent,
        ListePersonnesComponent,
        AddPersonneComponent,
        ListeProduitsComponent,
        FormProduitComponent,
        PanierComponent,
        ProduitPanierComponent,
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers : [DataService,
        GuardService]

})
export class AppModule { }
