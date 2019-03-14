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
import { CourseEnrollmentComponent } from './courses-description/course-enrollment/course-enrollment.component';
import { CoursesAvailedComponent } from './courses-description/courses-availed/courses-availed.component';
import { RelatedCoursesComponent } from './courses-description/related-courses/related-courses.component';
import { CourseDetailsComponent } from './courses-description/course-details/course-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { CourseCategoryComponent } from './courses/course-category/course-category.component';
import { AllCoursesComponent } from './courses/all-courses/all-courses.component';

@NgModule({
  declarations: [
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
    AboutComponent,
    CourseEnrollmentComponent,
    CoursesAvailedComponent,
    RelatedCoursesComponent,
    CourseDetailsComponent,
    CategoriesComponent,
    CourseCategoryComponent,
    AllCoursesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
