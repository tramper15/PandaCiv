export class Recourse {
  public food: number;
  public wood: number;
  constructor() {
    this.food = 0;
    this.wood = 0;
  }


  addFood() {
    this.food += 1;
  }
  addWood() {
    this.wood += 1;
  }
}
