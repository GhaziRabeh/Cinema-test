
import { UpdateShhowComponent } from './adminUpdate/update-shhow/update-shhow.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ShowService } from '../service/show.service';
import { APP_CONFIG } from '../../config';
import { Show } from '../model/showModel';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  shows: any[] = [];
  show = new Show ()
 
  imageFile: File | null = null;  
  root_media_uri : string = APP_CONFIG.root_media_uri;



  constructor(private showService: ShowService , private router : Router) {}

  ngOnInit() {
    this.loadShows();
  }

  loadShows() {
    this.showService.getShows().subscribe(data => {
      this.shows = data;
      console.log(data);
    });
  }

  onSaveShow() {
    const formData = new FormData();
    formData.append('title', this.show.title );
    formData.append('description', this.show.description );
  
    
    if (this.imageFile instanceof File) {
      formData.append('image', this.imageFile);
    }
  
    this.showService.insertShow(formData).subscribe(
      data => {
        console.log('Show saved successfully:', data);
        this.loadShows(); 
      },
      error => {
        console.error('Error saving show:', error);
      }
    );
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file; 
      console.log('File selected:', file.name); 
    }
}
deleteShow(id:any) {
const isConfirmed = window.confirm('Are you sure you want to delete this show?');
if(isConfirmed){

  console.log(id);
  this.showService.deleteShow(id).subscribe(data =>{
    this.loadShows()
    
  })
}

}   

update(show:any){
this.router.navigate(['/admin/dashboard/update',show.id])
}


}      



   

