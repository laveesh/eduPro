import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactIconComponent } from './shared/contact-icon/contact-icon.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDescriptionComponent } from './courses-description/courses-description.component';
import { ForumComponent } from './forum/forum.component';
import { CoursePreviewComponent } from './course-preview/course-preview.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './home/banner/banner.component';
import { HomeAboutusComponent } from './home/home-aboutus/home-aboutus.component';
import { HCategoryComponent } from './home/h-categories/h-category/h-category.component';
import { HCategoriesComponent } from './home/h-categories/h-categories.component';
import { HNumberComponent } from './home/h-numbers/h-number/h-number.component';
import { HNumbersComponent } from './home/h-numbers/h-numbers.component';
import { HomeCourseComponent } from './home/home-courses/home-course/home-course.component';
import { HomeCoursesComponent } from './home/home-courses/home-courses.component';

@NgModule({
  declarations: [
    HomeCourseComponent,
    HomeCoursesComponent,
    HNumberComponent,
    HNumbersComponent,
    HomeAboutusComponent,
    HCategoryComponent,
    HCategoriesComponent,
    BannerComponent,
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactIconComponent,
    LoginComponent,
    UserDashboardComponent,
    CoursesComponent,
    CoursesDescriptionComponent,
    ForumComponent,
    CoursePreviewComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
