import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAffixComponent } from './view-affix.component';

describe('ViewAffixComponent', () => {
  let component: ViewAffixComponent;
  let fixture: ComponentFixture<ViewAffixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAffixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
