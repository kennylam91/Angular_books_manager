import { Component, OnInit } from '@angular/core';
import {IBook} from '../Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  private books: IBook[];
  constructor() { }

  ngOnInit() {
  }

}
