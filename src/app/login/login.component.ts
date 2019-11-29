import { Component } from "@angular/core";
import { DataService } from "../data.service";
import { setBoolean } from "tns-core-modules/application-settings";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
    selector: "HoLoginme",
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    login;
    password;

    constructor(private data:DataService,private router:RouterExtensions) {
    }
    logIn(){
        let logged = false;
        for (let u of this.data.users){
            if(u.login == this.login && u.password == this.password){
                setBoolean('isLogged', true);
                logged =true;
                break
            }
        }
        if(logged){
            this.router.navigate(['/']);
        }else{
            console.log("Erreur");
        }
    }
  
}
