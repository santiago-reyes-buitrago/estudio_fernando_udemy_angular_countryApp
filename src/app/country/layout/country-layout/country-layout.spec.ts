import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLayout } from './country-layout';

describe('CountryLayout', () => {
  let component: CountryLayout;
  let fixture: ComponentFixture<CountryLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
