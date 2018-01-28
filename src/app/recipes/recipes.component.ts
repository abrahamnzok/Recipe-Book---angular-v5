import { Component, OnInit } from '@angular/core';
import {Recipes} from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipes[] = [
    new Recipes('Rands Fried Chicken', 'Your recipe description goes here', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipes('Mom\'s World Famous Banana Bread', 'This classic banana bread recipe comes from my mom -- the walnuts add a nice texture and flavor to the banana bread', 'http://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/11/chocolate-banana-pancake-breakfast-casserole/x.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
