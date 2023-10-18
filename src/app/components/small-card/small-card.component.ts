import { Component,Input ,OnInit} from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input() Image!: string;
  @Input() Paragraph!:string;
  @Input() Title!: string;
  @Input() Description!: string;
  @Input() Id!: string;
  
  ngOnInit(): void {
      
  }
  
  
}
