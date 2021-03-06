import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostFormComponent } from './post-details/post-form/post-form.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, PostDetailsComponent, PostFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
