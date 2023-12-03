import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParcelVendComponent } from './list-parcel-vend.component';

describe('ListParcelVendComponent', () => {
  let component: ListParcelVendComponent;
  let fixture: ComponentFixture<ListParcelVendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListParcelVendComponent]
    });
    fixture = TestBed.createComponent(ListParcelVendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
