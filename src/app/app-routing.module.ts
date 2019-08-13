import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';


const routes: Routes = [
  {
    path: 'books', component: BookListComponent,
  },
  {path: 'book/create', component: BookCreateComponent},
  {
    path: 'book/edit/:id', component: BookEditComponent
  },
  {
    path: 'book/delete/:id', component: BookDeleteComponent
  },
  {
    path: 'book/:id', component: BookDetailComponent
  },
  {
    path: '**', redirectTo: '/books', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
