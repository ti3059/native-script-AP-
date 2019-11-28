//update taquin.component.ts

import { ElementRef } from '@angular/core';
import { Button } from 'tns-core-modules/ui/button';
import { Component, ViewChild } from '@angular/core';
import { GridLayout, ItemSpec, GridUnitType } from 'tns-core-modules/ui/layouts/grid-layout/grid-layout';
@Component({
    moduleId : module.id,
    selector : 'taquin',
    templateUrl : 'taquin.component.html',
    styleUrls : ['taquin.component.css']
})
export class TaquinComponent {
    lettres = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H'];
    chainWin = "ABCDEFGH";
    @ViewChild("grid", {read:ElementRef, static:false}) grid:ElementRef;
    merge(){
        for(let i=0; i < this.lettres.length; i++)
        {
            let random = Math.floor(Math.random() * this.lettres.length);
            let tmp = this.lettres[i];
            this.lettres[i] = this.lettres[random];
            this.lettres[random] = tmp;
        }
    }

    start()
    {
        //recuperer notre gridLayout
        let g = <GridLayout>this.grid.nativeElement;
        //supprimer les columns
        g.removeColumns();
        //supprimer les rows
        g.removeRows();
        //supprimer les enfants
        g.removeChildren();

        //ajouter 3 lignes et 3 columns
        for(let i=0 ; i < 3; i++)
        {
            g.addColumn(new ItemSpec(1, GridUnitType.STAR));
            g.addRow(new ItemSpec(1, GridUnitType.STAR));
        }
        let x = 0;
        let y = 0;
        this.merge();
        //ajouter les buttons
        for(let c of this.lettres)
        {
            let b = new Button();
            b.on('tap',(e) => {this.clickButton(e)});
            b.text = c;
            b.col = y;
            b.row = x;
            b.backgroundColor = "#cd2127";
            b.width = 100;
            b.height = 100;
            b.borderColor = "#0f0b0b";
            b.borderWidth = 3;
            if((y+1)%3 == 0)
            {
                x++;
                y=0;
            }
            else {
                y++;
            }
            g.addChild(b);
        }

    }

    clickButton(event) {
        let r = parseInt(event.object.row);
        let c = parseInt(event.object.col);
        if(this.checkIfEmpty(r, c+1) &&  c < 2)
        {
            event.object.col = c +1;
        }
        else if(this.checkIfEmpty(r, c-1) && c > 0)
        {
            event.object.col = c - 1;
        }
        else if(this.checkIfEmpty(r+1, c) && r < 2)
        {
            event.object.row = r +1;
        }
        else if(this.checkIfEmpty(r-1, c) && r > 0)
        {
            event.object.row = r - 1;
        }
        this.checkWin();
    }

    checkIfEmpty(r, c) {
        let g = <GridLayout>this.grid.nativeElement;
        let vide = true;
        g.eachChild((element) => {
            if(element.row == r && element.col == c)
            {
                vide = false;
            }
            return vide;
        });
        return vide;
    }

    checkWin(){
        let chaine = "";
        let g = <GridLayout>this.grid.nativeElement;
        for(let i =0; i < g.getChildrenCount(); i++){
            let e = <Button>g.getChildAt(i);
            chaine += e.text;
        }
        if(chaine==this.chainWin){
            alert("Bravo");
        }
    }
}
