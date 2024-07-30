import { Injectable } from '@angular/core';
import { FoodCategoryModel } from '../../shared/models/FoodCategoryModel';

@Injectable({
  providedIn: 'root',
})
export class FoodCategoryService {
  constructor() {}

  getAll(): FoodCategoryModel[] {
    return [
      new FoodCategoryModel(
        1,
        'Alacarte',
        'Alacarte meny med alla rätter. Varje kategori har sin egen meny.',
        ['Alacarte'],
        'images/foods/food-category-images/alacartem.png'
      ),
      new FoodCategoryModel(
        2,
        'Falafel',
        'Falafel meny med alla rätter. Varje kategori har sin egen meny.',
        ['Falafel'],
        'images/foods/food-category-images/Falafel.png'
      ),
      new FoodCategoryModel(
        3,
        'Gyros',
        'Gyros meny med alla rätter. Varje kategori har sin egen meny.',
        ['Gyros'],
        'images/foods/food-category-images/Gyroshem.jpg'
      ),
      new FoodCategoryModel(
        4,
        'Hamburgare',
        'Hamburgare meny med alla rätter. Varje kategori har sin egen meny.',
        ['Hamburgare'],
        'images/foods/food-category-images/Hamburgare.png'
      ),
      new FoodCategoryModel(
        5,
        'Kebab',
        'Kebab meny med alla rätter. Varje kategori har sin egen meny.',
        ['Kebab'],
        'images/foods/food-category-images/Kebab.png'
      ),
      new FoodCategoryModel(
        6,
        'Kyckling',
        'Kyckling meny med alla rätter. Varje kategori har sin egen meny.',
        ['Kyckling'],
        'images/foods/food-category-images/kycklingkort2.jpg'
      ),
      new FoodCategoryModel(
        7,
        'Pizza',
        'Pizza meny med alla rätter. Varje kategori har sin egen meny.',
        ['Pizza'],
        'images/foods/food-category-images/Pizzahem.jpg'
      ),
      new FoodCategoryModel(
        8,
        'Sallad',
        'Sallad meny med alla rätter. Varje kategori har sin egen meny.',
        ['Sallad'],
        'images/foods/food-category-images/Salladhem.jpg'
      ),
    ];
  }
}
