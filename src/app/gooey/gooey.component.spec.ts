import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooeyComponent } from './gooey.component';

describe('GooeyComponent', () => {
  let component: GooeyComponent;
  let fixture: ComponentFixture<GooeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
