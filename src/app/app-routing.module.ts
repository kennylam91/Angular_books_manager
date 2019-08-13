import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookCreateComponent} from './book-create/book-create.component';


const routes: Routes = [
  {
    path: 'books', component: BookListComponent,
  },
  {
    path: 'book/:id', component: BookDetailComponent
  },
  {path: 'book/create', component: BookCreateComponent},
  {path: '**', redirectTo: '/books', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
