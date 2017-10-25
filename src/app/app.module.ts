import { UserService } from './services/user.service';
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
import { UserComponent } from './components/users/user/user.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserNewComponent } from './components/users/user-new/user-new.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';

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
    HomeComponent,
    UserComponent,
    UserDetailsComponent,
    UserListComponent,
    UserNewComponent,
    UserEditComponent
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
    ReviewsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
