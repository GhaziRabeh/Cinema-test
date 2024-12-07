import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShowTvComponent } from './update-show-tv.component';

describe('UpdateShowTvComponent', () => {
  let component: UpdateShowTvComponent;
  let fixture: ComponentFixture<UpdateShowTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateShowTvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateShowTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
