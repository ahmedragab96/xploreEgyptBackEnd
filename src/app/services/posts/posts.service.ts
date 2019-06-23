import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  GetAllPosts() {
    return this.http.get('http://localhost:3000/posts/getall');
  }

  decodeToken() {
    const token = localStorage.getItem('token');
    const payload = jwt_decode(token);
    console.log(payload);
    const userId = payload.userId;
    return userId;
  }

  savePost(newPost) {
    const body = newPost;
    body['userID'] = this.decodeToken();
    body['upVoting'] = 0;
    body['downVoting'] = 0;
    console.log(body);
    return this.http.post('http://localhost:3000/posts/postapost', body).subscribe(data => {
      console.log('POST Request is successful ', data);
    },
      error => { console.log('Error', error); });
  }

}
