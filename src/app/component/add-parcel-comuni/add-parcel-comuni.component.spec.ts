import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParcelComuniComponent } from './add-parcel-comuni.component';

describe('AddParcelComuniComponent', () => {
  let component: AddParcelComuniComponent;
  let fixture: ComponentFixture<AddParcelComuniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddParcelComuniComponent]
    });
    fixture = TestBed.createComponent(AddParcelComuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
