export class Recipe {
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(recipeName: string, desc: string, img: string) {
    this.name = recipeName;
    this.description = desc;
    this.imagePath = img;
  }
}
