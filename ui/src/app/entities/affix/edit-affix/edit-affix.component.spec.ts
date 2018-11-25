import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAffixComponent } from './edit-affix.component';

describe('EditAffixComponent', () => {
  let component: EditAffixComponent;
  let fixture: ComponentFixture<EditAffixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAffixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
