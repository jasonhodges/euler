import { SoundComponent } from './sound.component';
import { RouterModule } from '@angular/router';

const SoundRoutes = [
  {path: '', component: SoundComponent}
]

export default RouterModule.forChild(SoundRoutes);