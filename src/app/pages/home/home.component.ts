import { Component, OnInit } from '@angular/core';
import { DataNotice } from 'src/assets/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photoCover:string = ''
  contentTiltle:string = ''
  contentDescription:string= ''

  constructor(){}

  ngOnInit(): void {
    console.log('Started component')  
    let insertBigCard = document.getElementById('content__big-card')
    let insertSmallCard = document.getElementById('content__small-card')  
    
  }

  setContentBigCard(){
    let filterVideo = DataNotice.filter(element => element.id == "1")
    return filterVideo
  }

}
