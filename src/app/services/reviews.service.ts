import { Injectable } from '@angular/core';

@Injectable()
export class ReviewsService {

  getMake() {
    return [
      {
        id: 1,
        model: "Mercedes",
        slug: "merc"
      },
      {
        id: 2,
        model: "BMW",
        slug: "bmw"
      },
      {
        id: 3,
        model: "Audi",
        slug: "audi"
      }
    ]
  };

  /* getModel(model) {
    if (model == 'merc') {
      return [
        {
          id: 1,
          model: 'C-Klasee'
        },
        {
          id: 2,
          model: 'A-Klasse'
        },
        {
          id: 3,
          model: 'E-Klasse'
        }
      ]
    }
    else if (model == 'bmw') {
      return [
        {
          id: 1,
          model: '3 series'
        },
        {
          id: 2,
          model: '5 series'
        },
        {
          id: 3,
          model: '7 series'
        }
      ]
    }
    else if (model == 'audi') {
      return [
        {
          id: 1,
          model: 'a3'
        },
        {
          id: 2,
          model: 'a4'
        },
        {
          id: 3,
          model: 'a8'
        }
      ]
    }
  }; */

  constructor() { }

}
