import { SafePipe } from './safe.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [SafePipe],
  exports: [SafePipe]
})
export class SafeModule {}
