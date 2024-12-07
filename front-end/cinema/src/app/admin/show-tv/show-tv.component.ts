import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category';
import { APP_CONFIG } from '../../../config';
import { ShowTvServiceService } from '../../service/show-tv-service.service';
import { CategoryServiceService } from '../../service/category-service.service';
import { Router } from '@angular/router';
import { ShowTv } from '../../model/showTv';

@Component({
  selector: 'app-show-tv',
  standalone: false,
  
  templateUrl: './show-tv.component.html',
  styleUrl: './show-tv.component.css'
})
export class ShowTvComponent  implements OnInit{
  showsTv: any[] = [];
  showTv = new ShowTv ()

  categories : any [] = [];
  Category = new Category();

  imageFile: File | null = null;  
  root_showTv_uri : string = APP_CONFIG.root_showTv_uri;
  
  
  constructor( private showTVService : ShowTvServiceService, 
    private categoryService:CategoryServiceService,
  private router : Router ){}



  
    ngOnInit(): void {
      this.loadShowTv();
      this.loadCategory();
    }


    loadCategory() {
      this.categoryService.getCategory().subscribe(
        (dataCategory: any) => {
          this.categories = dataCategory; 
          console.log("Categories loaded:", this.categories);
        },
        (error: any) => {
          console.error('Error loading categories:', error);
        }
      );
    }



    loadShowTv() {
      this.showTVService.getShowTv().subscribe(
        (dataShowTv: any) => {this.showsTv = dataShowTv.show_tv;} )
           
    }

    onSaveshowsTv() {
      const formData = new FormData();
      formData.append('name', this.showTv.name);
      formData.append('description', this.showTv.description);
      formData.append('rate', this.showTv.rate ? this.showTv.rate.toString() : '0');  
      if (this.showTv.category_id) {
        formData.append('category_id', this.showTv.category_id.toString());
      }
      if (this.imageFile instanceof File) {
        formData.append('image', this.imageFile);
      }
    
      this.showTVService.insertShowTv(formData).subscribe(
        datashowsTv => {
          console.log('Movie saved successfully:', datashowsTv);
          this.loadShowTv(); 
        },
        error => {
          console.error('Error saving movie:', error)
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
  deleteshowsTv(id:any) {
    const isConfirmed = window.confirm('Are you sure you want to delete this show?');
    if(isConfirmed){
    
      console.log(id);
      this.showTVService.deleteShowTv(id).subscribe(datashowsTv =>{
        this.loadShowTv()
        
      })
    }
    
    } 
    update(showtv:any){
      this.router.navigate(['/admin/showsTv/update',showtv.id])
      }
}
