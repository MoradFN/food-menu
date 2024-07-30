import { Component, OnInit } from '@angular/core';
import { FoodCategoryService } from '../services/food/foodCategory.service';
import { CommonModule } from '@angular/common';
import { FoodCategoryModel } from '../shared/models/FoodCategoryModel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  foodCategories: FoodCategoryModel[] = [];

  constructor(private FoodCategoryService: FoodCategoryService) {}

  ngOnInit(): void {
    this.foodCategories = this.FoodCategoryService.getAll();
  }
}
