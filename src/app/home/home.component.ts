import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../author.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _authorService:AuthorService,private router:Router) { }

  authors:any;
  ngOnInit(){
    this.getAllAuthors();

  }

  getAllAuthors(){

    let temp= this._authorService.getAll();

    temp.subscribe(data=>{
      console.log(data);
      this.authors=data['data'];
    })
  }

  edit(id){
      this.router.navigate(['/edit',id]);
  }

  viewQuotes(id){

    this.router.navigate(['/quotes',id]);
  }


}
