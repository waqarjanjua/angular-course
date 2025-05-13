import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit, AfterContentInit {

  courses = COURSES;
  mainCourse = COURSES[0];
  secCourse = COURSES[1];
  optCourse = COURSES[3];

  // @ViewChild(CourseCardComponent)
  // card: CourseCardComponent

@ViewChildren(CourseCardComponent)
cards: QueryList<CourseCardComponent>;

  @ViewChild('cardref1',{read:ElementRef})
  card1: CourseCardComponent

  @ViewChild('cardref2')
  card2: CourseCardComponent

  @ViewChild('container')
  containerdiv: ElementRef



constructor()
{
  //console.log('container div',this.containerdiv); 
}
  ngAfterContentInit() 
  {
    
  }



  ngAfterViewInit() {
    //console.log(this.image);
    // console.log('container div',this.containerdiv); 

    // this.courses[0].description = "modify data";
    //console.log(this.cards.first);

    // this.cards.changes.subscribe(
    //   cards => console.log(cards)
    // );
  }

  onEditCourse()
{
  this.courses.push(
    {
      id: 1,
      description: "Angular Core Deep Dive",
      iconUrl:'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: 'INTERMEDIATE',
      lessonsCount: 10
  }
  );
}


   startDate=new Date(2000,1,1);
  title = COURSES[0].description;
  price= 12.1250;

  onCourseSelected(course: Course)
  {
    //console.log("App component Button clicked ... ",course);
    console.log('container',this.containerdiv);
    console.log('card1',this.card1);
  }

  trackCourse(index:number,course:Course)
  {
    return course.id;
  }

}
