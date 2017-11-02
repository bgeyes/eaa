import { UsersService } from './services/user.service';
import { ReviewsService } from './services/reviews.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

//import { routing }        from './app.routing';
 
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service'
//import { LoginComponent } from './login/index';
//import { HomeComponent } from './home/index';

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
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { 
      path: 'login', 
      component: LoginComponent 
  },
  { 
      path: '', 
      component: HomeComponent, 
      canActivate: [AuthGuard] 
  },

  // otherwise redirect to home
  /* { 
      path: '**', 
      redirectTo: '' 
  }, */
  /* {
      path: "",
      component: HomeComponent
  }, */
  {
      path: "users",
      component: UserComponent,
      canActivate: [AuthGuard]
  },
  {
      path: "reviews",
      component: AutoReviewsComponent,
      canActivate: [AuthGuard]
  },
  {
      path: "reviews/:slug",
      component: AutoReviewsModelComponent,
      canActivate: [AuthGuard]
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
    UserEditComponent,
    LoginComponent
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
    AuthGuard,
    AuthenticationService,
    UsersService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
