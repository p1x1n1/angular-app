import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter, map } from 'rxjs';
import { DataService, Dishes } from 'src/app/core/services/data.service';

export class User{
  constructor(
    public name: string,
    public age: number,
    public surname:string )
  {  }
}
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  @Output() userData = new EventEmitter<any>();
  users: User[] =[];
  name='';
  surname='';
  age=0;


  dishes: Dishes[]=[];
  constructor(private dataService: DataService) {
   
  }
  ngOnInit(): void{
    this.dataService.getExampleData()
    .pipe(
      filter(d => d !== null),//rxjs
      map((data:any) => {
        let dishes = data["dishes"];//используя данный ключ, мы достаем нужные данные из ответа сервера:
        return dishes.map((dish:any) : Dishes => ({...dish,name: "Блюдо: " + dish.name}))}//обработка данных запроса
      ),

    )
    .subscribe((data: Array<Dishes>) => {
      this.dishes = data;
      console.log(data)});//подп
  }
  addUser() {
    this.users.push(new User(this.name, this.age, this.surname));
    this.name = '';
    this.surname = '';
    this.age = 0;
  }
  onNameChange():void{
    console.log('Что-то изменилось в форме'+this.name);
    this.userData.emit(this.users);
  }
}
/**Реактивная форма - форму необходиму объявить как форм группу объявляем все поля поштучно */
