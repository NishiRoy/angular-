import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import {AuthorService} from '../author.service';
import {FormsModule } from '@angular/forms';
import {Router } from '@angular/router';
@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private _authorService:AuthorService,private router:Router) { }
  authors:any;
  ngOnInit() {

    let id= this.route.snapshot.paramMap.get('id');

    let temp=this._authorService.getAuthor(id);

    temp.subscribe(data=>{
      console.log("Here mate",data['data']);
      let val=data['data'];

      this.authors={
        name:data['data'][0].name,
        id:data['data'][0]._id,
      }      

    });
  }


  onSubmit(event){
    event.preventDefault();

    console.log(this.authors);

    let temp=this._authorService.editAuthor(this.authors);

    temp.subscribe(data=>console.log(data));

    this.router.navigate(['/home']);
  }

  cancel(){
    console.log("Cancelling shit");
    this.authors='';
    this.router.navigate(['/home']);
  }


}
