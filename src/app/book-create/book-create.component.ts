import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookCreateForm: FormGroup;

  constructor(private bookService: BookService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.bookCreateForm = this.formBuilder.group({
      title: [''],
      author: [''],
      description: ['']
    });
  }

}
