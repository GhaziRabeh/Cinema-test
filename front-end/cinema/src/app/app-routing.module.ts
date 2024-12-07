import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './admin/category/category.component';
import { MovieComponent } from './admin/movie/movie.component';
import { UpdateShhowComponent } from './admin/adminUpdate/update-shhow/update-shhow.component';
import { CategoryUpdateComponent } from './admin/category/category-update/category-update.component';
import { UpdateMovieComponent } from './admin/movie/update-movie/update-movie.component';
import { ShowTvComponent } from './admin/show-tv/show-tv.component';
import { UpdateShowTvComponent } from './admin/show-tv/update-show-tv/update-show-tv.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { DetailsShowTvComponent } from './details-show-tv/details-show-tv.component';
import { authGuard } from './routeGuarde/auth.guard';
import { adminGuard } from './routeGuarde/admin.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canDeactivate: [authGuard] },
  { path: 'register', component: RegisterComponent, canDeactivate: [authGuard] },
 

  { path: 'category/:categoryId/showstv', component: ShowsComponent, canActivate: [authGuard] },
  { path: 'category/:categoryId/movies', component: MoviesComponent, canActivate: [authGuard] },
  {
    path: 'movie/details/:id',
    component: DetailsMovieComponent,
    canActivate: [authGuard],
  },
  {
    path: 'showtv/details/:categoryId/:id',
    component: DetailsShowTvComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/dashboard',
    component: AdminComponent,
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'admin/movie',
    component: MovieComponent,
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'admin/categories',
    component: CategoryComponent,
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'admin/dashboard/update/:id',
    component: UpdateShhowComponent,
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'admin/dashboard/category/update/:id',
    component: CategoryUpdateComponent,
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'admin/movie',
    component: MovieComponent,
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'admin/category/:categoryId/movies',
    component: MoviesComponent,
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'admin/category/:categoryId/showstv',
    component: ShowsComponent,
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'admin/movie/update/:id',
    component: UpdateMovieComponent,
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'admin/showtv',
    component: ShowTvComponent,
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'admin/showsTv/update/:id',
    component: UpdateShowTvComponent,
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard, adminGuard],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
