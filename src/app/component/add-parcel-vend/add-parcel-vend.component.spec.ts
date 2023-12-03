import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParcelVendComponent } from './add-parcel-vend.component';

describe('AddParcelVendComponent', () => {
  let component: AddParcelVendComponent;
  let fixture: ComponentFixture<AddParcelVendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddParcelVendComponent]
    });
    fixture = TestBed.createComponent(AddParcelVendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
