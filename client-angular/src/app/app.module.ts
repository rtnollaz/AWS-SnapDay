import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { ProjectDisplayComponent } from './project-display/project-display.component';
import { SnapDayComponent } from './components/snap-day/snap-day.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [AppComponent, ProjectDisplayComponent, SnapDayComponent, HomeComponent, SignupComponent, LoginComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'signup',
        component:SignupComponent
      },
      {
        path: 'post',
        component:PostComponent
      },
    ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
