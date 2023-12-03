import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParcelReservComponent } from './add-parcel-reserv.component';

describe('AddParcelReservComponent', () => {
  let component: AddParcelReservComponent;
  let fixture: ComponentFixture<AddParcelReservComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddParcelReservComponent]
    });
    fixture = TestBed.createComponent(AddParcelReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
