import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTvComponent } from './show-tv.component';

describe('ShowTvComponent', () => {
  let component: ShowTvComponent;
  let fixture: ComponentFixture<ShowTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowTvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
