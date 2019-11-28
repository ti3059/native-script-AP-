import { Component, ViewChild, ElementRef } from "@angular/core";
import {Label}  from "tns-core-modules/ui/label"
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout"
import {Button} from "tns-core-modules/ui/button"
import {GridLayout, ItemSpec, GridUnitType} from "tns-core-modules/ui/layouts/grid-layout"

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls:["app.component.css"]
})

export class AppComponent {
    listePersonnes = [
        {nom : "ILSKI", prenom : "Theo"},
        {nom : "PINHAL", prenom : "Nicolas"},
    ]

    @ViewChild('stack1', {read:ElementRef, static: false},) stack: ElementRef;

    isButton = false;

    addElement(){
        /*let ourStackLayout = <StackLayout>this.stack.nativeElement;
        if(this.isButton){
            let b = new Button();
            b.text = "button added dynamically";
            ourStackLayout.addChild(b);
        }
        else{
            let l = new Label()
            l.text = "Label dynamique";
            ourStackLayout.addChild(l);
        }
        this.isButton = !this.isButton;*/
        let g = new GridLayout();
        g.addColumn(new ItemSpec(1, GridUnitType.STAR));
        g.addColumn(new ItemSpec(2, GridUnitType.STAR));
    }
}


