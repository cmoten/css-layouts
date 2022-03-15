import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsoluteComponent } from './absolute/absolute.component';
import { FixedComponent } from './fixed/fixed.component';
import { FloatComponent } from './float/float.component';
import { MultiColumnComponent } from './multi-column/multi-comlumn.component';
import { RelativeComponent } from './relative/relative.component';
import { StaticComponent } from './static/static.component';

const routes: Routes = [
  { path: '', component: StaticComponent },
  { path: 'relative', component: RelativeComponent },
  { path: 'fixed', component: FixedComponent },
  { path: 'absolute', component: AbsoluteComponent },
  { path: 'float', component: FloatComponent },
  { path: 'multi', component: MultiColumnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
