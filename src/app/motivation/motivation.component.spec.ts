import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationComponent } from './motivation.component';

describe('MotivationComponent', () => {
  let component: MotivationComponent;
  let fixture: ComponentFixture<MotivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
