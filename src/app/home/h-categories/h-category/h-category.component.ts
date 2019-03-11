import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'h-category',
  templateUrl: './h-category.component.html',
  styleUrls: ['./h-category.component.scss']
})
export class HCategoryComponent implements OnInit {

  constructor() { }
  categoryName = 'Software Development';
  ngOnInit() {
  }

}
