import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  AllCourses: number = 0;
  FreeCourses: number = 0;
  PremiumCourses: number = 0;

}
