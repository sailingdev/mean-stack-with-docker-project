import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SchemaService {

  constructor(private http : HttpClient) {}

  find(type, category?) : Observable <any> {
    return this.http.get(`/api/schema?type=${type}${category ? `&category=${category}`: ''}`);
  }

  findOne(id) : Observable <any> {
    return this.http.get(`/api/schema/${id}`);
  }

  tree(type): Observable <any> {
    return this.http.get(`/api/schema/tree?type=${type}`);
  }
  
}
