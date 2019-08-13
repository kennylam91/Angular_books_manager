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

  createBook(book: Partial<IBook>): Observable<IBook> {
    return this.http.post<IBook>(this.API_URL, book);
  }

  updateBook(book: IBook): Observable<IBook> {
    return this.http.patch<IBook>(`${this.API_URL}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<IBook> {
    return this.http.delete<IBook>(`${this.API_URL}/${id}`);
  }

}
