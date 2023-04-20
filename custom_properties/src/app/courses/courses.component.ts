import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
courses =[
  {id:101,name:'Javascript for beginners', author:'john dave', duration:48, type:'Free',
  price:0.00, ratings:3.5, image:'assets/courses/course-image-1.jpeg', description:'In this course you will learn the fundamentals of javascript. this course purely designed for beginners'
},
{id:102,name:'Java for beginners', author:'john dave', duration:88, type:'premium',
  price:129.00, ratings:4.5, image:'assets/courses/course-image-2.jpeg', description:'In this course you will learn the fundamentals of java. this course purely designed for advance knowledge'
},
{id:103,name:'python for beginner', author:'Parth Patel', duration:68, type:'free',
  price:0.00, ratings:4.5, image:'assets/courses/course-image-3.jpeg', description:'In this course you will learn the fundamentals of Python. this course purely designed for beginners'
},
{id:104,name:'React for beginner', author:'Helly Patel', duration:108, type:'free',
  price:0.00, ratings:4.5, image:'assets/courses/course-image-2.webp', description:'In this course you will learn the fundamentals of React. this course purely designed for beginners'
},
{id:105,name:'CSS for beginner', author:'john dave', duration:108, type:'premium',
  price:130.00, ratings:3.5, image:'assets/courses/course-image-5.png', description:'In this course you will learn the fundamentals of CSS. this course purely designed for beginners'
},
{id:106,name:'Go pro for beginner', author:'john dave', duration:108, type:'free',
  price:0.00, ratings:4.5, image:'assets/courses/course-image-6.jpeg', description:'In this course you will learn the fundamentals of Go lang. this course purely designed for beginners'
},
{id:107,name:'Selenium for beginner', author:'john dave', duration:108, type:'premium',
  price:150.00, ratings:4.5, image:'assets/courses/course-image-7.jpeg', description:'In this course you will learn the fundamentals of Selenium. this course purely designed for beginners'
},
{id:108,name:'Azure dev ops for beginner', author:'john dave', duration:108, type:'free',
  price:0.00, ratings:4.5, image:'assets/courses/course-image-8.png', description:'In this course you will learn the fundamentals of Azure dev ops. this course purely designed for beginners'
}
]
}
