export class FoodCategoryModel {
  id: number;
  name: string;
  description: string;
  cookingTime: string;
  tags: string[];
  imageUrl: string;
  constructor(
    id: number,
    name: string,
    description: string,
    cookingTime: string,
    tags: string[] = [],
    imageUrl: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.cookingTime = cookingTime;
    this.tags = tags;
    this.imageUrl = imageUrl;
  }
}
