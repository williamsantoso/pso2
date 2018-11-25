import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAffixComponent } from './list-affix.component';
import { MatTableModule } from '@angular/material';

describe('ListAffixComponent', () => {
  let component: ListAffixComponent;
  let fixture: ComponentFixture<ListAffixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAffixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
