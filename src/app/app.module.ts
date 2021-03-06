import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { rootReducer } from './store/reducers/root.reducer';
import { BookComponent } from './components/book/book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AppRoutingModule } from './app-routing.module';
import { BookAddComponent } from './components/book-add/book-add.component';
import { EffectsModule } from '@ngrx/effects';
import { BookEffect } from './store/effects/book.effect';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentAddComponent } from './components/comment-add/comment-add.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentEffect } from './store/effects/comment.effects';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BookComponent,
    BookDetailsComponent,
    BookAddComponent,
    BookEditComponent,
    FavoritesComponent,
    CommentAddComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([BookEffect,CommentEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
