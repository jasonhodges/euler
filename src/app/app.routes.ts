import { SoundComponent } from './sound/sound.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'sound', component: SoundComponent },
  { path: '**',    component: NoContentComponent },
];
