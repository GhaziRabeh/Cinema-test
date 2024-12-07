import { CategoryServiceService } from './../../../service/category-service.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model/category';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-category-update',
  standalone: false,
  
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.css'
})
export class CategoryUpdateComponent implements OnInit{
  id!: number;
  categories: any [] = [];
  category = new Category ()
constructor(private categoryService :CategoryServiceService, 
  private routerBack: Router,
  private Router:ActivatedRoute){}


  ngOnInit(): void {
    this.Router.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = parseInt(idParam, 10);
      }
      this.getCategory();
    });
  }

  
  getCategory() {
    this.categoryService.getCategoryById(this.id).subscribe((dataCategory) => {
      this.category = dataCategory;
    });
  }



  updateCategory() {
    const formData = new FormData();
    formData.append('title', this.category.title);
    formData.append('description', this.category.description);

   
    this.categoryService.updatetegory(this.id, formData).subscribe(
      (data) => {
        console.log('Show updated successfully', data);
        this.routerBack.navigate(['/admin/categories']);  
      },
      (error) => {
        console.error('Error updating show', error);  
      }
    );
  }
}
