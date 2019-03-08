import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {


//public imageUrl = "http://sdcollege.in/wp-content/uploads/2016/06/courses.jpg";
public imageUrl = '../../../../assets/courses.jpg';

courseName = 'The Full Stack Web Development';
imageAlt = this.courseName;
rating: string;
constructor() {
  this.rating = '80%';
 }
  ngOnInit() {
  }

}
