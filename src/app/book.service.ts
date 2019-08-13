import {Injectable} from '@angular/core';
import {IBook} from './Book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookList: IBook[];
  private readonly API_URL = 'http://localhost:3000/books';


  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.API_URL);
  }

  getBookById(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.API_URL}/${id}`);
  }
}
