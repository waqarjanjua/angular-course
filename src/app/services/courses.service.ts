import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

let counter = 0;

@Injectable(
  {
    providedIn: 'root',
    //useClass: CoursesService
    //useFactory: (http) => new CoursesService(http),
    //deps: [HttpClient]
  }
)

export class CoursesService {
  id : number;
  constructor(private http: HttpClient) { 
    counter++;
    this.id = counter;
    //console.log("Creating course service "+counter);
  }

  loadCourses() : Observable<Course[]>{
    //     const params = new HttpParams()
    //               .set("page","1")
    //               .set("pageSize","10");
    //  return this.http.get<Course[]>('/api/courses',{params});
      // const params = new HttpParams()
      //             .set("page","1")
      //             .set("pageSize","10");
      // console.log("In load CourseService Loadcourses method");
      // console.log(this.http.get<Course[]>('/api/courses'));
     return this.http.get<Course[]>('http://localhost:9000/api/courses');
  }

  saveCourses(course: Course)
  {
    const headers = new HttpHeaders()
                    .set("X-Auth","userId");

      return this.http.put(`/api/courses/${course.id}`,course,{headers});
  }
}
