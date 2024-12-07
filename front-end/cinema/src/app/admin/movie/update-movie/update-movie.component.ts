

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MovieServiceService } from '../../../service/movie-service.service';
import { APP_CONFIG } from '../../../../config';
import { Movies } from '../../../model/movie';
import { Category } from '../../../model/category';
import { CategoryServiceService } from '../../../service/category-service.service';

@Component({
  selector: 'app-update-movie',
  standalone: false,
  
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.css'
})
export class UpdateMovieComponent implements OnInit{

  root_movie_uri: string = APP_CONFIG.root_movie_uri;
  movie = new Movies()

  categories: any [] = [];
  category = new Category
  id!: number;
  imageFile: File | null = null; 

constructor( private routerBack: Router, 
  private router: ActivatedRoute
,private movieService : MovieServiceService,
private categoryService : CategoryServiceService){}


  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = parseInt(idParam, 10);
      }
      this.getCategory();
      this.getMovie();
    });
  }


  getCategory() {
    this.categoryService.getCategory().subscribe((data: any[]) => {
      this.categories = data; 
    });
  }
  getMovie() {
    this.movieService.getMovieById(this.id).subscribe((data) => {
      this.movie = data;
    });
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file; 
      console.log('File selected:', file.name); 
    }
}
updateMovie() {
  const formData = new FormData();

  
  formData.append('name', this.movie.name);
  formData.append('description', this.movie.description);

 
  if (this.movie.category_id) {
    formData.append('category_id', this.movie.category_id.toString());
  }

  
  if (this.movie.image) {
    formData.append('image', this.movie.image);
  }

  
  this.movieService.updateMovie(this.id, formData).subscribe(
    (data) => {
      console.log('Movie updated successfully', data);
      this.routerBack.navigate(['/admin/movie']);
    },
    (error) => {
      console.error('Error updating movie', error);
    }
  );
}

}
