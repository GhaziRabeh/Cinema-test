import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsShowTvComponent } from './details-show-tv.component';

describe('DetailsShowTvComponent', () => {
  let component: DetailsShowTvComponent;
  let fixture: ComponentFixture<DetailsShowTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsShowTvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsShowTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
