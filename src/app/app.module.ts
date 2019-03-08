import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { CoursesComponent } from './home/courses/courses.component';
import { CourseComponent } from './home/courses/course/course.component';
import { HCategoriesComponent } from './home/h-categories/h-categories.component';
import { HCategoryComponent } from './home/h-categories/h-category/h-category.component';
import { HNumbersComponent } from './home/h-numbers/h-numbers.component';
import { HNumberComponent } from './home/h-numbers/h-number/h-number.component';
import { HomeAboutusComponent } from './home/home-aboutus/home-aboutus.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BannerComponent, CoursesComponent, CourseComponent, HCategoriesComponent, HCategoryComponent, HNumbersComponent, HNumberComponent, HomeAboutusComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
