import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from './service/category-service.service';
import { Category } from './model/category';
import { MovieServiceService } from './service/movie-service.service';
import { UserServiceService } from './UserService/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'cinema';
  menuOpen = false;
  dropdownOpen = false;
  Category: any[] = [];
  dropdownOpenMovies: boolean = false;
  dropdownOpenShow: boolean = false;
  showtv: any[] = [];
  searchResults: any[] = [];

  constructor(
    private categoryService: CategoryServiceService,
    private movieService: MovieServiceService,
    public userservice: UserServiceService,
    public router: Router,
    private route: Router) {}

  ngOnInit() {
    if (
      !this.userservice.isLoggedIn() &&
      ['register', 'login'].indexOf(this.route.url) != -1
    ) {
      this.route.navigate(['/login']);
      return;
    }
     this.loadCategory();
     this.loadMovie();
  }

  loadCategory() {
    this.categoryService.getCategory().subscribe((dataCategory) => {
      this.Category = dataCategory;
      console.log(dataCategory);
    });
  }

  toggleDropdown() {
    this.dropdownOpenMovies = !this.dropdownOpenMovies;
  }

  toggleDropdownShow() {
    this.dropdownOpenShow = !this.dropdownOpenShow;
  }
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  loadMovie() {
    this.movieService.getMovie().subscribe(
      (data: any) => {
        this.showtv = data.movies;
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
  onSearchSubmit(event: Event) {
    event.preventDefault();

    console.log('Form submitted');
  }

  getMovieSearch(event: any): void {
    const keyword = event.target.value;
    this.searchMovies(keyword);
  }

  searchMovies(query: string = ''): void {
    this.movieService.searchMovies(query).subscribe(
      (data: any) => {
        this.searchResults = data;
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }
}
