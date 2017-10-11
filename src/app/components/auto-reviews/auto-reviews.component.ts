import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auto-reviews',
  templateUrl: './auto-reviews.component.html',
  styleUrls: ['./auto-reviews.component.css']
})
export class AutoReviewsComponent implements OnInit {
  modelsList = [
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
  ]
  constructor() { }

  ngOnInit() {
  }

}
