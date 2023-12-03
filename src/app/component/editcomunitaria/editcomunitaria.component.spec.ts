import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcomunitariaComponent } from './editcomunitaria.component';

describe('EditcomunitariaComponent', () => {
  let component: EditcomunitariaComponent;
  let fixture: ComponentFixture<EditcomunitariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditcomunitariaComponent]
    });
    fixture = TestBed.createComponent(EditcomunitariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
