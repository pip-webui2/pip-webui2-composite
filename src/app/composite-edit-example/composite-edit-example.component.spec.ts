import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeEditExampleComponent } from './composite-edit-example.component';

describe('CompositeEditExampleComponent', () => {
  let component: CompositeEditExampleComponent;
  let fixture: ComponentFixture<CompositeEditExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositeEditExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositeEditExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
