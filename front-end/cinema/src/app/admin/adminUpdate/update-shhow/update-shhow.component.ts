import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';
import { ShowService } from '../../../service/show.service';
import { Show } from '../../../model/showModel';
import { APP_CONFIG } from '../../../../config';

@Component({
  selector: 'app-update-shhow',
  standalone: false,
  templateUrl: './update-shhow.component.html',
  styleUrl: './update-shhow.component.css'
})
export class UpdateShhowComponent implements OnInit {
  id!: number;
  root_media_uri: string = APP_CONFIG.root_media_uri;
  show = new Show();

  constructor(
     private showService: ShowService,
     private routerBack: Router, 
     private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = parseInt(idParam, 10);
      }
      this.getShow();
    });
  }

  getShow() {
    this.showService.getShowById(this.id).subscribe((data) => {
      this.show = data;
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.show.image = file;
    }
  }

  updateShow() {
    const formData = new FormData();
    
    formData.append('title', this.show.title);
    formData.append('description', this.show.description);

    if (this.show.image) {
      formData.append('image', this.show.image);
    }

    this.showService.updateShow(this.id, formData).subscribe(
      (data) => {
        console.log('Show updated successfully', data);
        this.routerBack.navigate(['/admin/dashboard']);  
      },
      (error) => {
        console.error('Error updating show', error);  
      }
    );
  }
}
