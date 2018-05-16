import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../author.service';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private _authorService:AuthorService,private router:Router) { }

  ngOnInit() {

  }
  author:any;

  onSubmit(event){
    event.preventDefault();

    let temp=this._authorService.createNew(this.author);

    temp.subscribe(data=>console.log(data));

    this.router.navigate(['/home']);
  }

  cancel(){
    console.log("Cancelling shit");
    this.author='';
    this.router.navigate(['/home']);
  }

}
