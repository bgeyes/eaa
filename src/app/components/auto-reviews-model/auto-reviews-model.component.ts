import { ReviewsService } from './../../services/reviews.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'auto-reviews-model',
  templateUrl: './auto-reviews-model.component.html',
  styleUrls: ['./auto-reviews-model.component.css']
})
export class AutoReviewsModelComponent implements OnInit, OnDestroy {
  
  private routeSub: any;
  slug: string;
  make: string;
  models;

  constructor(private route: ActivatedRoute, service: ReviewsService) {
    //this.models = service.getModel(this.slug);
   }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      //console.log(params)
      this.slug = params['slug'];
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }

}
