import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HizmetlerimizComponent } from './hizmetlerimiz.component';

describe('HizmetlerimizComponent', () => {
  let component: HizmetlerimizComponent;
  let fixture: ComponentFixture<HizmetlerimizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HizmetlerimizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HizmetlerimizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
