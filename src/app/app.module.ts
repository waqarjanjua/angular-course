import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursesService } from './services/courses.service';

// export function coursesServiceProvider(http: HttpClient) : CoursesService
// {
//   return new CoursesService(http);
// }

 export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');


@NgModule({ declarations: [
        AppComponent,
        CourseCardComponent,
        CourseImageComponent,
        HighlightedDirective,
        NgxUnlessDirective,
        
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
    {
      provide: CoursesService,
      //useFactory: coursesServiceProvider,
      deps: [HttpClient]
    }
  ],
    bootstrap: [AppComponent], imports: [BrowserModule,HttpClientModule,
        BrowserAnimationsModule], //providers: [provideHttpClient(withInterceptorsFromDi())],
     })
export class AppModule { 

  constructor(private coursesService: CoursesService)
  {

  }
}
