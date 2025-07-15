import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByRegion } from './by-region';

describe('ByRegion', () => {
  let component: ByRegion;
  let fixture: ComponentFixture<ByRegion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByRegion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByRegion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
