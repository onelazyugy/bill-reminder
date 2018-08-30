import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuniTodoComponent } from './huni-todo.component';

describe('HuniTodoComponent', () => {
  let component: HuniTodoComponent;
  let fixture: ComponentFixture<HuniTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuniTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuniTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
