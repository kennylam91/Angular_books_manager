import {Component, OnInit} from '@angular/core';
import {IBook} from '../Book';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: IBook;
  sub: Subscription;

  constructor(private bookService: BookService, private router: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.getBookById(Number(id))
        .subscribe(next => {
          this.book = next;
        });
    });
  }

  deleteBook() {
    this.bookService.deleteBook(this.book.id).subscribe(
      () => {
        this.router.navigateByUrl('/books');
      });
  }
}
