import { Component, OnInit } from '@angular/core';
import { ShowService } from '../service/show.service';
import { APP_CONFIG } from '../../config';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
//onInit est interface
shows: any[] = [];
root_media_uri : string = APP_CONFIG.root_media_uri;


constructor(private showService: ShowService) {}

  // ngOnInit(): void { //methode dechlencher le traitment au depart de l'excution de component 
    
  // }
  ngOnInit() {
    this.loadShows();
    
  }

  loadShows() {
    this.showService.getShows().subscribe(data => {
      this.shows = data;
      console.log(data);
    });
  }

  
  showMore: boolean = false; //attribut

  toggleText(): void { //methode 
    this.showMore = !this.showMore;
  }
}
