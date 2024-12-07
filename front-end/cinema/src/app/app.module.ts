
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './admin/category/category.component';
import { MovieComponent } from './admin/movie/movie.component';
import { UpdateShhowComponent } from './admin/adminUpdate/update-shhow/update-shhow.component';
import { CategoryUpdateComponent } from './admin/category/category-update/category-update.component'
import { withComponentInputBinding } from '@angular/router';
import { UpdateMovieComponent } from './admin/movie/update-movie/update-movie.component';
import { ShowTvComponent } from './admin/show-tv/show-tv.component';
import { UpdateShowTvComponent } from './admin/show-tv/update-show-tv/update-show-tv.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { DetailsShowTvComponent } from './details-show-tv/details-show-tv.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    ShowsComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    CategoryComponent,
    MovieComponent,
   UpdateShhowComponent,
   CategoryUpdateComponent,
   UpdateMovieComponent,
   ShowTvComponent,
   UpdateShowTvComponent,
   DetailsMovieComponent,
   DetailsShowTvComponent,
   NotfoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
