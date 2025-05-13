import {  ContentChild, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, output, ElementRef, ContentChildren, AfterContentInit, QueryList, TemplateRef } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

@Input()
noImageTpl: TemplateRef<any>;
  

  @Input({
    required:true
  })
  course: Course;

  @Input({
    required: true
  })
  index: number;

  // @ContentChild('courseImage')
  // image:any;

  @ContentChild(CourseImageComponent, {read:ElementRef})
  image:ElementRef;

  @ContentChildren(CourseImageComponent)
  images:CourseImageComponent;

  // @ContentChildren(CourseImageComponent, {read:ElementRef})
  // images: QueryList<ElementRef>;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {}
  ngAfterContentInit() {
    console.log(this.images);
  }
  ngAfterViewInit() {
    console.log(this.image);
  }

  ngOnInit() {}  

  isImageVisible()
  {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed()
  {
    console.log("Card component Button clicked");
    this.courseSelected.emit(this.course);
  }

  cardClasses()
  {
    if(this.course.category == "BEGINNER")
      return ['beginner'];    
  }

  cardStyles()
  {
    return {'text-decoration':'underline'};
  }
}
