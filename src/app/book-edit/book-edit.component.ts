import {Component, OnInit} from '@angular/core';
import {IBook} from '../Book';
import {ActivatedRoute, ParamMap, RouterLinkActive} from '@angular/router';
import {Subscription} from 'rxjs';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: IBook;
  sub: Subscription;
  bookUpdateForm: FormGroup;

  constructor(private activeRoute: ActivatedRoute, private bookService: BookService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.bookUpdateForm = this.formBuilder.group({
      title: [''],
      author: [''],
      description: ['']
    });
    this.sub = this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.getBookById(Number(id))
        .subscribe(next => {
          this.book = next;
          this.bookUpdateForm.patchValue(next);
        });
    });
  }

}
