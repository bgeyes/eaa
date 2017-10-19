import { ReviewsService } from './../../services/reviews.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auto-reviews',
  templateUrl: './auto-reviews.component.html',
  styleUrls: ['./auto-reviews.component.css']
})
export class AutoReviewsComponent implements OnInit {
  makeList;
  //modelsList;
  //selectedMake;

  constructor(service: ReviewsService) {
     this.makeList = service.getMake();
  }

  ngOnInit() {

  }

}
