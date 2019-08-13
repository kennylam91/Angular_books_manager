import {Component, OnInit} from '@angular/core';
import {IBook} from '../Book';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: IBook = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };
  sub: Subscription;

  constructor(private bookService: BookService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.getBookById(Number(id))
        .subscribe(next => {
          this.book = next;
          console.log(this.book);
        });
    });
  }

}
