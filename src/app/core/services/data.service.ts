import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export interface Dishes {
  name: string,
  type: string,
  ingredients: Array<string>,
  isVegetarian: boolean,
  calories: number
}


@Injectable({
  /**К классу применяется декоратор @Injectable, 
   * который гарантирует, что встроенный механизм внедрения зависимостей сможет создать объект этого класса и передать его в качестве зависимости в другой объект (в другой сервис или компонент). */
  providedIn: 'root'
})

export class DataService {
    constructor(private http: HttpClient) { }//Для отправки запросов сервис получает объект HttpClient.

    getExampleData() : Observable<Array<Dishes>> {
        return this.http.get<Array<Dishes>>('assets/data1.json')//метод http.get() возвращает объект Observable<Object>
          .pipe(
            catchError(err => {//Для перехвата ошибок, которые могут возникнуть при выполнении запроса
                console.log(err);//выводим в логи ошибку
                return of([]);
            })
          )
      }

}

/**
 * Метод pipe позволяет применять несколько операторов последовательно к данным полученным из запроса. 
 * Для взаимодействия с сервером и отправки запросов по протоколу http применяется класс HttpClient. Этот класс определяет ряд методов для отправки различного рода запросов: GET, POST, PUT, DELETE. Данный класс построен поверх стандартного объекта в JavaScript - XMLHttpRequest.
 */