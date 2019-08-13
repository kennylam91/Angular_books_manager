import {Component, OnInit} from '@angular/core';
import {IBook} from '../Book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  private books: IBook[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe(next => {
        this.bookService.bookList = next;
        this.books = next;
      })
    ;
  }

}
