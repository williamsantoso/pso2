import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EditAffixComponent } from './edit-affix/edit-affix.component';
import { ViewAffixComponent } from './view-affix/view-affix.component';
import { ListAffixComponent } from './list-affix/list-affix.component';
import { AffixComponent } from './affix.component';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    MatTableModule
  ],
  declarations: [
    AffixComponent,
    ListAffixComponent,
    ViewAffixComponent,
    EditAffixComponent
  ],
  exports: [
    AffixComponent,
    ListAffixComponent,
    ViewAffixComponent,
    EditAffixComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AffixModule { }
