import { ReviewsService } from './services/reviews.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//third party imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { AutoReviewsComponent } from './components/auto-reviews/auto-reviews.component';
import { AutoReviewsModelComponent } from './components/auto-reviews-model/auto-reviews-model.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {
      path: "",
      component: HomeComponent
  },
  {
      path: "reviews",
      component: AutoReviewsComponent
  },
  {
      path: "reviews/:slug",
      component: AutoReviewsModelComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AutoReviewsComponent,
    AutoReviewsModelComponent,
    HomeComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    ReviewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
