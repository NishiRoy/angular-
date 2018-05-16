import { Component,OnInit } from '@angular/core';
import {AuthorService} from './author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Authors';

  constructor(private _authorService:AuthorService){}

  ngOnInit(){
    this.getAllAuthors();

  }

  getAllAuthors(){

    let temp= this._authorService.getAll();

    temp.subscribe(data=>{
      console.log(data);
    })
  }

}
