
import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../../service/category-service.service';
import { Category } from '../../model/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: false,
  
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  categories: any [] = [];
  category = new Category ()


constructor( private categoryService : CategoryServiceService , private route : Router){}

  


ngOnInit(): void {
  this.loadCategory();
}

loadCategory() {
 
  
  this.categoryService.getCategory().subscribe(
    (dataCategory: any) => {
      this.categories = dataCategory;
      console.log(dataCategory);
    },
    (error: any) => {
      console.error('Error loading categories:', error);
    }
  );
}
onSaveCategory() {
  const formData = new FormData();
  formData.append('title', this.category.title);
  formData.append('description', this.category.description);

  this.categoryService.insertCategory(formData).subscribe(
    (dataCategory) => {
      console.log('Category saved successfully:', dataCategory);
      this.loadCategory();  
    },
    (error) => {
      console.error('Error saving category:', error);
    }
  );
}
deleteCategory(id:any) {
  const isConfirmed = window.confirm('Are you sure you want to delete this show?');
  if(isConfirmed){
  
    this.categoryService.deletetegory(id).subscribe(dataCategory =>{
      this.loadCategory()
      
    })
  }
  
  }   
  updateCategory(category: any){
    this.route.navigate(['/admin/dashboard/category/update',category.id])
  }
}
