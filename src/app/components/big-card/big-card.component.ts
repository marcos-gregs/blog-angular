import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  
     @Input() Image!: string;
     @Input() Paragraph!:string;
     @Input() Title!: string;
     @Input() Description!: string;
     @Input() Id!: string;

     ngOnInit(): void {
         
     }
     

  
 

}
