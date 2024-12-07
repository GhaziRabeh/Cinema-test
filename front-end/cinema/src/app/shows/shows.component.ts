import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../../config';
import { ActivatedRoute } from '@angular/router';
import { ShowTvServiceService } from '../service/show-tv-service.service';

@Component({
  selector: 'app-shows',
  standalone: false,
  
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.css'
})
export class ShowsComponent implements OnInit{
 
  categoryId: string | undefined;
  showTv: any[] = [];
  root_showtv_uri : string = APP_CONFIG.root_showTv_uri;



  showMore: boolean = false;

constructor(private route: ActivatedRoute, private showtvservice:ShowTvServiceService){}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
      console.log('Category ID:', this.categoryId);
      this.loadShowTv();
    });
  }
  loadShowTv() {
    if (this.categoryId) {
     
      this.showtvservice.getShowTvByCategory(this.categoryId).subscribe(
        (dataMovie: any) => {
          this.showTv = dataMovie.movies;
          console.log('Movies for category: ', dataMovie.movies);
        },
        (error) => {
          console.error('Error fetching movies by category:', error);
        }
      );
    } else {
      // Fetch all movies if no categoryId
      this.showtvservice.getShowTv().subscribe(
        (dataMovie: any) => {
          this.showTv = dataMovie.movies;
          console.log('All Movies: ', dataMovie.movies);
        },
        (error) => {
          console.error('Error fetching all movies:', error);
        }
      );
    }
  }
  
  



  toggleText(): void {
    this.showMore = !this.showMore;
  }
}
