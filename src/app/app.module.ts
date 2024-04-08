import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {Routes,RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ShowNameComponent } from './pages/show-name/show-name.component';
import { confirmInGuard } from './core/guards/confirm-in.guard';
import { confirmOutGuard } from './core/guards/confirm-out.guard';
import { DataService } from './core/services/data.service';
import { ItalicDirective } from './core/directive/italic.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReversePipe } from './core/pipes/reverse.pipe';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

const appRoutes: Routes =[
  {path: '', component: Page1Component},
  {path: 'page2', component: Page2Component, canActivate:[confirmInGuard]},
  {path: 'page3', component: Page3Component, canDeactivate: [confirmOutGuard]},
  { path: 'show-name/:name', component: ShowNameComponent },
  {path: '**', component: NotfoundComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    NotfoundComponent,
    ShowNameComponent,
    ItalicDirective,
    ReversePipe,//lab 5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  //providers: [DataService],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
