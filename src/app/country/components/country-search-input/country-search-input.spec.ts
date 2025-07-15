import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySearchInput } from './country-search-input';

describe('CountrySearchInput', () => {
  let component: CountrySearchInput;
  let fixture: ComponentFixture<CountrySearchInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrySearchInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrySearchInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
