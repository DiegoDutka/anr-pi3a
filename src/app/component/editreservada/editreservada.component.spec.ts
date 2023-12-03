import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreservadaComponent } from './editreservada.component';

describe('EditreservadaComponent', () => {
  let component: EditreservadaComponent;
  let fixture: ComponentFixture<EditreservadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditreservadaComponent]
    });
    fixture = TestBed.createComponent(EditreservadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
