/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { shell } from 'electron';
import { AppState } from './reducers';
import { Store } from '@ngrx/store';
import { HomeState } from './home/home.reducer';
import { HomeActions } from './home/home.actions';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Index
      </a>
      <a [routerLink]=" ['./sound'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Sound
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.state$ = {{ state$ | async | json }}</pre>

  `
})
export class AppComponent implements OnInit {
  public name = 'Euler';
  public state$: Observable<HomeState>;

  constructor(
    private store: Store<AppState>,
    private homeActions: HomeActions,
  ) {
    this.state$ = this.store.select(state => state.home);
  }

  public ngOnInit() {
    this.state$.take(1)
      .subscribe(state => {
        console.log('Initial App State', state);
      });
  }

  public openURL(url) {
    shell.openExternal(url);
  }

}
