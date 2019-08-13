import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookCreateForm: FormGroup;

  constructor(private bookService: BookService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.bookCreateForm = this.formBuilder.group({
      title: [''],
      author: [''],
      description: ['']
    });
  }

  createBook() {
    if (this.bookCreateForm.valid) {
      const {value} = this.bookCreateForm;
      this.bookService.createBook(value)
        .subscribe(next => {
          this.bookService.bookList.push(next);
          this.bookCreateForm.reset({
            title: '',
            author: '',
            description: ''
          });
          this.router.navigateByUrl('/books');
        });
    }
  }
}
