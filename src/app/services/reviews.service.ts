import { Injectable } from '@angular/core';

@Injectable()
export class ReviewsService {

  getModels() {
    return [
      {
        model: "Mercedes",
        slug: "merc"
      },
      {
        model: "BMW",
        slug: "bmw"
      },
      {
        model: "Audi",
        slug: "audi"
      }
    ];
  }

  constructor() { }

}
