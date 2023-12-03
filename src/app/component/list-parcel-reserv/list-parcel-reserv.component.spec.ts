import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParcelReservComponent } from './list-parcel-reserv.component';

describe('ListParcelReservComponent', () => {
  let component: ListParcelReservComponent;
  let fixture: ComponentFixture<ListParcelReservComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListParcelReservComponent]
    });
    fixture = TestBed.createComponent(ListParcelReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
