import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParcelComuniComponent } from './list-parcel-comuni.component';

describe('ListParcelComuniComponent', () => {
  let component: ListParcelComuniComponent;
  let fixture: ComponentFixture<ListParcelComuniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListParcelComuniComponent]
    });
    fixture = TestBed.createComponent(ListParcelComuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
