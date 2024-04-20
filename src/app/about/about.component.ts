import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
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
  
name:string="";
email:string="";
message:string="";

constructor(private http:HttpClient)
{

}
sumbit()
{
  let bodyData={
    "name":this.name,
    "email":this.email,
    "message":this.message,

  };
  this.http.post("http://localhost:4200/",bodyData,{responseType:"text"}).subscribe((resultData:any)=>
  {
    console.log(resultData);
    alert("Your message Sent");

    this.name='';
    this.email='';
    this.message='';

  });
}



}
