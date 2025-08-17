import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiyatlarComponent } from './fiyatlar.component';

describe('FiyatlarComponent', () => {
  let component: FiyatlarComponent;
  let fixture: ComponentFixture<FiyatlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiyatlarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiyatlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
