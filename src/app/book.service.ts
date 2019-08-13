import {Injectable} from '@angular/core';
import {IBook} from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookList: IBook[];
  private readonly API_URL = 'http://localhost:3000/books';


  constructor() {
  }
}
