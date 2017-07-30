import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Note } from '../note/note';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class NoteService {
  private _noteData =
    `https://gist.githubusercontent.com/
jasonhodges/26627207d3b067cc859d97089bb56d5b/
raw/95255bdcf24bf6f5c14e1135d931810d54b9ee16/notes.json`;

  constructor(private http: Http) { }

  getNotes(): Observable<Note[]> {
    return this.http.get(this._noteData)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = Array.from(res.json());
    console.log('res as Array: ', body);
    return body;
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
