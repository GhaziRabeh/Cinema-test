import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../../../../config';
import { ShowTv } from '../../../model/showTv';
import { Category } from '../../../model/category';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ShowTvServiceService } from '../../../service/show-tv-service.service';
import { CategoryServiceService } from '../../../service/category-service.service';

@Component({
  selector: 'app-update-show-tv',
  standalone: false,
  
  templateUrl: './update-show-tv.component.html',
  styleUrl: './update-show-tv.component.css'
})
export class UpdateShowTvComponent implements OnInit{
  root_show_uri: string = APP_CONFIG.root_showTv_uri;
  showtv = new ShowTv()

  categories: any [] = [];
  category = new Category
  id!: number;
  imageFile: File | null = null; 

constructor( private routerBack: Router, 
  private router: ActivatedRoute
,private showtvService : ShowTvServiceService,
private categoryService : CategoryServiceService){}


  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = parseInt(idParam, 10);
      }
      this.getCategory();
      this.getShowTv();
    });
  }


  getCategory() {
    this.categoryService.getCategory().subscribe((data: any[]) => {
      this.categories = data; 
    });
  }
  getShowTv() {
    this.showtvService.getShowTvById(this.id).subscribe((data) => {
      this.showtv = data;
    });
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file; 
      console.log('File selected:', file.name); 
    }
}
updateShowTv() {
  const formData = new FormData();

  
  formData.append('name', this.showtv.name);
  formData.append('description', this.showtv.description);

 
  if (this.showtv.category_id) {
    formData.append('category_id', this.showtv.category_id.toString());
  }

  
  if (this.showtv.image) {
    formData.append('image', this.showtv.image);
  }

  
  this.showtvService.updateShowTv(this.id, formData).subscribe(
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

