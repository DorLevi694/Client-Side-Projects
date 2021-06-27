import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListBoxComponent } from './todo-list-box.component';

describe('ListBoxComponent', () => {
  let component: TodoListBoxComponent;
  let fixture: ComponentFixture<TodoListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
