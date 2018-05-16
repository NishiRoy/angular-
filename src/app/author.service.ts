import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private _http: HttpClient) { }

  
  getAll(){
    return this._http.get('/authors');
  }

  getAuthor(id){
    console.log('Here I am',id);
    return this._http.get('/author/'+id);
  }

  editAuthor(values){
    console.log("Editing",values);
    return this._http.post('/edit',values);
  }

  createNew(values){
    console.log("Here I am ",values);
    return this._http.post('/create',{data:values});
  }

  destroy(id){
    console.log("delete",id);
    return this._http.get('/destroy/'+id);
  }

  postquote(values){
    return this._http.post('/postquote',{data:values});
  }

  editPost(values,id){
    console.log("hit this");
    return this._http.post('/editpost',{id:id,votes:values});
  }
}
