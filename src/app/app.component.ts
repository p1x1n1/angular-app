import { Component, OnInit,OnDestroy, OnChanges, DoCheck,AfterContentChecked,AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { User } from './pages/page1/page1.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent //implements OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit 
{
  title = 'digital-department-application';
  usersData: User[] = [];
  receiveUserData(userData1: any): void {
    this.usersData.push(userData1);
  }
  greeting = "";
  /*
  ngDoCheck(): void {
    console.log('Проверим изменение!');
  }
  ngAfterContentInit(): void{ 
    console.log('Инициализированы все вложенные компоненты'); 
  }
  ngAfterContentChecked(): void{ 
    console.log('Проверили значение'); 
  }
  ngAfterViewInit(): void{ 
    console.log('Шаблон компонента иницализирован'); 
  }
  ngAfterViewChecked(): void{ 
    console.log('Проверка на изменения в шаблоне компонента'); 
  }
  ngOnDestroy(): void{ 
    console.log('ну пока'); 
  }
  */
  onSayHi(): void {
    alert("Привет, " + this.greeting);
  }
}
