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
import { UdCompletedCoursesComponent } from './user-dashboard/ud-completed-courses/ud-completed-courses.component';
import { UdOverdueCoursesComponent } from './user-dashboard/ud-overdue-courses/ud-overdue-courses.component';
import { UdCardsComponent } from './user-dashboard/ud-cards/ud-cards.component';
import { UdQuizesComponent } from './user-dashboard/ud-quizes/ud-quizes.component';
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
    UdCompletedCoursesComponent,
    UdOverdueCoursesComponent,
    UdCardsComponent,
    UdQuizesComponent,
    CategoriesComponent,
    CourseCategoryComponent,
    AllCoursesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
