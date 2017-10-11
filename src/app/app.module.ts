import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AutoReviewsComponent } from './components/auto-reviews/auto-reviews.component';
import { AutoReviewsModelComponent } from './components/auto-reviews-model/auto-reviews-model.component';

const appRoutes: Routes = [
  {
      path: "",
      component: AutoReviewsComponent
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
    AutoReviewsModelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
