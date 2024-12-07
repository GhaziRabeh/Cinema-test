import {  Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../../config';

import { ShowTvServiceService } from '../service/show-tv-service.service';
import { ActivatedRoute } from '@angular/router';
import { ShowTv } from '../model/showTv';

@Component({
  selector: 'app-details-show-tv',
  standalone: false,
  
  templateUrl: './details-show-tv.component.html',
  styleUrl: './details-show-tv.component.css'
})
export class DetailsShowTvComponent implements OnInit{

  showtv =  new ShowTv();
  selectedShow: any = null;
  root_show_uri: string = APP_CONFIG.root_showTv_uri;  

  constructor(private showservice: ShowTvServiceService,private router : ActivatedRoute) {}

  ngOnInit(): void {
    this.loadShow();
  }

  
  loadShow() {
    const id = this.router.snapshot.paramMap.get('id')
    this.showservice.getShowTvById(id).subscribe(
      (dataShow: any) => {
        this.showtv = dataShow;  
      },
      (error) => {
        console.error('Error fetching shows:', error);
      }
    );
  }

 

}