import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParcelLibreComponent } from './list-parcel-libre.component';

describe('ListParcelLibreComponent', () => {
  let component: ListParcelLibreComponent;
  let fixture: ComponentFixture<ListParcelLibreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListParcelLibreComponent]
    });
    fixture = TestBed.createComponent(ListParcelLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
