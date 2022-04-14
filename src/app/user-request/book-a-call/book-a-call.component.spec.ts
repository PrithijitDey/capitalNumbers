import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookACallComponent } from './book-a-call.component';

describe('BookACallComponent', () => {
  let component: BookACallComponent;
  let fixture: ComponentFixture<BookACallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookACallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookACallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
