import {AfterViewInit, Component, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {observable, Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';
import { COURSES_SERVICE } from './app.module';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';


// function coursesServiceProvider(http: HttpClient) : CoursesService
// {
//   return new CoursesService(http);
// }

// export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
    providers:[
      {
        provide: CONFIG_TOKEN,
        useFactory: () => APP_CONFIG
      }
    ]
    // providers:[
    //   {
    //   provide:COURSES_SERVICE, 
    //   useFactory:coursesServiceProvider,
    //    deps: [HttpClient]
    //   }
    // ]
})
export class AppComponent implements OnInit, DoCheck {

courses$ :Observable<Course[]>;

  //courses = COURSES;

  courses : Course[];
  //courses;

  // constructor(@Inject(COURSES_SERVICE) private courseService:CoursesService) {

  // }

    constructor(private courseService:CoursesService, @Inject(CONFIG_TOKEN) private config: AppConfig,
  private cd:ChangeDetectorRef) {
        console.log(config.apiUrl);
  }
  ngDoCheck() {
    console.log("ngdocheck");
    if(this.courses)
    {
    this.cd.markForCheck();
    }
  }

  // to check tree shakeable DI
//   constructor(private courseService:CoursesService) {
//     //console.log(config.apiUrl);
// }

  ngOnInit() {

    console.log(this.courseService);
    // const params = new HttpParams()
    //               .set("page","1")
    //               .set("pageSize","10");

    // // this.http.get('/api/courses',{params})
    // //     .subscribe(
    // //       courses => this.courses = courses
    // //     );
    //  this.courses$ = this.http.get<Course[]>('/api/courses',{params});
    // console.log("In App components! "+this.courseService.id);
    //this.courses$ = this.courseService.loadCourses();
    this.courseService.loadCourses().subscribe(
      courses => {
        this.courses = courses;
        
      }
    );
    //console.log(this.courses$);
  }

  save(course:Course)
  {

    
    this.courseService.saveCourses(course)
                      .subscribe()
                      {
                        () => console.log("Course saved!");
                      };
  }

  onEditCourse()
  {
    //this.courses[0].description = 'New value!';
    const course = this.courses[0];
    const newCourse:any = {...course};
    newCourse.description = "New Value!";
    this.courses[0] = newCourse;
  }

}
