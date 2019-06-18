import { Component, OnInit } from '@angular/core';
import {Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('recipe_name','recipe_desc','https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg'),
    new Recipe('recipe_name2','recipe_desc2','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFIa8EsnW3ipVtVPBZkYAt4n3Gj-znNuyl7yrmoebbYYmRPSt'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
