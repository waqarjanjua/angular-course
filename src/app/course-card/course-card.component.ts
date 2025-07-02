import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    Inject,
    QueryList,
    ViewEncapsulation,
    Self,
    SkipSelf,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Attribute
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CoursesService } from '../services/courses.service';
//import { ChangeDetectionStrategy } from '@angular/compiler';
//import { COURSES_SERVICE } from '../app.module';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    providers: [
        CoursesService
    ],    
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(@SkipSelf() private courseService : CoursesService, @Attribute('type') private type : string,
private cd:ChangeDetectorRef)
    {
        console.log('type : '+type);
    }


    //   constructor(@Inject(COURSES_SERVICE) private courseService : CoursesService
    // ) {

    // }

    ngOnInit() {
            console.log("course card"+this.courseService.id);
    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }

    onTitleChanged(newTitle:string)
    {
        this.course.description = newTitle;
     
    }




}
