import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlibreComponent } from './editlibre.component';

describe('EditlibreComponent', () => {
  let component: EditlibreComponent;
  let fixture: ComponentFixture<EditlibreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditlibreComponent]
    });
    fixture = TestBed.createComponent(EditlibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
