import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropietarioComponent } from './add-propietario.component';

describe('AddPropietarioComponent', () => {
  let component: AddPropietarioComponent;
  let fixture: ComponentFixture<AddPropietarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPropietarioComponent]
    });
    fixture = TestBed.createComponent(AddPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
