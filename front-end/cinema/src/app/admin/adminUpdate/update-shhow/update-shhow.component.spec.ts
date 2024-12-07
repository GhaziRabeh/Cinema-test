import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShhowComponent } from './update-shhow.component';

describe('UpdateShhowComponent', () => {
  let component: UpdateShhowComponent;
  let fixture: ComponentFixture<UpdateShhowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateShhowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateShhowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
