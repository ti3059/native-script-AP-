import { Component, ElementRef, ViewChild } from "@angular/core";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import {GridLayout, ItemSpec, GridUnitType} from "tns-core-modules/ui/layouts/grid-layout";
import { Label } from "tns-core-modules/ui/label";
import { Button } from "tns-core-modules/ui/button";
@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ['app.component.css']
})
export class AppComponent {
    listePersonnes = [
        { nom: "abadi", prenom: "ihab" },
        { nom: "toto", prenom: "tata" },
    ]

    isButton = false;

    //@ViewChild("stack1", {read:ElementRef, static:false}) stack: ElementRef
    @ViewChild("stack1", {static:false}) stack: ElementRef

    addElement() {
        let ourStackLayout = <StackLayout>this.stack.nativeElement;
        // if (this.isButton) {
        //     let b = new Button();
        //     b.text = "button added dynamically";
        //     ourStackLayout.addChild(b);
        // }
        // else {
        //     let l = new Label();
        //     l.text = "Label dynamic";
        //     ourStackLayout.addChild(l);
        // }
        // this.isButton = !this.isButton;
        let g = new GridLayout();
        g.addColumn(new ItemSpec(1, GridUnitType.STAR));
        g.addColumn(new ItemSpec(2, GridUnitType.STAR));
    }
}
