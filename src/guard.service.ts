import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { getBoolean } from "tns-core-modules/application-settings/application-settings";

@Injectable()
export class GuardService implements CanActivate {


    constructor(private router: RouterExtensions) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if(!getBoolean("isLogged")){
            this.router.navigate(['/login']);
            return false;
        }
      
        return true;
    }

}