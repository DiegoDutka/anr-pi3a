import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParcelLibreComponent } from './add-parcel-libre.component';

describe('AddParcelLibreComponent', () => {
  let component: AddParcelLibreComponent;
  let fixture: ComponentFixture<AddParcelLibreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddParcelLibreComponent]
    });
    fixture = TestBed.createComponent(AddParcelLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
