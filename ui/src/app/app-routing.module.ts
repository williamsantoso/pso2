import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffixComponent } from './entities/affix/affix.component';

const routes: Routes = [
  {
    path: 'affix',
    component: AffixComponent
  },
  {
    path: '**',
    component: AffixComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
