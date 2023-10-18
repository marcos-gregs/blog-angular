import { Component ,Input,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataNotice } from 'src/assets/data/data';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  @Input() Image !:string;
  @Input() Title !: string;
  @Input() Description !: string;
  @Input() Paragraph !: string;
  @Input() Categorize !: string[];
  private  Id:string | null = '0'
constructor(
  private route:ActivatedRoute
){}

  ngOnInit(): void {
        this.route.paramMap.subscribe(value => { this.Id = value.get('id')})
        this.setValueNotice(this.Id)
       
  }

 
  setValueNotice(id:string|null){
    const filterNotice = DataNotice.filter(element => element.id == id)[0]
    this.Title =  filterNotice.Title
    this.Paragraph  = filterNotice.Paragraph 
    this.Description = filterNotice.Description
    this.Image = filterNotice.Image
    this.Categorize = filterNotice.Categorias
    console.log( this.Categorize)
  }
}


