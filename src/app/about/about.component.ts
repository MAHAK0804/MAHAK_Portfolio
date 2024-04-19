import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,MatIconModule,NgbProgressbarModule,NgbRatingModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
 
})
export class AboutComponent {
  currentRate1 = 3;
  currentRate2 = 6;

  currentRate3 = 7;
  currentRate4 = 5;
  currentRate5 = 4;
  




}
