import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Injectable()
export class PostsService {
    constructor(private http: HttpClient) {}
    loadPosts(id: number): Observable<any> {
      return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map((posts: any) => {
        return posts.filter(post => post.userId === id);
      }));
    }
}
