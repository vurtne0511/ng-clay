import { NgModule } from '@angular/core';

import { NcProgressCircleComponent } from './progress-circle.component';
import { NcProgressComponent } from './progress.component';

@NgModule({
  exports: [NcProgressComponent, NcProgressCircleComponent],
  declarations: [NcProgressComponent, NcProgressCircleComponent]
})
export class NcProgressModule { }
